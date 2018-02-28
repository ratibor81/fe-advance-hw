    // Модуль - 4 . Создание функций.

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


function getRandCharInRow(row) {
    let i = row;
    let j = Math.floor(Math.random() * keyboard[i].length);
    return keyboard[i][j];
}

for (i = 0; i < keyboard.length; i++) {
        console.log(`Случайный символ из ${i+1}-ой строки - `, getRandCharInRow(i));
}

function getRandCharInAlph() {
    let i = Math.floor(Math.random() * keyboard.length);
    let j = Math.floor(Math.random() * keyboard[i].length);
    return keyboard[i][j];
}

console.log('Случайный символ всего алфавита - ', getRandCharInAlph());