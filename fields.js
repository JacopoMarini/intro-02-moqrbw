const createSection = (section) => {
  const sectionEl = document.createElement('section');
  const titleEl = document.createElement('h3');
  const paragEl = document.createElement('p');
  sectionEl.append(titleEl, paragEl);
  titleEl.textContent = section.title;
  paragEl.textContent = section.description;

  return [titleEl, paragEl];
};

const createTextField = (textField, onTextChange) => {
  const inputTitle = document.createElement('label');
  const inputElement = document.createElement('INPUT');
  inputTitle.textContent = textField.label;
  inputElement.onchange = (e) => {
    onTextChange(textField.id, e.target.value);
  };
  inputElement.setAttribute('id', textField.id);
  return [inputTitle, inputElement];
};

const createProductField = (product, onProductChange) => {
  const checkElement = document.createElement('INPUT');
  checkElement.setAttribute('id', product.id);
  checkElement.setAttribute('type', 'checkbox');
  const productTitle = document.createElement('label');
  const productPrice = document.createElement('p');
  productTitle.textContent = product.title;
  productPrice.textContent = '€' + product.price.toFixed(2);
  checkElement.onchange = (e) => {
    onProductChange(checkElement, e.target.checked);
  };
  return [productTitle, checkElement, productPrice];
};

export const fieldsMap = {
  section: createSection,
  text: createTextField,
  product: createProductField,
};
