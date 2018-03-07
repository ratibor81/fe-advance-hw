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


function getRandCharInRow(stringNumber) {
    const randomIndex = Math.floor(Math.random() * keyboard[stringNumber].length);
    return keyboard[stringNumber][randomIndex];
}

console.log(`Случайный символ из 1-ой строки - `, getRandCharInRow(1));


function getRandCharInArr(array) {
    const stringNumber = Math.floor(Math.random() * array.length);
    const randomIndex = Math.floor(Math.random() * array[stringNumber].length);
    return array[stringNumber][randomIndex];
}

console.log('Случайный символ всего алфавита - ', getRandCharInArr(keyboard));