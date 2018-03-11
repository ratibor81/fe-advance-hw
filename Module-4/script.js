const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

function getKeyboardArr(alphabet) {
    const alphabetArr = alphabet.split('');
    const endFirstStr = alphabetArr.indexOf(']')+1;
    const endSecondStr = alphabetArr.indexOf('\'')+1;
    const keyboard = [alphabetArr.slice(0, endFirstStr), alphabetArr.slice(endFirstStr, endSecondStr), alphabetArr.slice(endSecondStr, alphabet.length)];
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
    const randomString = Math.floor(Math.random() * array.length);
    const randomChar = getRandCharInRow(randomString);
    return randomChar;
    
}

console.log('Случайный символ всего алфавита - ', getRandCharInArr(keyboard));