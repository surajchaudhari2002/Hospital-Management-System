package com.HospitalManagementSystem.HospitalManagement.controller;

import com.HospitalManagementSystem.HospitalManagement.entity.Patient;
import com.HospitalManagementSystem.HospitalManagement.repositery.PatientRepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")

public class PatientController {
    @Autowired
    private PatientRepositery patientRepositery;

    @PostMapping("/insert")
    public Patient createPatient(@RequestBody Patient patient){
        return patientRepositery.save(patient);
    }

}
