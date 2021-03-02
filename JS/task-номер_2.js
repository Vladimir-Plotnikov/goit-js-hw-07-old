const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulRef = document.createElement('ul')
ulRef.classList.add('ingredientsClass')
const liMassive = ingredients.map(text => {
    const itemRef = document.createElement('li');
    itemRef.textContent = text;
    return itemRef
})

ulRef.append(...liMassive)

console.log(ulRef);