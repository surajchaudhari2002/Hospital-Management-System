import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css'
})
export class MedicineComponent {
  medicines:Medicine[]=[];
constructor(private medicineService:MedicineService){}

ngOnInit():void{
  this.getMedicineList();
 }

getMedicineList(){
  this.medicineService.getMedicines().subscribe(data=>{
    this.medicines=data;
  })
}
}
