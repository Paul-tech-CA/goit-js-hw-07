/*
Напиши скрипт, который для каждого элемента 
массива ingredients создаст отдельный li, 
после чего вставит все li за одну операцию 
в список ul.ingredients. Для создания DOM-узлов 
используй document.createElement().

<ul id="ingredients"></ul>
В JS есть массив строк.
*/

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const newIngredients = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const elemList = document.createElement('li');
//   elemList.textContent = ingredients[i];
//   newIngredients.push(elemList);
// }

const newItem = ingredients.map(item => {
  const elemList = document.createElement('li');
  elemList.textContent = item;

  return elemList;
});

const listItem = document.querySelector('#ingredients');
listItem.append(...newItem);
// listItem.append(...newIngredients);
