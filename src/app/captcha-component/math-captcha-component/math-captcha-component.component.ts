import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-math-captcha-component',
  standalone: true,
  imports: [],
  templateUrl: './math-captcha-component.component.html',
  styleUrl: './math-captcha-component.component.css'
})
export class MathCaptchaComponentComponent  implements OnInit {
  @Input() currentStage: number; // This allows the parent to bind to this property
  @Output() stageChange = new EventEmitter<number>(); 
  
  constructor(){

  }
  sign=["+","-","*"]
  ops: string;
  error: string
  _sign=""

  generate = () => {
   this.error=""
    let first = Math.floor(Math.random() * 10)* Math.floor(Math.random() * 10)
    let second = Math.floor(Math.random() * 10);
    this._sign = this.sign[ Math.floor(Math.random() * this.sign.length)];

    this.ops = first.toString()+this._sign + second.toString();

  }

  check(input:string){
    if (!(+input==eval(this.ops))) {
      this.error="Captch does not match"
      return
    }
    this.stageChange.emit(this.currentStage + 1);
  }

  ngOnInit(): void {
    this.generate()
  }

}
