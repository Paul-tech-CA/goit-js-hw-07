/*
Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, 
то есть элементов li.item. 
Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и 
выведет в консоль текст 
заголовка элемента (тега h2) и количество элементов в категории 
(всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4
*/

const amountCategoriesRef = categories.querySelectorAll('.item');
console.log(`'В списке ${amountCategoriesRef.length} категории.'`);

const categoriesInfoRef = amountCategoriesRef.forEach(item =>
  console.log(
    `Категория: ${item.querySelector('h2').textContent}
Количество элементов: ${item.querySelectorAll('li').length}`,
  ),
);

// const tryRef = categories.item.childNodes;
// console.log(tryRef);

// const childRef = textTitleRef.forEach(
//   item => console.log('forEach 1', `Категория: ${item.textContent}`),
//   // console.log(item),
// );

//-------------------------
// //
// const testRef = categories.querySelector('.item');
// const tray = amountCategoriesRef.childrenNodes;
// console.log(testRef);

// const titleRef = [...amountCategoriesRef].map(item => item > 'LI');
// console.log(titleRef);

//---------------------

// console.log('h2', textTitleRef[2].textContent);
// console.log('li', countItemsRef);
// console.log('aaa', amountCategoriesRef);
// console.log(letsTry);
// console.log('dddd', childRef);
