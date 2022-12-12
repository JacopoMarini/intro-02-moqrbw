import { config, products, validationRules } from './config';
import { fieldsMap } from './fields';
import './style.css';

const formNode = document.getElementById('dynamic-form');

const registerButton = document.getElementById('register-button');

const formData = {
  name: '',
  surname: '',
  email: '',
  address: '',
  products: [],
},

function onTextChange(id, value) {
  formData[id] = value;
  console.log(formData);
}

function onProductChange(product){
  if(!formData.products.find(el => el.id == formData.products.id)){
    return formData.products.filter(item => item.id != el.id)
  }
  return [formData.products, product]
}

for (const element of config) {
  const { title, description, field } = element;
  const { label, id, type, section, text, product } = fieldsMap;

  const creation = section(element).forEach((el) => formNode.append(el));

  const textFields = element.fields.filter((el) => el.type == 'text');
  for (const textField of textFields) {
    text(textField, onTextChange).forEach((el) => formNode.append(el));
  }

  const productFields = element.fields.filter((el) => el.type == 'product');

  for (const productField of productFields) {
    const productInfo = products.find((p) => p.id == productField.id);
    product(productInfo, onProductChange).forEach((el) => formNode.append(el));
  }
}

/* const validate = (value, rule) => {
  if (!rule) return true;

  if (rule.required && !value) return false;

  if (rule.min && (!values || value.lenght < rule.min)) return false;

  if (rule.includes && (!value || !value.includes(rule.includes)))
    return false;

  return true;
}; */

registerButton.onclick = function onSubmit() {

    const total = Array.from(formData.products).reduce((acc, el) => {
    const productId = el.id;
    const product = products.find((p) => p.id == productId);
    return acc + product.price;
  }, 0); 

  /*   for (const validationRule of validationRules) {
    const isValid = validate(formData[validationRule[0]], validationRule[1]);
    if (!isValid) {
      alert(`Il campo ${validationRule[0]} è invalido`);
      return;
    }
  } */

  alert(`
  name: ${formData.name}
  surname: ${formData.surname}
  email: ${formData.email}
  address: ${formData.address}
  Total order: ${total.toFixed(2)}`);
};
