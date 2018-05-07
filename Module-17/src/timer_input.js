import taskObj from 'task';

document.body.innerHTML = `<div><span class="bestTime">Ваш лучший результат:  </span><span> сек.</span></div>
<div class="timer"><span id="seconds"></span><span> сек.</span></div>
<div class="exercise"></div>
<input type="text" class="result">`;
const string = taskObj.task.join('');
const charsArr = taskObj.task.reverse();
const result = document.querySelector('.result');
const task = document.querySelector('.exercise');
const seconds = document.querySelector('#seconds');
const bestTime = document.querySelector('.bestTime');

task.innerHTML = `Введите строку: <span class='task-string'>${string}</span>`;

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
