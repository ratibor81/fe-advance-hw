const firstString = 'qwertyuiop[]';
const secondString = "asdfghjkl;'\\";
const thirdString = 'zxcvbnm,./';

const firstStrLength = (firstString.length);
const secondStrLength = (secondString.length);
const thirdStrLength = (thirdString.length);

firstString.charAt(0);
firstString.charAt(firstStrLength - 1);
secondString.charAt(0);
secondString.charAt(secondStrLength - 1);
thirdString.charAt(0);
thirdString.charAt(thirdStrLength - 1);

const positionSymbol1 = firstString.indexOf('[');
const positionSymbol2 = firstString.indexOf(']');

const myMultiString = `firstString = ${firstString} 
secondString = ${secondString}
thirdString = ${thirdString}
firstStrLength = ${firstString.length}
secondStrLength = ${secondString.length}
thirdStrLength = ${thirdString.length}
Первый символ первой строки - ${firstString.charAt(0)}
Последний символ первой строки - ${firstString.charAt(firstStrLength - 1)}
Певый символ второй строки - ${secondString.charAt(0)}
Последний символ второй строки - ${secondString.charAt(secondStrLength - 1)}
Первый символ третьей строки - ${thirdString.charAt(0)}
Последний символ третьей строки - ${thirdString.charAt(thirdStrLength - 1)}
Номер позиции для символа '[' - ${positionSymbol1}
Номер позиции для символа ']' - ${positionSymbol2}`;
                     
console.log(myMultiString);

