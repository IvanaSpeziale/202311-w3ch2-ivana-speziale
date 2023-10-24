import { King } from './king';
import { Fighter } from './fighter';
import { Squire } from './squire';
import { Advisor } from './advisor';
import { Character } from './character';

export function repo() {
  const characters: Character[] = [
    new King('Joffrey', 'Baratheon', 16, 2),
    new Fighter('Daenerys', 'Targaryen', 30, 'Dragones', 10),
  ];

  characters.push(new Advisor('Tyrion', 'Lannister', 40, characters[2]));
  characters.push(
    new Squire('Bronn', 'AguasNegras', 54, 0, characters[1] as Fighter)
  );

  return characters;
}
