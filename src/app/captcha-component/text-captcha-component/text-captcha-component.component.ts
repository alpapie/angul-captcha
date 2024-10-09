import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-captcha-component',
  standalone: true,
  imports: [],
  templateUrl: './text-captcha-component.component.html',
  styleUrl: './text-captcha-component.component.css'
})
export class TextCaptchaComponentComponent implements OnInit  {
  @Input() currentStage: number; // This allows the parent to bind to this property
  @Output() stageChange = new EventEmitter<number>(); 

  constructor(){

  }

  captcha: string;
  error: string

  alphabets = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';

  generate = () => {
   this.error=""
    let first = this.alphabets[Math.floor(Math.random() * this.alphabets.length)];
    let second = Math.floor(Math.random() * 10);
    let third = Math.floor(Math.random() * 10);
    let fourth = this.alphabets[Math.floor(Math.random() * this.alphabets.length)];
    let fifth = this.alphabets[Math.floor(Math.random() * this.alphabets.length)];
    let sixth = Math.floor(Math.random() * 10);
    this.captcha = first.toString() + second.toString() + third.toString() + fourth.toString() + fifth.toString() + sixth.toString();

  }

  check(result:string){
    if (!(result==this.captcha)) {
      this.error="Captch does not match"
      return
    }
    this.stageChange.emit(this.currentStage + 1);
  }

  ngOnInit(): void {
    this.generate()
  }
}
