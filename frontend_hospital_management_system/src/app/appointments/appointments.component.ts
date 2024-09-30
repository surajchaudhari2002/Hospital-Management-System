import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent {
  appointments:Appointment[]=[];
  constructor(private appointmentService:AppointmentService){}
  
  ngOnInit():void{
    this.getAppointment();
  }
  

  getAppointment(){
    this.appointmentService.getAppointments().subscribe(data=>{
      this.appointments=data;
    })
  }


}
