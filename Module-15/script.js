const resultTime = document.querySelector('.result');

class Timer {
  constructor(startTime, stopTime, interval) {
    this.startTime = startTime;
    this.stopTime = stopTime;
    this.interval = interval;
  }
  start() {
    this.startTime = Date.now();
    resultTime.innerHTML = 'Операция выполняется...';
  }
  stop() {
    this.stopTime = Date.now();
    this.interval = (this.stopTime - this.startTime) / 1000;
  }
  getTime() {
    resultTime.innerHTML = `Операция завершена! Общее время: ${this.interval} сек.`;
  }
  static get timeToNY() {
    const today = Date.now();
    const nextYear = new Date(2019, 0, 1).getTime();
    return Math.floor((nextYear - today) / 86400000);
  }
}

const stopwatch = new Timer();
const timer1 = new Timer('0:00', '0:05', '5');
const timer2 = new Timer('0:01', '0:03', '2');
const timer3 = new Timer('0:02', '0:05', '3');
console.log(timer1, timer2, timer3);

const onClickHandlers = (e) => {
  if (e.target.classList.contains('start-btn')) {
    stopwatch.start();
  }
  if (e.target.classList.contains('stop-btn')) {
    stopwatch.stop();
    stopwatch.getTime();
  }
};

resultTime.innerHTML = `До Нового Года осталось: ${Timer.timeToNY} дня(дней)`;
document.addEventListener('click', onClickHandlers);
