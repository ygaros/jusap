package com.grouppage.security.filter;

import com.grouppage.exception.AccessTokenExpired;
import com.grouppage.exception.WrongCredentialsException;
import com.grouppage.security.CustomUserDetailsService;
import com.grouppage.security.jwt.JwtProvider;
import com.grouppage.security.jwt.SecurityCipher;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtFilter extends OncePerRequestFilter {

    private static final String BEARER = "Bearer ";
    private static final String LOGIN = "login";
    private static final String API = "api";
    private static final String REGISTER = "register";
    private static final String WEBSOCKET = "websocket";
    private final JwtProvider jwtProvider;

    public JwtFilter(JwtProvider jwtProvider) {
        this.jwtProvider = jwtProvider;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException, AccessTokenExpired, WrongCredentialsException {
        String requestUri = request.getRequestURI();
        if(requestUri.contains(API) && (!requestUri.contains(LOGIN) && !requestUri.contains(REGISTER))) {

            UserDetails userDetails = this.getUser(request);
            this.processAuth(request, userDetails);
        }
        filterChain.doFilter(request, response);
    }

    private UserDetails getUser(HttpServletRequest request) throws WrongCredentialsException {
        String auth = request.getHeader("Authorization");
        if(auth != null){
            return jwtProvider.getPrincipalFromToken(SecurityCipher.decrypt(auth.replace(BEARER, "")));
        }else{
            auth = this.getTokenFromCookie(request.getCookies());
            return jwtProvider.getPrincipalFromToken(auth);
        }
    }
    private void processAuth(HttpServletRequest request, UserDetails userDetails) {
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, userDetails.getPassword(), userDetails.getAuthorities());
        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    private String getTokenFromCookie(Cookie[] cookies)throws WrongCredentialsException {
        if(cookies == null) throw new WrongCredentialsException("Request doesnt contains neither header or cookie!");
        for (Cookie cookie : cookies) {
            if(cookie.getName().equals(jwtProvider.accessCookieName)){
                String token = SecurityCipher.decrypt(cookie.getValue());
                if(jwtProvider.isValidToken(token)) {
                    return token;
                }else{
                    throw new WrongCredentialsException("Token is not valid");
                }
            }
        }
        throw new WrongCredentialsException("We does not found any valid token");
    }

}
