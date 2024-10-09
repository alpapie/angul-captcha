import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeComponentComponent } from './home-component/home-component.component'; // This is a service where you track the challenge completion status

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