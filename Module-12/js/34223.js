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