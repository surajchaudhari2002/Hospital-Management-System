import { Component } from '@angular/core';
import { Patient } from '../patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../PatientService';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent {
  id:number=0;
  constructor(private rout:ActivatedRoute,private patientServise:PatientService,private router:Router){}
 patient:Patient=new Patient();

 ngOnInit():void{
  this.id=this.rout.snapshot.params['id'];
  this.patientServise.getPatientById(this.id).subscribe(data=>{
    this.patient=data;
  })
 }
 onSubmit(){
  this.patientServise.updatePatient(this.id,this.patient).subscribe(data=>{
    console.log(data);
    this.goToDocdash();
  })
 }

 goToDocdash(){
  this.router.navigate(['/docdash']);
 }
}
