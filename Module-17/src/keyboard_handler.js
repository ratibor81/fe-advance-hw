const buttons = Array.from(document.querySelectorAll('.button')); // Получаю массив всех "button"
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split(''); // Получаю массив букв
const spaceBtn = document.querySelector('.space-btn');

const onPushButton = (event) => {
  keys.forEach((key, i) => {
    if (event.key === key) {
      buttons[i].classList.add('keyboard__btn--active');
    }
  });
  if (event.keyCode === 32) {
    spaceBtn.classList.add('keyboard__btn--active');
  }
};

const onReleaseButton = () => {
  for (let i = 0; i < buttons.length; i += 1) { buttons[i].classList.remove('keyboard__btn--active'); }
};

window.addEventListener('keydown', onPushButton);
window.addEventListener('keyup', onReleaseButton);
