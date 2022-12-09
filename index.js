import { config, products, validationRules } from './config';
import { fieldsMap } from './fields';
import './style.css';

const formNode = document.getElementById('dynamic-form');

const registerButton = document.getElementById('register-button');

for (const element of config) {
  const { title, description, field } = element;
  const { label, id, type, section, text, product } = fieldsMap;

  const creation = section(element).forEach((el) => formNode.append(el));

  const textFields = element.fields.filter((el) => el.type == 'text');
  for (const textField of textFields) {
    text(textField).forEach((el) => formNode.append(el));
  }

  const productFields = element.fields.filter((el) => el.type == 'product');

  for (const productField of productFields) {
    const flexDiv = document.createElement('div');
    flexDiv.classList.add('d-flex');
    formNode.append(flexDiv);
    const productInfo = products.find((p) => p.id == productField.id);
    product(productInfo).forEach((el) => flexDiv.append(el));
  }
}

const validate = (value, rule) => {
  if (!rule) return true;

  if (rule.required && !value) return false;

  if (rule.min && (!value || value.lenght < rule.min)) return false;

  if (rule.includes && (!value || !value.includes(rule.includes))) return false;

  return true;
};

registerButton.onclick = function onSubmit(event) {
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const fields = {
    name,
    surname,
    email,
    address,
  };

  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  console.log(checkboxes);
  const total = Array.from(checkboxes).reduce((acc, el) => {
    const productId = el.id;
    const product = products.find((p) => p.id == productId);
    return acc + product.price;
  }, 0);

  for (const validationRule of validationRules) {
    const isValid = validate(fields[validationRule[0]], validationRule[1]);
    if (!isValid) {
      alert(`Il campo ${validationRule[0]} è invalido`);
      return;
    }
  }

  alert(`
  name: ${name}
  surname: ${surname}
  email: ${email}
  address: ${address}
  Total order: ${total.toFixed(2)}`);
};
