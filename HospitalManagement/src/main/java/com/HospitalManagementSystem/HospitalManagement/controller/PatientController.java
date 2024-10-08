package com.HospitalManagementSystem.HospitalManagement.controller;

import com.HospitalManagementSystem.HospitalManagement.entity.Appointment;
import com.HospitalManagementSystem.HospitalManagement.entity.Patient;
import com.HospitalManagementSystem.HospitalManagement.repositery.PatientRepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.management.AttributeNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")

public class PatientController {
    @Autowired
    private PatientRepositery patientRepositery;

    @PostMapping()
    public Patient createPatient(@RequestBody Patient patient){
        return patientRepositery.save(patient);
    }

    @GetMapping
    public List<Patient> getPatients(){
        return patientRepositery.findAll();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String,Boolean>> deletePatient(@PathVariable long id) throws AttributeNotFoundException {
        Patient patient=patientRepositery.findById(id).orElseThrow(()->new AttributeNotFoundException("Patient not found with id "+id));
        patientRepositery.delete(patient);
        Map<String,Boolean> response=new HashMap<String,Boolean>();
        response.put("Deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }
}
