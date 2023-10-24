export class Character {
  name: string;
  family: string;
  age: number;
  status: 'live' | 'dead' | 'zombie';
  // IsAlive: boolean;

  constructor(name: string, family: string, age: number) {
    this.name = name;
    this.family = family;
    this.age = age;
    // This.isAlive = true;
  }

  phrase(value: string) {
    return value;
  }

  dead() {
    this.status = false;
  }
}
