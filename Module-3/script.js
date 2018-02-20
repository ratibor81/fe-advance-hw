const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let alphabetArr = alphabet.split('');

let keyboard = [alphabetArr.slice(0, 12), alphabetArr.slice(12, 23), alphabetArr.slice(23, 33)];
console.log(keyboard);

let hello = [keyboard[1][5], keyboard[0][2], keyboard[1][8], keyboard[1][8], keyboard[0][8]].join("");

let javascript = [keyboard[1][6], keyboard[1][0], keyboard[2][3], keyboard[1][0], keyboard[1][1], keyboard[2][2], keyboard[0][3],
keyboard[0][7], keyboard[0][9], keyboard[0][4]].join("");

let trainer = [keyboard[0][4], keyboard[0][3], keyboard[1][0], keyboard[0][7], keyboard[2][5], keyboard[0][2], keyboard[0][3]].join("");

console.log(`${hello}
${javascript}
${trainer}`);