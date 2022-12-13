const createSection = (section) => {
  const sectionEl = document.createElement('section');
  const titleEl = document.createElement('h3');
  const paragEl = document.createElement('p');
  sectionEl.append(titleEl, paragEl);
  sectionEl.classList.add('d-flex');
  titleEl.textContent = section.title;
  paragEl.textContent = section.description;

  return [titleEl, paragEl];
};

const createTextField = (textField, onTextChange) => {
  const inputTitle = document.createElement('label');
  const inputElement = document.createElement('INPUT');
  inputElement.setAttribute('type', 'text');
  inputTitle.textContent = textField.label;
  inputElement.onchange = (e) => {
    onTextChange(textField.id, e.target.value);
  };
  inputElement.setAttribute('id', textField.id);
  return [inputTitle, inputElement];
};

const createProductField = (product, onProductChange) => {
  const flexCont = document.createElement('div');
  const checkBoxWrapper = document.createElement('div');
  const checkElement = document.createElement('input');
  const productTitle = document.createElement('label');
  const productPrice = document.createElement('p');

  flexCont.classList.add('d-flex');
  checkElement.setAttribute('id', product.id);
  checkElement.setAttribute('type', 'checkbox');
  checkBoxWrapper.classList.add('flex');

  productTitle.textContent = product.title;
  productPrice.textContent = '€' + product.price.toFixed(2);
  checkElement.onchange = (e) => {
    onProductChange(product.id, e.target.value);
  };

  checkBoxWrapper.appendChild(productTitle);
  checkBoxWrapper.appendChild(checkElement);

  flexCont.appendChild(checkBoxWrapper);
  flexCont.appendChild(productPrice);

  return [flexCont];
};

export const fieldsMap = {
  section: createSection,
  text: createTextField,
  product: createProductField,
};
