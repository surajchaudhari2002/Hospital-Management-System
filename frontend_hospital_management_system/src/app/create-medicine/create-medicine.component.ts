import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrl: './create-medicine.component.css'
})
export class CreateMedicineComponent {
  
medicine:Medicine=new Medicine();
constructor(private medicineSerivice:MedicineService,private router:Router){}

saveMedicine(){
  this.medicineSerivice.createMedicine(this.medicine).subscribe(data=>{
    console.log(data);
    this.gotoViewMedicine();
  })
}

onSubmit(){
  this.saveMedicine();
}

gotoViewMedicine(){
  this.router.navigate(['view-medicine'])
}
}
