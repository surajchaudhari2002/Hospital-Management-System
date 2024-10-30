import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username:string,password:string){
    if (username=="suraj" && password=="suraj123") {
      sessionStorage.setItem('username',username);
      return true;
  }else{
    return false;
  }
}
isUserloggedIn(){
  console.log("User is logged in !");
  let user =sessionStorage.getItem('username');
  return !(user==null);
 }

 loggedOut(){
  console.log("User is logged Out !");
  sessionStorage.removeItem('username');
 }
}