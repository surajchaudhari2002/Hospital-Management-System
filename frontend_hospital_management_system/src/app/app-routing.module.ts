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
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';

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
 {path:'update-patient/:id',component:UpdatePatientComponent},
 {path:'view-patient/:id',component:ViewPatientComponent},
 {path:'update-medicine/:id',component:UpdateMedicineComponent},
 {path:'doclogin',component:DocloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
