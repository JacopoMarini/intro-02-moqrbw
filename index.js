import { config, products, validationRules } from './config';
import { fieldsMap } from './fields';
import './style.css';

const formNode = document.getElementById('dynamic-form');

const registerButton = document.getElementById('register-button');

let total = 0;

for (const element of config) {
  const { title, description, field } = element;
  const { label, id, type, section, text, product } = fieldsMap;

  const prova1 = section(element).forEach((el) => formNode.append(el));

  const prova2 = text(element.fields.filter((el) => el.type == 'text')).forEach(
    (el) => formNode.append(el)
  );

  const prova3 = product(
    element.fields.filter((el) => el.type == 'product')
  ).forEach((el) => formNode.append(el));
}

registerButton.onclick = function onSubmit() {
  alert(`
  name: (input1 value)
  surname: (input2 value)
  email: (input3 value)
  address: (input4 value)
  Total order: ${total}`);
};
