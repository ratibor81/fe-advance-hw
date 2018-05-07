const keyboardObj = {
  layouts: {
    en: {
      topRow: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
      middleRow: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
      bottomRow: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
    },
    ru: {
      topRow: ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
      middleRow: ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
      bottomRow: ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'],
    },
    ua: {
      topRow: ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ї'],
      middleRow: ['ф', 'і', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'є'],
      bottomRow: ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'],
    },
  },
  langs: ['en', 'ru', 'ua'],
  currentLang: 'en',

  // setCurrentLangToObj() {
  //   let lang = '';
  //   do {
  //     lang = prompt(' Choose the keyboard layout:  en - 0, ru - 1, ua - 2 ', '');
  //     if (lang === '0' || lang === '1' || lang === '2') break;
  //     if (lang === null) return; alert('Input correct value!');
  //   } while (true);
  //   this.currentLang = this.langs[lang];
  // },

  createLayout() {
    // if (this.currentLang === null) return;
    const keyboard = document.createElement('div');
    const keyboardArr = Object.values(this.layouts[this.currentLang]);

    for (let i = 0; i < keyboardArr.length; i += 1) {
      const row = document.createElement('div');
      row.classList.add('row');
      for (let j = 0; j < keyboardArr[i].length; j += 1) {
        const button = document.createElement('div');
        button.textContent = `${keyboardArr[i][j]}`;
        button.classList.add('button');
        row.appendChild(button);
      }
      keyboard.appendChild(row);
    }
    const spaceRow = document.createElement('div');
    const spaceBtn = document.createElement('div');
    spaceRow.classList.add('row');
    spaceBtn.classList.add('button');
    spaceBtn.classList.add('space-btn');
    spaceRow.appendChild(spaceBtn);
    keyboard.appendChild(spaceRow);
    document.body.append(keyboard);
  },

};

const run = (obj) => {
  // obj.setCurrentLangToObj();
  obj.createLayout();
};

run(keyboardObj);
