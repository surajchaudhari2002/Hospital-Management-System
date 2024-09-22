package com.HospitalManagementSystem.HospitalManagement.repositery;

import com.HospitalManagementSystem.HospitalManagement.entity.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface MedicineRepositery extends JpaRepository<Medicine,Long> {
}
