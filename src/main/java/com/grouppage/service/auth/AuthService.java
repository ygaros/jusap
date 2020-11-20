package com.grouppage.service.auth;

import com.grouppage.domain.entity.User;
import com.grouppage.domain.notmapped.Layout;
import com.grouppage.domain.notmapped.Token;
import com.grouppage.domain.repository.UserRepository;
import com.grouppage.domain.response.LoginRequest;
import com.grouppage.domain.response.RegisterRequest;
import com.grouppage.event.RegistrationEvent;
import com.grouppage.exception.UsernameAlreadyExists;
import com.grouppage.exception.WrongDataPostedException;
import com.grouppage.security.jwt.JwtProvider;
import com.grouppage.service.ExecService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;
import java.util.stream.Collectors;

@Service
@Transactional
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final ExecService execService;
    private final JwtProvider jwtProvider;

    @Autowired
    public AuthService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder,
                       AuthenticationManager authenticationManager,
                       ExecService execService,
                       JwtProvider jwtProvider) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.execService = execService;
        this.jwtProvider = jwtProvider;
    }

    public ResponseEntity<User> signIn(LoginRequest loginRequest) throws ExecutionException, InterruptedException, AccessDeniedException {
        Authentication authentication =
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(
                                loginRequest.getEmail(),
                                loginRequest.getPassword())
                );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        HttpHeaders headers = this.generateCookieWithNewTokens();
        return ResponseEntity.status(HttpStatus.ACCEPTED).headers(headers).body(
                this.userRepository.findByEmail(loginRequest.getEmail()).orElseThrow(
                        () -> new UsernameNotFoundException("User with email: "+ loginRequest.getEmail()+ " doesnt exists!")
                )
        );
    }


    public void signUp(RegisterRequest registerRequest)throws UsernameAlreadyExists {
        if (!userRepository.findByEmail(registerRequest.getEmail()).isPresent()) {
            userRepository.save(registerRequest.toUser(this.passwordEncoder));
            return;
        }
        throw new UsernameAlreadyExists("This email is taken!");
    }

    public ResponseEntity<Void> signOut() {
        HttpHeaders removeCookiesHeader =
                this.jwtProvider.deleteJwtCookies();
        return ResponseEntity.noContent().headers(removeCookiesHeader).build();
    }

    public void resetPassword(String email){

    }

    public User getUserFromContext() throws UsernameNotFoundException, AccessDeniedException {
        Object objectPrincipal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(objectPrincipal == null){
            throw new AccessDeniedException("STOP WHERE YOU ARE!!!");
        }
        String email;
        if(objectPrincipal instanceof UserDetails) {
            email = ((UserDetails) objectPrincipal).getUsername();
        }else {
            email = objectPrincipal.toString();
        }
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User with email "+ email+" doesnt exists!"));
    }
    private HttpHeaders generateCookieWithNewTokens() throws ExecutionException, InterruptedException, AccessDeniedException {
        HttpHeaders headers = new HttpHeaders();
        User user = this.getUserFromContext();
        Future<Token> futureAcces = execService.executeCallable(
                () -> jwtProvider.generateToken(user, true)
        );
        Future<Token> futureRefresh = execService.executeCallable(
                () -> jwtProvider.generateToken(user, false)
        );
        headers.add(HttpHeaders.SET_COOKIE, jwtProvider.generateCookieFromToken(futureAcces.get()).toString());
        headers.add(HttpHeaders.SET_COOKIE, jwtProvider.generateCookieFromToken(futureRefresh.get()).toString());
        return headers;
    }

    public void activateAccount(String uuid) throws WrongDataPostedException{
        Optional<User> optional = this.userRepository.findByResetPasswordToken(uuid);
        if(optional.isPresent()){
            optional.get().setActivated(true);
            execService.executeRunnable(
                    () -> this.userRepository.save(optional.get())
            );
        }else{
            throw new WrongDataPostedException("Invalid activation token");
        }
    }

    public List<Layout> getLayouts() throws AccessDeniedException {
        return this.getUserFromContext().getLayouts();
    }

    public void saveLayout(Layout layout) throws AccessDeniedException {
        User user = this.getUserFromContext();
        List<Layout> layouts = user.getLayouts();
        if(layouts == null){
            user.setLayouts(new ArrayList<Layout>(){{add(layout);}});
        }else{
            layouts.add(layout);
        }
        this.userRepository.save(user);
    }

    public void saveLayouts(List<Layout> layouts) throws AccessDeniedException {
        User user = this.getUserFromContext();
        List<Layout> old = user.getLayouts();
        if(old != null){
            old.addAll(layouts);
        }else{
            user.setLayouts(layouts);
        }
        this.userRepository.save(user);
    }

    public void deleteLayout(String name) throws AccessDeniedException {
        User user = this.getUserFromContext();
        user.setLayouts(user.getLayouts().stream().filter(l -> !l.getName().equals(name)).collect(Collectors.toList()));
        this.userRepository.save(user);
    }

    public void editLayout(Layout layout) throws AccessDeniedException {
        User user = this.getUserFromContext();
        user.setLayouts(user.getLayouts().stream().filter(l -> !l.getName().equals(layout.getName())).collect(Collectors.toList()));
        user.getLayouts().add(layout);
        this.userRepository.save(user);
    }
}

