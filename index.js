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
}

function onProductChange(product){
  const index = formData.products.findIndex(p => p == product)
  if (index > -1) formData.products.splice(index, 1)
  else formData.products.push(product)
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

registerButton.onclick = function onSubmit() {
  const total = formData.products.reduce((acc, el) => {
    const productId = el;
    const product = products.find((p) => p.id == productId);
    return acc + product.price;
  }, 0); 
  
  const validate = (value, rule) => {
   if (!rule) return true;

   if (rule.required && !value)  return false;
  
   if (rule.min && (!value || value.length < rule.min)) return false;
  
   if (rule.includes && (!value || !value.includes(rule.includes)))
     return false;
  
   return true;
  }; 

   for (const validationRule of validationRules) {
   const isValid = validate(formData[validationRule[0]], validationRule[1]);
   if (!isValid) {
     alert(` ${validationRule[0]} is invalid`);
     return;
   }
  } 
  
  alert(`
  name: ${formData.name}
  surname: ${formData.surname}
  email: ${formData.email}
  address: ${formData.address}
  Total order: ${total.toFixed(2)}`);
};
