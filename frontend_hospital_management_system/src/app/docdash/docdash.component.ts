import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../PatientService';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {

  constructor(private patientService:PatientService){}
  patients:Patient[]=[];

  ngOnInit():void{
   this.getPatients();
  }

  getPatients(){
    this.patientService.getPatientList().subscribe(data=>{
      this.patients=data;
    })
  }
}
