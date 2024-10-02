package com.HospitalManagementSystem.HospitalManagement.controller;

import com.HospitalManagementSystem.HospitalManagement.entity.Appointment;
import com.HospitalManagementSystem.HospitalManagement.repositery.AppointmentRepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.AttributeNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v2")

public class AppointmentController {
    @Autowired
    AppointmentRepositery appointmentRepositery;

    @PostMapping("/appointment")
    public Appointment createAppointment(@RequestBody Appointment appointment){
        return appointmentRepositery.save(appointment);
    }

    @GetMapping("/appointment")
    public List<Appointment> getAppointment(){
        return appointmentRepositery.findAll();
    }

    @DeleteMapping("/appointment/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteAppointment(@PathVariable long id) throws AttributeNotFoundException {
        Appointment appointment=appointmentRepositery.findById(id).orElseThrow(()->new AttributeNotFoundException("Appointment not found with id "+id));
        appointmentRepositery.delete(appointment);
        Map<String,Boolean> response=new HashMap<String,Boolean>();
        response.put("Deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }
}
