package com.max.hand.test.task.pojo;

public class RequisitionPojo {
    private long id;
    private String name;
    private String emailFrom;
    private String emailTo;
    private boolean status;

    public RequisitionPojo() {
    }

    public RequisitionPojo(long id, String name, String emailFrom, String emailTo, boolean status) {
        this.id = id;
        this.name = name;
        this.emailFrom = emailFrom;
        this.emailTo = emailTo;
        this.status = status;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmailFrom() {
        return emailFrom;
    }

    public void setEmailFrom(String emailFrom) {
        this.emailFrom = emailFrom;
    }

    public String getEmailTo() {
        return emailTo;
    }

    public void setEmailTo(String emailTo) {
        this.emailTo = emailTo;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
