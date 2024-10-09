import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rotate-captcha-component',
  standalone: true,
  imports: [],
  templateUrl: './rotate-captcha-component.component.html',
  styleUrl: './rotate-captcha-component.component.css'
})
export class RotateCaptchaComponentComponent {
  @Input() currentStage: number; // This allows the parent to bind to this property
  @Output() stageChange = new EventEmitter<number>(); 
  
  rotateImage = { url: 'captcha-image/captcha.webp', correctRotation: 0 };
  rotation = 0;
  error=""

  rotateLeft() {
    this.rotation -= 30;
  }

  rotateRight() {
    this.rotation += 30;
  }

  isCorrectRotation(): boolean {
    return( this.rotation - 180) % 360 === this.rotateImage.correctRotation;
  }

  check(){
    if (!this.isCorrectRotation()) {
      this.error="Incorrect rotation"
      return 
    }
    this.stageChange.emit(this.currentStage + 1);
  }
}
