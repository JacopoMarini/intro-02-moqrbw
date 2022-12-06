import { config, products, validationRules } from './config';
import { fieldsMap } from './fields';
import './style.css';

//Creo il titolo della pagina
const mainTitle = document.createElement('h1');
mainTitle.textContent = 'Hello!';
const divEl = document.querySelector('.r-title');
divEl.appendChild(mainTitle);



const formNode = document.getElementById('dynamic-form');


const registerButton = document.getElementById('register-button');

registerButton.onclick = function onSubmit() {
  alert('prova');
};
