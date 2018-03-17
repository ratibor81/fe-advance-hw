const alphabetEn = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const alphabetRu = "йцукенгшщзхъфывапролджэячсмитьбю.";
const alphabetUa = "йцукенгшщзхїфівапролджєячсмитьбю.";

const getKeyboardArr = (splitChar1, splitChar2, alphabet) => {
    const arr = alphabet.split('');
    const keyboard = [arr.slice(0, arr.indexOf(splitChar1)), arr.slice(arr.indexOf(splitChar1), arr.indexOf(splitChar2)), arr.slice(arr.indexOf(splitChar2))];
    return keyboard;
}
const keyboardEn = getKeyboardArr ("a", "z", alphabetEn);
const keyboardRu = getKeyboardArr ("ф", "я", alphabetRu);
const keyboardUa = getKeyboardArr ("ф", "я", alphabetUa);

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
    currentLang: ''
};

const writeKeyboardToObj = (keyboardArr, lang) => keyboard.layouts[lang] = keyboardArr;

writeKeyboardToObj (keyboardEn, "en");
writeKeyboardToObj (keyboardRu, "ru");
writeKeyboardToObj (keyboardUa, "ua");

const writeLangToObj = (Obj) => {
let lang = "";
    do {
        lang = prompt(' Choose the keyboard layout:  en - 0, ru - 1, ua - 2 ', "");
    if ( lang === '0' || lang === '1' || lang === '2' ) break;
    if ( lang === null) return;
        alert("Input correct value!");
    } while (true);
    return Obj.currentLang = Obj.langs[lang];
}

writeLangToObj(keyboard);

const getCurrentKeybArr = (Obj) => Obj.layouts[Obj.currentLang]; 

const currentKeybArr = getCurrentKeybArr(keyboard);

const getRandCharInAlph = (array) => {
    const randomString = Math.floor(Math.random() * array.length);
    const randomChar = Math.floor(Math.random() * array[randomString].length);
    return array[randomString][randomChar];
    
}

console.log(`Случайный символ ${keyboard.currentLang} алфавита - ${getRandCharInAlph(currentKeybArr)}`);

