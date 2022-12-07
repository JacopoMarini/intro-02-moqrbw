const createSection = (section) => {
  const wrapperEl = document.querySelector('.section-header');
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
  });
};

const createTextField = (textField, onChange) => {
  const divEl = document.querySelector('#dynamic-form');
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
  });
};

const createProductField = (product, onClick) => {
  
};

export const fieldsMap = {
  section: createSection,
  text: createTextField,
  product: createProductField,
};
