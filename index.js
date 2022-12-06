import { config, products, validationRules } from './config';
import { fieldsMap } from './fields';
import './style.css';
const formNode = document.getElementById('dynamic-form');
const registerButton = document.getElementById('register-button');

//Creo il titolo della pagina
const mainTitle = document.createElement('h1');
mainTitle.textContent = config.title;
const divEl = document.querySelector('.r-title');
divEl.appendChild(mainTitle);

//Funzione per creare input

registerButton.onclick = function onSubmit() {
  alert('prova');
};
