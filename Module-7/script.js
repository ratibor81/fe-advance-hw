
const keyboardObj = {
    layouts: {
        en: {
            topRow: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
            middleRow: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
            bottomRow: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
        },
        ru: {
            topRow: ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
            middleRow: ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж','э'],
            bottomRow: ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.']
        },
        ua: {
            topRow: ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ї'],
            middleRow: ['ф', 'і', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж','є'],
            bottomRow: ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.']
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
            this.currentLang = this.langs[lang];
    },
    
    createLayout() {
        if (this.currentLang === "") return;
            const keyboard = document.createElement('div');
            //keyboard.classList.add('keyboard');           //  Если нужно будет повесить класс на keyboard
            const keyboardArr = Object.values(this.layouts[this.currentLang]);
       
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
                        
        document.body.append(keyboard);
    }

};

const run = obj => {
    obj.writeCurrentLangToObj()
    obj.createLayout();  
    
};

run(keyboardObj);

