package com.HospitalManagementSystem.HospitalManagement.repositery;

import com.HospitalManagementSystem.HospitalManagement.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface AppointmentRepositery extends JpaRepository<Appointment,Long> {
}
