import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor() { }

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

  getResult(plan: string, brand: string, year: number): number{
    let base = 2000;
    const diferenceYear = this.getDiferenceYears(year);
    base -= ((diferenceYear * 3) * base)/100;
    base = this.calculateBrand( brand ) * base;
    const incrementPlan = this.getPlan(plan);
    return incrementPlan * base;
  }
}
