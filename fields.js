const createSection = (section) => {
  const sectionEl = document.createElement('section');
  const titleEl = document.createElement('h3');
  const paragEl = document.createElement('p');
  titleEl.textContent = section.title;
  paragEl.textContent = section.description;

  return [titleEl, paragEl];
};

const createTextField = (textField, onChange) => {
  const inputTitle = document.createElement('p');
  const inputElement = document.createElement('INPUT');
  inputTitle.textContent = textField.label;
  console.log(textField);
  inputElement.setAttribute('id', textField.id);
  return [inputTitle, inputElement];
};

const createProductField = (product, onClick) => {
  const checkElement = document.createElement('INPUT');
  checkElement.setAttribute('type', 'checkbox');
  const productTitle = document.createElement('p');
  const productPrice = document.createElement('p');
  productTitle.textContent = product.title;
  productPrice.textContent = '€' + product.price.toFixed(2);
  return [checkElement, productPrice, productTitle];
};

export const fieldsMap = {
  section: createSection,
  text: createTextField,
  product: createProductField,
};
