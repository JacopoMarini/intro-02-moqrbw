const createSection = (section) => {
  const wrapperEl = document.querySelector('.section-header');
  const sectionEl = document.createElement('div');
  wrapperEl.appendChild(sectionEl);
  Object.entries(section).forEach((el) => {
    const hElement = document.createElement('h3');
    const dElement = document.createElement('p');
    hElement.appendChild(sectionEl);
    dElement.appendChild(sectionEl);

    el.forEach((data) => {
      hElement.textContent = data.title;
      dElement.textContent = data.description;
    });
  });
};

const createTextField = (textField, onChange) => {};

const createProductField = (product, onClick) => {};

export const fieldsMap = {
  section: createSection,
  text: createTextField,
  product: createProductField,
};
