package com.HospitalManagementSystem.HospitalManagement.controller;

import com.HospitalManagementSystem.HospitalManagement.entity.Medicine;
import com.HospitalManagementSystem.HospitalManagement.repositery.MedicineRepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v3")

public class MedicineController {
    @Autowired
    MedicineRepositery medicineRepositery;

    @PostMapping("/insert")
    public Medicine createMedicine(@RequestBody Medicine medicine){
        return medicineRepositery.save(medicine);
    }
    @GetMapping
    public List<Medicine> getMedicine(){
        return medicineRepositery.findAll();
    }
}
