import { Component } from '@angular/core';
import { PatientService } from '../PatientService';
import { Patient } from '../patient';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css'
})
export class CreatePatientComponent {
  patient:Patient=new Patient();
constructor(private patientService:PatientService,private router:Router){}

savePatient(){
  this.patientService.createPatient(this.patient).subscribe(data=>{
    console.log(data);
    this.gotoPatientlist();
  })
}

onSubmit(){
  this.savePatient();
}

gotoPatientlist(){
this.router.navigate(['/docdash'])
}

}
