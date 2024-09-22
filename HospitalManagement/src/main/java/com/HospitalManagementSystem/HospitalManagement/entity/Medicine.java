package com.HospitalManagementSystem.HospitalManagement.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "medicines")

public class Medicine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String drugName;
    private String stock;
}
