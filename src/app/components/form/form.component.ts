import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  years: number [] = [];

  form = new FormGroup({
    brand: new FormControl(null, Validators.required),
    year: new FormControl(null, Validators.required),
    plan: new FormControl(null, Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
    this.setYears();
  }

  submitForm(): void{
  }

  setYears(): void{
    for (let index = 0; index < 20; index++) {
      this.years.push(new Date().getFullYear() - index);
    }
  }
}
