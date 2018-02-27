const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const alphabetArr = alphabet.split('');

const endFirstStr = alphabetArr.indexOf(']')+1;
const startSecondStr = alphabetArr.indexOf('a');
const endSecondStr = alphabetArr.indexOf('\'')+1;

const keyboard = [alphabetArr.slice(0, endFirstStr), alphabetArr.slice(startSecondStr, endSecondStr), alphabetArr.slice(-10)];
console.log(keyboard);

const hello = `${keyboard[1][5]}${keyboard[0][2]}${keyboard[1][8]}${keyboard[1][8]}${keyboard[0][8]}`;

const javascript = `${keyboard[1][6]}${keyboard[1][0]}${keyboard[2][3]}${keyboard[1][0]}${keyboard[1][1]}${keyboard[2][2]}${keyboard[0][3]}${keyboard[0][7]}${keyboard[0][9]}${keyboard[0][4]}`;

const trainer = `${keyboard[0][4]}${keyboard[0][3]}${keyboard[1][0]}${keyboard[0][7]}${keyboard[2][5]}${keyboard[0][2]}${keyboard[0][3]}`;

console.log(`${hello}
${javascript}
${trainer}`);