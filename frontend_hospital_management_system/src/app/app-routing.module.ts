import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';

const routes: Routes = [
 { path:'admin',component:AdmindashComponent},
 {path:'appointmentlist',component:AppointmentsComponent},
 {path:'create-appointment',component:CreateAppointmentComponent},
 {path:'home',component:HomeComponent},
 {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'docdash',component:DocdashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
