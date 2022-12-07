const createSection = (section) => {
  /*   const wrapperEl = document.querySelector('.section-header');
  const sectionEl = document.createElement('div');
  wrapperEl.appendChild(sectionEl);
  Object.entries(section).forEach((el) => {
    const hElement = document.createElement('h3');
    const dElement = document.createElement('p');
    sectionEl.append(hElement);
    sectionEl.append(dElement);

    el.forEach((data) => {
      hElement.textContent = data.title;
      dElement.textContent = data.description;
    });
  }); */

  const titleEl = document.createElement('h3');
  const paragEl = document.createElement('p');
  titleEl.textContent = section.title;
  paragEl.textContent = section.description;
};

const createTextField = (textField, onChange) => {
  /*   const divEl = document.querySelector('#dynamic-form');
  Object.values(textField).forEach((e) => {
    e.fields
      .filter((field) => field.type !== 'product')
      .forEach((field) => {
        const inputTitle = document.createElement('p');
        const inputEl = document.createElement('INPUT');
        inputTitle.textContent = field.label;
        inputEl.setAttribute(field.type, field.id);
        divEl.append(inputTitle);
        divEl.append(inputEl);
      });
  }); */
  const inputTitle = document.createElement('p');
  const inputElement = document.createElement('INPUT');
  inputTitle.textContent = textField.label;
  inputElement.setAttribute(textField.type, textField.id);
};

const createProductField = (product, onClick) => {
  const checkElement = document.createElement('INPUT');
  checkElement.setAttribute('type', 'checkbox');
};

export const fieldsMap = {
  section: createSection,
  text: createTextField,
  product: createProductField,
};
