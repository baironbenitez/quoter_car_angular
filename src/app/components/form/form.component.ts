import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  showInfo = false
  showErrors = false;
  submit = false;
  result = 0;
  years: number [] = [];

  form = new FormGroup({
    brand: new FormControl<string>(null, Validators.required),
    year: new FormControl<number>(null,Validators.required),
    plan: new FormControl<string>(null, Validators.required),
  });

  constructor(private quotaService: QuoteService) { }

  ngOnInit(): void {
    this.setYears();
    this.form.valueChanges.subscribe(()=>{
      this.showInfo = false;
      this.result = 0;
    });
  }

  submitForm(): void{
    if (this.form.invalid) {
      this.showErrors = true;
    } else if(!this.submit){
      this.submit = true;
      this.getResult();
    }
  }

  setYears(): void{
    for (let index = 0; index < 20; index++) {
      this.years.push(new Date().getFullYear() - index);
    }
  }

  getDiferenceYears (year: number): number {
    return new Date().getFullYear() - year;
  }

  calculateBrand(brand: string): number {
    switch (brand) {
      case 'Americano':
          return 1.3;
      case 'Europeo':
        return 1.05
      case 'Asiatico':
        return 1.5    
      default:
        return  1.1;
    }   
  }

  getPlan(plan: string): number{
    return (plan === 'Basico') ? 1.20 : 1.5;
  }

  getResult(): void{
    const { brand, plan, year } = this.form.value;
    this.result = this.quotaService.getResult(brand, plan, year);
    this.showInfo = true;
    this.submit = false;
  }
}