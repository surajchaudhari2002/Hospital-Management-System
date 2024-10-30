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
import { AdloginComponent } from './adlogin/adlogin.component';
import { AdminauthgauardService } from './adminauthgauard.service';
import { DocauthgauardService } from './docauthgauard.service';

const routes: Routes = [
 { path:'admin',component:AdmindashComponent,canActivate:[AdminauthgauardService]},
 {path:'appointmentlist',component:AppointmentsComponent,canActivate:[AdminauthgauardService]},
 {path:'create-appointment',component:CreateAppointmentComponent,canActivate:[AdminauthgauardService]},
 {path:'home',component:HomeComponent},
 {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'docdash',component:DocdashComponent,canActivate:[DocauthgauardService]},
 {path:'create-patient',component:CreatePatientComponent,canActivate:[DocauthgauardService]},
 {path:'view-medicine',component:MedicineComponent,canActivate:[DocauthgauardService]},
 {path:'create-medicine',component:CreateMedicineComponent,canActivate:[DocauthgauardService]},
 {path:'update-patient/:id',component:UpdatePatientComponent,canActivate:[DocauthgauardService]},
 {path:'view-patient/:id',component:ViewPatientComponent,canActivate:[DocauthgauardService]},
 {path:'update-medicine/:id',component:UpdateMedicineComponent,canActivate:[DocauthgauardService]},
 {path:'doclogin',component:DocloginComponent},
 {path:'adlogin',component:AdloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
