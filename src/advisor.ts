import { Character } from './character';

export class Advisor extends Character {
  advisorBoss: Character;

  constructor(name: string, family: string, age: number, advise: string) {
    super(name, family, age);
    this.advisorBoss = this.advisorBoss;
    this.personalQuote = 'No sé por qué, pero creo que voy a morir pronto';
  }
}
