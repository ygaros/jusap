package com.grouppage.exception;

public class AccessTokenExpired extends RuntimeException{
    public AccessTokenExpired(String message) {
        super(message);
    }
}
