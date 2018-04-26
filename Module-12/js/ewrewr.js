const countKPS = () => { // Метод расчитывает кол-во клавиш в секунду и выводит конечный результат
    const kps = (string.length / secondsValue).toFixed(3);
    setTimeout(() => {
      alert(`Упражнение закончено!\n Общее время: ${secondsValue} сек.\n Результат: ${kps} клав/сек`);
    }, 0);
  };
  
  const writeTimeToStorage = () => {
    if (localStorage.getItem('sec') === null) { localStorage.setItem('sec', secondsValue); } // Запись значения при первом запуске
    if (secondsValue < localStorage.getItem('sec')) { localStorage.setItem('sec', secondsValue); } // Запись при последующих запусках
  };