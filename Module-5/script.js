const alphabetEn = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const alphabetRu = "йцукенгшщзхъфывапролджэячсмитьбю.";
const alphabetUa = "йцукенгшщзхїфівапролджєячсмитьбю.";

const getKeyboardArr = (splitChar1, splitChar2, alphabet) => {
    const arr = alphabet.split('');
    const keyboard = [arr.slice(0, arr.indexOf(splitChar1)), arr.slice(arr.indexOf(splitChar1), arr.indexOf(splitChar2)), arr.slice(arr.indexOf(splitChar2))];
    return keyboard;
}
const keyboardEn = getKeyboardArr("a", "z", alphabetEn);
const keyboardRu = getKeyboardArr("ф", "я", alphabetRu);
const keyboardUa = getKeyboardArr("ф", "я", alphabetUa);

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

const writeKeyboardToObj = (keyboardArr, obj, lang) => {
    const rowArr = Object.keys(obj.layouts[lang]);
    rowArr.forEach(function( row, i ) {
    obj.layouts[lang][row] = keyboardArr[i];});
}

writeKeyboardToObj(keyboardEn, keyboard, "en");
writeKeyboardToObj(keyboardRu, keyboard, "ru");
writeKeyboardToObj(keyboardUa, keyboard, "ua");

const writeLangToObj = obj => {
let lang = "";
    do {
        lang = prompt(' Choose the keyboard layout:  en - 0, ru - 1, ua - 2 ', "");
    if ( lang === '0' || lang === '1' || lang === '2' ) break;
    if ( lang === null) return;
        alert("Input correct value!");
    } while (true);
    return obj.currentLang = obj.langs[lang];
}

writeLangToObj(keyboard);

const calcRandomItem = keyboardArr => {
    const randomItem = Math.floor(Math.random() * keyboardArr.length);
    return randomItem;
}
  
const getRandCharInAlph = (obj, callback) => {
    const currentKeybArr = Object.values(obj.layouts[obj.currentLang]);
    const randomStr = currentKeybArr[calcRandomItem(currentKeybArr)];
    const randomIndex = callback(randomStr);
    return randomStr[randomIndex];
}
  
const randomChar = getRandCharInAlph(keyboard, calcRandomItem);

console.log(`Случайный символ ${keyboard.currentLang} алфавита - ${randomChar}`);

