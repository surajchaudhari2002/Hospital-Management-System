package com.HospitalManagementSystem.HospitalManagement.controller;

import com.HospitalManagementSystem.HospitalManagement.entity.Medicine;
import com.HospitalManagementSystem.HospitalManagement.entity.Patient;
import com.HospitalManagementSystem.HospitalManagement.repositery.MedicineRepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.AttributeNotFoundException;
import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v3")

public class MedicineController {
    @Autowired
    MedicineRepositery medicineRepositery;

    @PostMapping()
    public Medicine createMedicine(@RequestBody Medicine medicine){
        return medicineRepositery.save(medicine);
    }
    @GetMapping
    public List<Medicine> getMedicine(){
        return medicineRepositery.findAll();
    }


    @GetMapping("/{id}")
    public ResponseEntity<Medicine> getmedicineByid(@PathVariable long id) throws AttributeNotFoundException {
        Medicine medicine=medicineRepositery.findById(id).orElseThrow(()->new AttributeNotFoundException("Medicine not found with id "+id));
        return ResponseEntity.ok(medicine);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Medicine> updateMedicine(@PathVariable long id, @RequestBody Medicine medicine) throws AttributeNotFoundException {
        Medicine medicine1=medicineRepositery.findById(id).orElseThrow(()->new AttributeNotFoundException("Medicine not found with id "+id));
        medicine1.setDrugName(medicine.getDrugName());
        medicine1.setStock(medicine1.getStock());
        Medicine sevedMedicine =medicineRepositery.save(medicine1);
        return ResponseEntity.ok(sevedMedicine);
    }
}
