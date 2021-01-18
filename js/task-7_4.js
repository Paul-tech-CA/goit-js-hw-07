/*
Счетчик состоит из спана и кнопок, которые должны увеличивать 
и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится 
текущее значение счетчика.
Создай функции increment и decrement для увеличения и 
уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и 
обновление интерфейса
*/
const counterValue = document.querySelector('#value');
let value = 0;
const decrementBtnRef = document.querySelector(
  '#counter button[data-action="decrement"]',
);
const incrementBtnRef = document.querySelector(
  '#counter button[data-action="increment"]',
);
const increment = () => {
  value += 1;
  counterValue.textContent = value;
};

const decrement = () => {
  value -= 1;
  counterValue.textContent = value;
};

incrementBtnRef.addEventListener('click', increment);
decrementBtnRef.addEventListener('click', decrement);
