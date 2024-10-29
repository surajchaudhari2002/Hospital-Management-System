import { Component } from '@angular/core';
import { PatientService } from '../PatientService';
import { Patient } from '../patient';
import { AdauthService } from '../adauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {

  patients:Patient[]=[];
constructor(private patientService:PatientService,private adauthService:AdauthService,private router:Router){}

ngOnInit():void{
  this.getPatients();
}

getPatients(){
  this.patientService.getPatientList().subscribe(data=>{
      this.patients=data;
  })
}

delete(id:number){
  this.patientService.delete(id).subscribe(data=>{
    console.log(data);
    this.getPatients();
  })
}

logout(){
  this.adauthService.logOut();
  this.router.navigate(['home']);
}


}


