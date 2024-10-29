import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdauthService {

  constructor() { }
  authenticate(username2: string, password2: string) {
    if(username2=="suraj" && password2=="Suraj123"){
      sessionStorage.setItem('username2',username2)
      return true;

    }
    else{
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("user is logged in !");
    let user=sessionStorage.getItem('username2');
    return !(user==null)
  }

  logOut(){
    console.log("user is logged out !")
     sessionStorage.removeItem('username2')
  }
}
