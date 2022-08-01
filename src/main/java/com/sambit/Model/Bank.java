package com.sambit.Model;

import javax.persistence.*;

@Entity
@Table
public class Bank {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;
    private String bankName;
    private String ifscCode;
    private String accountNumber;
    private String mobileNumber;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getIfscCode() {
        return ifscCode;
    }

    public void setIfscCode(String ifscCode) {
        this.ifscCode = ifscCode;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    @Override
    public String toString() {
        return "Bank{" +
                "id=" + id +
                ", bankName='" + bankName + '\'' +
                ", ifscCode='" + ifscCode + '\'' +
                ", accountNumber='" + accountNumber + '\'' +
                ", mobileNumber='" + mobileNumber + '\'' +
                '}';
    }
}
