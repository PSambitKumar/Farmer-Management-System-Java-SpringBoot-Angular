package com.sambit.Model;

import javax.persistence.*;

@Entity
@Table
public class Aadhar {
    @Column
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String aadharId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public String getAadharId() {
        return aadharId;
    }

    public void setAadharId(String aadharId) {
        this.aadharId = aadharId;
    }
    @Override
    public String toString() {
        return "Aadhar{" +
                "id=" + id +
                ", aadharId='" + aadharId + '\'' +
                '}';
    }
}
