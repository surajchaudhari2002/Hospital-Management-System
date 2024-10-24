import { Component } from '@angular/core';
import { PatientService } from '../PatientService';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Patient } from '../patient';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrl: './view-patient.component.css'
})
export class ViewPatientComponent {
id:number=0;
patient: Patient=new Patient();
constructor(private patientService:PatientService,private rout:ActivatedRoute ,private router:Router){}

ngOnInit():void{
  this.id=this.rout.snapshot.params['id'];
  this.patientService.getPatientById(this.id).subscribe(data=>{
    this.patient=data;
  })
}
}
