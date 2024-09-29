package com.HospitalManagementSystem.HospitalManagement.controller;

import com.HospitalManagementSystem.HospitalManagement.entity.Patient;
import com.HospitalManagementSystem.HospitalManagement.repositery.PatientRepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")

public class PatientController {
    @Autowired
    private PatientRepositery patientRepositery;

    @PostMapping("/insert")
    public Patient createPatient(@RequestBody Patient patient){
        return patientRepositery.save(patient);
    }

    @GetMapping
    public List<Patient> getPatients(){
        return patientRepositery.findAll();
    }

}
