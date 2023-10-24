import '../css/style.css';
import { repo } from './characters.js';

const appElement = document.querySelector<HTMLDivElement>('#app');

if (appElement === null) throw new Error('Critical Error.');

const characters = repo();
console.log(characters);

appElement.innerHTML = characters[0].phrase();
