// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит
// количество элементов в input и нажимает кнопку Создать, после чего рендерится
// коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount -
// число. Функция создает столько div, сколько указано в amount и добавляет их в
// div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше
// предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const ref = {
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('#controls button[data-action="destroy"]'),
  boxes: document.getElementById('boxes'),
};
ref.renderBtn.addEventListener('click', getNumbers);
ref.destroyBtn.addEventListener('click', deleteBoxes);

function getNumbers() {
  let number = +document.querySelector('#controls > input').value;
  createBoxes(number);
}

function createBoxes(number) {
  const basicSize = 30;
  const part = document.createDocumentFragment();
  for (let i = 0; i < number; i += 1) {
    let size = basicSize + i * 10;
    let div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px;`;
    div.style.backgroundColor = randomColor();
    part.appendChild(div);
  }
  boxes.appendChild(part);
}

function deleteBoxes() {
  boxes.innerHTML = '';
}

function randomColor() {
  let color;
  return (color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256,
  )}, ${Math.floor(Math.random() * 256)})`);
}
console.log(randomColor());
