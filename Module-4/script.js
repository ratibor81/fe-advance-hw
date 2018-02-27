    // Модуль - 4 . Создание функций.

clear();
const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

function addKeyboardLayout(alphabet) {
    const alphabetArr = alphabet.split('');
    const endFirstStr = alphabetArr.indexOf(']')+1;
    const startSecondStr = alphabetArr.indexOf('a');
    const endSecondStr = alphabetArr.indexOf('\'')+1;
    const keyboard = [alphabetArr.slice(0, endFirstStr), alphabetArr.slice(startSecondStr, endSecondStr), alphabetArr.slice(-10)];
    return keyboard;
}
const keyboard = addKeyboardLayout(alphabet);

console.log('Получен следующий массив строк клавиатуры:',
keyboard);

let row;
function getRandCharInRow(row){
    if (row === 1) {
        selectedRow = keyboard [0];
        var randomChar = selectedRow[Math.floor(Math.random() * selectedRow.length)];
    }
    else if (row === 2) {
        selectedRow = keyboard [1];
        var randomChar = selectedRow[Math.floor(Math.random() * selectedRow.length)];
    }
    else if (row === 3) {
        selectedRow = keyboard [2];
        var randomChar = selectedRow[Math.floor(Math.random() * selectedRow.length)];
    }
    return randomChar;
}   
    for (i = 1; i <= keyboard.length; i++) {
        console.log(`Случайный символ из ${i}-ой строки - `, getRandCharInRow(i));
    }

function getRandCharInAlph() {
    const alphabetArr = alphabet.split('');
    var randomAlphabetChar = alphabetArr[Math.floor(Math.random() * alphabetArr.length)];
    return randomAlphabetChar;
}
console.log('Случайный символ всего алфавита - ', getRandCharInAlph());