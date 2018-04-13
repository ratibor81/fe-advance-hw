const lang = {
  en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./",
};
const alphabetEn = lang.en;
const keybContainer = document.querySelector('.keyboard-container');
const html = document.querySelector('#keyb').textContent.trim();
const compiled = _.template(html);

const getKeyboardArr = (splitChar1, splitChar2, alphabet) => {
  const arr = alphabet.split('');
  const keyboard = [arr.slice(0, arr.indexOf(splitChar1)), arr.slice(arr.indexOf(splitChar1), arr.indexOf(splitChar2)), arr.slice(arr.indexOf(splitChar2))];
  return keyboard;
};
const keybArr = getKeyboardArr('a', 'z', alphabetEn);
keybContainer.innerHTML = compiled(keybArr);

const buttons = Array.from(document.querySelectorAll('.button'));
const onMouseClick = (event) => {
  if (event.target.classList.contains('button')) {
    event.target.classList.add('button--active');
  }
};
const onReleaseButton = () => {
  for (let i = 0; i < buttons.length; i += 1) { buttons[i].classList.remove('button--active'); }
};

document.addEventListener('mousedown', onMouseClick);
document.addEventListener('mouseup', onReleaseButton);
