import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor( private router: Router) {}

  canActivate(): boolean {
    let isComplet=localStorage.getItem("currentStage")
    console.log(`auth gard ${isComplet}`);
    
    if (isComplet!=null && +isComplet==5) {
      return true; 
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}