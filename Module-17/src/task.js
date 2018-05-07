const taskObj = {
  chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
  charCount: null,
  task: null,
  setCharCount() {
    let charQuantity = '';
    while (true) {
      charQuantity = prompt('Введите количество символов, которые Вы должны набрать', '');
      if (this.checkPositiveInteger(+charQuantity)) break;
      if (charQuantity === null) return;
    }
    this.charCount = +charQuantity;
  },

  checkPositiveInteger(charQuantity) {
    if ((Number.isInteger(charQuantity)) && charQuantity > 0) {
      return true;
    }
  },

  createTask() {
    const taskArr = new Array(this.charCount);
    for (let i = 0; i < this.charCount; i += 1) {
      taskArr[i] = this.chars[Math.floor(Math.random() * this.chars.length)];
    }
    this.task = taskArr;
  },
};

const run = (obj) => {
  obj.setCharCount();
  if (obj.charCount === null) return;
  obj.createTask();
};

run(taskObj);

export default taskObj;

