package com.example.demo.Models.entities;

public class Responses {

    private Integer status;
    private String message;
    private Iterable<Products> additionalData;

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Iterable<Products> getAdditionalData() {
        return additionalData;
    }

    public void setAdditionalData(Iterable<Products> additionalData) {
        this.additionalData = additionalData;
    }

    public Responses(Integer status, String message, Iterable<Products> additionalData) {
        this.status = status;
        this.message = message;
        this.additionalData = additionalData;
    }

    public Responses() {

    }

}
