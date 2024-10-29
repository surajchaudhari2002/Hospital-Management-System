import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AdauthService } from './adauth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthgauardService implements CanActivate{

  constructor(private router:Router,private adauthService:AdauthService) { }

  canActivate() {
       
    if(this.adauthService.isUserLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['adlogin'])
      return false;
    }
  }
}
