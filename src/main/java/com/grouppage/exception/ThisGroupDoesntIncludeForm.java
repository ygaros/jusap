package com.grouppage.exception;


public class ThisGroupDoesntIncludeForm extends RuntimeException {
    public ThisGroupDoesntIncludeForm(String message) {
        super(message);
    }
}
