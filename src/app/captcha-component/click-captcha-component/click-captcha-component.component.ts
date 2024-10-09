import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section } from './section';

@Component({
  selector: 'app-click-captcha-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './click-captcha-component.component.html',
  styleUrl: './click-captcha-component.component.css'
})
export class ClickCaptchaComponentComponent implements OnInit {
  @Input() currentStage: number; // This allows the parent to bind to this property
  @Output() stageChange = new EventEmitter<number>(); 
  
  imageSections = [
    { name: 'voiture', top: 0, left: 0, isClicked: false },
    { name: 'bus', top: 0, left: 33.33, isClicked: false },
    { name: 'camion', top: 0, left: 66.66, isClicked: false },
    { name: 'route', top: 33.33, left: 0, isClicked: false },
    { name: 'bus vert', top: 33.33, left: 33.33, isClicked: false },
    { name: 'moto', top: 33.33, left: 66.66, isClicked: false },
    { name: 'camion bleu', top: 66.66, left: 0, isClicked: false },
    { name: 'voiture blanche', top: 66.66, left: 33.33, isClicked: false },
    { name: 'ciel', top: 66.66, left: 66.66, isClicked: false },
  ];
  section:Section
  targetSection: Section;
  error=""

  ngOnInit() {
    this.setNewTarget();
  }

  setNewTarget() {
    const randomIndex = Math.floor(Math.random() * this.imageSections.length);
    this.targetSection = this.imageSections[randomIndex];
  }

  onSectionClick(clickedSection: string) {
    this.imageSections.forEach(section => section.isClicked = false);
    const section = this.imageSections.find(s => s.name === clickedSection);
    if (section) {
      section.isClicked = true;
      this.section=section
    }
  }
  check(){
    if (this.section!=this.targetSection) {
      this.error="Bad image selected"
      return
    }
    this.stageChange.emit(this.currentStage + 1);
  }
}
