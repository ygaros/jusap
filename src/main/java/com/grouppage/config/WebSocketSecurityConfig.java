package com.grouppage.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.SimpMessageType;
import org.springframework.security.config.annotation.web.messaging.MessageSecurityMetadataSourceRegistry;
import org.springframework.security.config.annotation.web.socket.AbstractSecurityWebSocketMessageBrokerConfigurer;

//@Configuration
//public class WebSocketSecurityConfig extends AbstractSecurityWebSocketMessageBrokerConfigurer {
//
//    @Override
//    protected void configureInbound(MessageSecurityMetadataSourceRegistry registry){
//        registry
//                .simpTypeMatchers(SimpMessageType.CONNECT,
//                        SimpMessageType.DISCONNECT,
//                        SimpMessageType.OTHER).permitAll()
//                .anyMessage().authenticated();
//
//    }
//    @Override
//    protected boolean sameOriginDisabled(){
//        return true;
//    }
//}
