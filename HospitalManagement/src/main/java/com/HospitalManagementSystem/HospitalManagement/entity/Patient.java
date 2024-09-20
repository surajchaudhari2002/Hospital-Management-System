package com.HospitalManagementSystem.HospitalManagement.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="patients")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column (name="name")
    private String name;
    @Column(name="age")
    private String age;
    @Column(name="blood_group")
    private String blood;
    @Column(name ="prescription")
    private String prescription;
    @Column(name="dose")
    private String dose;
    @Column(name="fees")
    private String fees;
    @Column(name ="urgency")
    private String urgency;
}
