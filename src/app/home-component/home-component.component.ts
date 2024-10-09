import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TextCaptchaComponentComponent } from "../captcha-component/text-captcha-component/text-captcha-component.component";
import { ClickCaptchaComponentComponent } from "../captcha-component/click-captcha-component/click-captcha-component.component";
import { RotateCaptchaComponentComponent } from "../captcha-component/rotate-captcha-component/rotate-captcha-component.component";
import { MathCaptchaComponentComponent } from "../captcha-component/math-captcha-component/math-captcha-component.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [TextCaptchaComponentComponent, ClickCaptchaComponentComponent, RotateCaptchaComponentComponent, MathCaptchaComponentComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnChanges,OnInit {
  currentStage = 1
  constructor(private router: Router) { }
  ngOnInit(): void {
    let curr=localStorage.getItem("currentStage")
    if (curr!=null) {
      this.currentStage=+curr
    }
    this.changeState()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.currentStage < 1) {
      this.currentStage = 1
    }
   
    this.changeState();
  }

  private changeState() {
    localStorage.setItem('currentStage', this.currentStage.toString());
    console.log(localStorage.getItem("currentStage"));
    if (this.currentStage > 4) {
      this.router.navigate(["/result"])
      localStorage.clear()
      return 
    }
  }

  goBack(){
    if (this.currentStage>1) {
      this.currentStage--
      this.changeState()
    }
  }

  updateStage(newStage: number) {
    this.currentStage = newStage;
    this.changeState()
  }
  
}
