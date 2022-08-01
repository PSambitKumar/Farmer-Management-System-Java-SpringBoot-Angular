package com.sambit.Model;

import javax.persistence.*;

@Entity
@Table
public class Acknowledge {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String acknowledgeId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Acknowledge{" +
                "id=" + id +
                ", acknowledgeId='" + acknowledgeId + '\'' +
                '}';
    }

    public String getAcknowledgeId() {
        return acknowledgeId;
    }

    public void setAcknowledgeId(String acknowledgeId) {
        this.acknowledgeId = acknowledgeId;
    }
}
