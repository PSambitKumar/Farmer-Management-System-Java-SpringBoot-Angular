package com.sambit.Model;

import javax.persistence.*;

@Entity
@Table
public class Relation {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String relationName;
    @Column
    private String name;
    @Column
    private String fathersName;
    @Column
    private int age;
    @Column
    private String gender;
    @Column
    private String mobile;
    @ManyToOne
    @JoinColumn(name = "bankId")
    private Bank bank;

    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "janAdhaarId")
    private Janadhaar janAdhaar;

    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "ackId")
    private Acknowledge acknowledge;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "adhaarId")
    private Aadhar aadhar;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRelationName() {
        return relationName;
    }

    public void setRelationName(String relationName) {
        this.relationName = relationName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFathersName() {
        return fathersName;
    }

    public void setFathersName(String fathersName) {
        this.fathersName = fathersName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public Bank getBank() {
        return bank;
    }

    public void setBank(Bank bank) {
        this.bank = bank;
    }

    public Janadhaar getJanAdhaar() {
        return janAdhaar;
    }

    public void setJanAdhaar(Janadhaar janAdhaar) {
        this.janAdhaar = janAdhaar;
    }

    public Acknowledge getAcknowledge() {
        return acknowledge;
    }

    public void setAcknowledge(Acknowledge acknowledge) {
        this.acknowledge = acknowledge;
    }

    public Aadhar getAadhar() {
        return aadhar;
    }

    public void setAadhar(Aadhar aadhar) {
        this.aadhar = aadhar;
    }

    @Override
    public String toString() {
        return "Relation{" +
                "id=" + id +
                ", relationName='" + relationName + '\'' +
                ", name='" + name + '\'' +
                ", fathersName='" + fathersName + '\'' +
                ", age=" + age +
                ", gender='" + gender + '\'' +
                ", mobile='" + mobile + '\'' +
                ", bank=" + bank +
                ", janAdhaar=" + janAdhaar +
                ", acknowledge=" + acknowledge +
                ", aadhar=" + aadhar +
                '}';
    }
}
