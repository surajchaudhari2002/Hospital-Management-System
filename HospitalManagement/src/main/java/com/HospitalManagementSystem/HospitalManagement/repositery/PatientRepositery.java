package com.HospitalManagementSystem.HospitalManagement.repositery;

import com.HospitalManagementSystem.HospitalManagement.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface PatientRepositery extends JpaRepository<Patient,Long> {
}
