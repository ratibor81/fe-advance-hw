/*
  Создать компонент счетчика времени.
  Простой прямоугольник который показывает время
  со старта упражения и до того момента когда все
  клавиши были верно нажаты.
  На входе есть строка символов для упражнения.
  Написать метод countKPS() который,по окончанию упражнения,
  возвращает кол-во верных клавишь в секунду которое было нажато за
  время выполнения упражнения.
  Записать результат в localStorage, но только в том случае если
  он лучше чем тот что уже есть в localStorage.
  При повторном посещении страницы надо брать то что записано
  в localStorage и вешать на страницу, это будет компонент
  лучшего результата.
*/

// дается строка и от первого нажатия до посленего
// правильного набранного знака считать время

// const lang = "qwerty";
// const timerOutput = document.querySelector('.timer');
const string = 'qryte';
const charsArr = string.split('').reverse();

const result = document.querySelector('.result');
const task = document.querySelector('.exercise');
const seconds = document.querySelector('#seconds');
const bestTime = document.querySelector('.bestTime');

task.innerHTML = `Введите строку: ${string}`;

let interval;
let secondsValue = 0;

const renderTimer = () => { // Ф-ция рендерит таймер на страницу
  seconds.innerHTML = (secondsValue / 100) || '0';
};
renderTimer();

const startTimer = () => {
  if (typeof interval !== 'number') {
    interval = setInterval(() => {
      secondsValue += 1;
      renderTimer();
    }, 10);
  }
};

const countKPS = () => { // Метод расчитывает кол-во клавиш в секунду и выводит конечный результат
  const kps = ((string.length / secondsValue) * 100).toFixed(3);
  setTimeout(() => {
    alert(`Упражнение закончено!\n Общее время: ${secondsValue / 100} сек.\n Результат: ${kps} клав/сек`);
  }, 300);
};

const writeTimeToStorage = () => {
  if (localStorage.getItem('sec') === null) { localStorage.setItem('sec', secondsValue); } // Запись значения при первом запуске
  if (secondsValue < localStorage.getItem('sec')) { localStorage.setItem('sec', secondsValue); } // Запись при последующих запусках
};

const stringHandler = (event) => {
  if (event.key !== charsArr[charsArr.length - 1]) {
    event.preventDefault();
  }
  if (event.key === charsArr[charsArr.length - 1]) {
    charsArr.pop();
  }
  if (charsArr.length === 0) {
    clearInterval(interval); // Остановка таймера, когда строка набрана (массив пустой)
    writeTimeToStorage();
    countKPS();
  }
};

const updateView = () => {
  bestTime.innerHTML += localStorage.getItem('sec') / 100 || '0';
};

updateView(); // Вешает на страницу лучший резульат из хранилища при повторной загрузке

window.addEventListener('keypress', startTimer);
result.addEventListener('keypress', stringHandler);
