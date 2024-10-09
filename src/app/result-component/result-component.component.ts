import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-component',
  standalone: true,
  imports: [],
  templateUrl: './result-component.component.html',
  styleUrl: './result-component.component.css'
})
export class ResultComponentComponent  implements OnInit{
  ngOnInit(): void {
    localStorage.clear()
  }

}
