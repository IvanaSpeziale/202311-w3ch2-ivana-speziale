import { Character } from './character';

export class King extends Character {
  years: number;

  constructor(name: string, family: string, age: number, years: number) {
    super(name, family, age);
    this.years = years;
    this.personalQuote = 'Vais a morir todos';
  }
}
