import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicineComponent } from './medicine/medicine.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';

const routes: Routes = [
 { path:'admin',component:AdmindashComponent},
 {path:'appointmentlist',component:AppointmentsComponent},
 {path:'create-appointment',component:CreateAppointmentComponent},
 {path:'home',component:HomeComponent},
 {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'docdash',component:DocdashComponent},
 {path:'create-patient',component:CreatePatientComponent},
 {path:'view-medicine',component:MedicineComponent},
 {path:'create-medicine',component:CreateMedicineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
