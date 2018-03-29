const alphabetEn = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const alphabetRu = "йцукенгшщзхъфывапролджэячсмитьбю.";
const alphabetUa = "йцукенгшщзхїфівапролджєячсмитьбю.";

const keyboard = {
    layouts: {
        en: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ru: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ua: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: '',
    
    writeCurrentLangToObj() {
        let lang = "";
            do {
                lang = prompt(' Choose the keyboard layout:  en - 0, ru - 1, ua - 2 ', "");
            if ( lang === '0' || lang === '1' || lang === '2' ) break;
            if ( lang === null) return;
                alert("Input correct value!");
            } while (true);
            return this.currentLang = this.langs[lang];
    },
    getKeyboardArr(splitChar1, splitChar2, alphabet) {
        const arr = alphabet.split('');
        const keyboard = [arr.slice(0, arr.indexOf(splitChar1)), arr.slice(arr.indexOf(splitChar1), arr.indexOf(splitChar2)), arr.slice(arr.indexOf(splitChar2))];
        return keyboard;
    },
    writeKeyboardToObj (keyboardArr, obj, lang) {
        const rowArr = Object.keys(obj.layouts[lang]);
        rowArr.forEach(function( row, i ) {
        obj.layouts[lang][row] = keyboardArr[i];});
    },
    writeAllKeyboardsToObj() {
        if (this.currentLang === "") return;
        this.writeKeyboardToObj(this.getKeyboardArr("a", "z", alphabetEn), this, "en");
        this.writeKeyboardToObj(this.getKeyboardArr("ф", "я", alphabetRu), this, "ru");
        this.writeKeyboardToObj(this.getKeyboardArr("ф", "я", alphabetUa), this, "ua");
    },
    createLayout() {
        if (this.currentLang === "") return;
            const keyboard = document.createElement('div');
            //keyboard.classList.add('keyboard');           //  Если нужно будет повесить класс на keyboard
            const currentKeybArr = Object.values(this.layouts[this.currentLang]);
       
        function printKeyboard (keyboardArr) {
            for (i = 0; i < keyboardArr.length; i++) {
                const row = document.createElement('div');
                row.classList.add('row');   
                for (let j = 0; j < keyboardArr[i].length ; j++) {
                    const button = document.createElement('div');
                    button.textContent = `${keyboardArr[i][j]}`;
                    button.classList.add('button');
                    row.appendChild(button);
                    keyboard.appendChild(row);
                    } 
                };
                return keyboard; 
            }
        document.body.append(printKeyboard(currentKeybArr));
    }

};

const run = obj => {
    obj.writeCurrentLangToObj()
    obj.writeAllKeyboardsToObj();
    obj.createLayout();  
    
};

run(keyboard);

