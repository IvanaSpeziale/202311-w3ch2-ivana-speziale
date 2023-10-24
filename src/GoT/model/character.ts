export type Category = 'King' | 'Fighter' | 'Advisor' | 'Squire';

export abstract class Character {
  name: string;
  family: string;
  age: number;
  isAlive: boolean;

  protected message: string;
  category!: 'King' | 'Figther' | 'Advisor' | 'Squire';

  constructor(name: string, family: string, age: number) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.isAlive = true;
    this.message = '';
  }

  talk() {
    return this.message;
  }

  dead() {
    this.isAlive = false;
  }
}
