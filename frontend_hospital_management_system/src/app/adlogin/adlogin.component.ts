import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdauthService } from '../adauth.service';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrl: './adlogin.component.css'
})
export class AdloginComponent {
  username:string="";
  password:string="";
  inValidLogin=false;

  constructor(private router:Router, private adauthService:AdauthService){}
checkLogin(){
     if(this.adauthService.authenticate(this.username,this.password)){
      this.router.navigate(['admin']);
      this.inValidLogin=false;
     }
     else{
      this.inValidLogin=true;
      alert("Wrong Credentials!");
      this.router.navigate(['home']);
     }
}
}
