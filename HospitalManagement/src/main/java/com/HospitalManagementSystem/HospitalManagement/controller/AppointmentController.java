package com.HospitalManagementSystem.HospitalManagement.controller;

import com.HospitalManagementSystem.HospitalManagement.entity.Appointment;
import com.HospitalManagementSystem.HospitalManagement.repositery.AppointmentRepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v2")

public class AppointmentController {
    @Autowired
    AppointmentRepositery appointmentRepositery;

    @PostMapping("/insert")
    public Appointment createAppointment(@RequestBody Appointment appointment){
        return appointmentRepositery.save(appointment);
    }

    @GetMapping
    public List<Appointment> getAppointment(){
        return appointmentRepositery.findAll();
    }
}
