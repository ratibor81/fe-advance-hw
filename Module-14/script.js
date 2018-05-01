const resultTime = document.querySelector('.result');

function CountdownTimer() { // Ф-ция-конструктор таймера отсчёта
  this.startTime = '';
  this.stopTime = '';
  this.interval = '';
}

const timerObj = new CountdownTimer(); // Создание объекта таймера

CountdownTimer.prototype = function Start() { // Добавление метода Start в прототип
  this.startTime = new Date();
};
CountdownTimer.prototype = function Stop() { // Добавление метода Stop в прототип
  this.stopTime = new Date();
  this.interval = (this.stopTime.getTime() - this.startTime.getTime()) / 1000; // Расчёт разницы времени и запись в поле interval
};

Object.defineProperty(CountdownTimer.prototype, 'Start', { // Делаю метод Start неперечисляемым
  enumerable: false,
});
Object.defineProperty(CountdownTimer.prototype, 'Stop', { // Делаю метод Stop неперечисляемым
  enumerable: false,
});

const onClickHandlers = (e) => {
  if (e.target.classList.contains('start-btn')) {
    timerObj.Start();
    resultTime.innerHTML = 'Операция выполняется...';
  }
  if (e.target.classList.contains('stop-btn')) {
    timerObj.Stop();
    resultTime.innerHTML = `Операция заняла:  ${timerObj.interval} сек.`;
  }
};

document.addEventListener('click', onClickHandlers);
