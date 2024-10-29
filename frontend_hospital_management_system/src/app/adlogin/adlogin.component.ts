import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdauthService } from '../adauth.service';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrl: './adlogin.component.css'
})
export class AdloginComponent {
  username2:string="";
  password2:string="";
  inValidLogin=false;

  constructor(private router:Router, private adauthService:AdauthService){}
checkLogin(){
     if(this.adauthService.authenticate(this.username2,this.password2)){
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
