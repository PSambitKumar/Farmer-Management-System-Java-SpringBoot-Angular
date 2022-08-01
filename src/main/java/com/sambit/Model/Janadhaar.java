package com.sambit.Model;

import javax.persistence.*;

@Entity
@Table
public class Janadhaar {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String janadhaarId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getJanadhaarId() {
        return janadhaarId;
    }

    public void setJanadhaarId(String janadhaarId) {
        this.janadhaarId = janadhaarId;
    }


    @Override
    public String toString() {
        return "JanAdhaar{" +
                "id=" + id +
                ", janadhaarId='" + janadhaarId + '\'' +
                '}';
    }
}
