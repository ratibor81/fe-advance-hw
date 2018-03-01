const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

function getKeyboardArr(alphabet) {
    const alphabetArr = alphabet.split('');
    const endFirstStr = alphabetArr.indexOf(']')+1;
    const startSecondStr = alphabetArr.indexOf('a');
    const endSecondStr = alphabetArr.indexOf('\'')+1;
    const keyboard = [alphabetArr.slice(0, endFirstStr), alphabetArr.slice(startSecondStr, endSecondStr), alphabetArr.slice(-10)];
    return keyboard;
}
const keyboard = getKeyboardArr(alphabet);

console.log('Получен следующий массив строк клавиатуры:',
keyboard);


function getRandCharInRow(i) {
    const j = Math.floor(Math.random() * keyboard[i].length);
    return keyboard[i][j];
}

console.log(`Случайный символ из 1-ой строки - `, getRandCharInRow(1));


function getRandCharInArr(array) {
    const i = Math.floor(Math.random() * array.length);
    const j = Math.floor(Math.random() * array[i].length);
    return array[i][j];
}

console.log('Случайный символ всего алфавита - ', getRandCharInArr(keyboard));