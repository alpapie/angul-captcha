import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponentComponent } from "./home-component/home-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponentComponent],
  templateUrl: './app.component.html',

})
export class AppComponent {
  captcha: string;
  alphabets = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
  status = document.getElementById('status');
  // status.innerText = "Captcha Generator";

  generate = () => {
    // console.log(status)
    let first = this.alphabets[Math.floor(Math.random() * this.alphabets.length)];
    let second = Math.floor(Math.random() * 10);
    let third = Math.floor(Math.random() * 10);
    let fourth = this.alphabets[Math.floor(Math.random() * this.alphabets.length)];
    let fifth = this.alphabets[Math.floor(Math.random() * this.alphabets.length)];
    let sixth = Math.floor(Math.random() * 10);
    let captcha = first.toString() + second.toString() + third.toString() + fourth.toString() + fifth.toString() + sixth.toString();

  }

}
