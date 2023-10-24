import { repo } from './GoT/data/repo.js';
import { Advisor } from './GoT/model/advisor.js';
import { Fighter } from './GoT/model/fighter.js';
import { King } from './GoT/model/king.js';
import { Squire } from './GoT/model/squire.js';
import './src/css/style.css';

const characters = repo();

const appElement = document.querySelector < HTMLDivElement > '#app';

if (appElement === null) throw new Error('Critical Error.');

console.log(characters);

let contentHTML = '<ul class="characters-list row list-unstyled">';

for (const iterator of characters) {
  const imgProfile = iterator.name;
  contentHTML += `<li class="character col">
        <div class="card character__card">
          <img src="img/${imgProfile.toLocaleLowerCase()}.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4"> ${iterator.name} </h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${iterator.age} años</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
              <li>Años de reinado: ${
                characters instanceof King ? characters.kingdomYears : Number
              }</li>
              <li>Arma: ${
                characters instanceof Fighter ? characters.weapon : String
              }</li>
              <li>Destreza: ${
                characters instanceof Fighter ? characters.skill : Number
              }</li>
              <li>Peloteo: ${
                characters instanceof Advisor ? characters.comunicar() : String
              }</li>
              <li>Asesora a: ${
                characters instanceof Advisor
                  ? characters.advisorBoss.name
                  : String
              }</li>
              <li>Sirve a: ${
                characters instanceof Squire ? characters.patron.name : String
              }</li>
            </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>`;
}

contentHTML += '</ul>';

appElement.innerHTML += contentHTML;
