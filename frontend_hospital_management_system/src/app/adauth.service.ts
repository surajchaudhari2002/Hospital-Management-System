import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdauthService {
  authenticate(username: string, password: string) {
    if(username=="suraj" && password=="Suraj123"){
      sessionStorage.setItem('username',username)
      return true;

    }
    else{
      return false;
    }
  }

  constructor() { }
}
