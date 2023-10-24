import { Character } from './character';
import { Fighter } from './fighter';

export class Squire extends Character {
  patron: Fighter;
  servilityGrade: number;

  constructor(
    name: string,
    family: string,
    age: number,
    servilityGrade: number,
    patron = Fighter
  ) {
    super(name, family, age);
    this.patron = patron;
    this.servilityGrade = servilityGrade;
    this.personalQuote = 'Soy un loser';
  }
}
