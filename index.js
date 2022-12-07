import { config, products, validationRules } from './config';
import { fieldsMap } from './fields';
import './style.css';

const formNode = document.getElementById('dynamic-form');

const registerButton = document.getElementById('register-button');

let total = 0;

const { title, description, field } = config;
const { label, id, type, section, text, product } = fieldsMap;

const prova1 = section(config);

const prova2 = text(config);

const prova3 = product(config);

registerButton.onclick = function onSubmit() {
  alert(`
  name: (input1 value)
  surname: (input2 value)
  email: (input3 value)
  address: (input4 value)
  Total order: ${total}`);
};
