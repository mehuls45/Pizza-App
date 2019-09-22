import { Router,CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate{

  role;

  constructor(
    private router: Router
  ) { }

  canActivate(): boolean {

    this.role = localStorage.getItem("role");
    if(this.role == 'user')
      return true;
    this.router.navigateByUrl('login')

  }
}
