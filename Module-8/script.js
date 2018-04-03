
const buttons = Array.from(document.querySelectorAll('button')); // Получаю массив всех "button"
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split(''); // Получаю массив букв
const spaceBtn = document.querySelector('.keyboard__btn--space'); // Получаю кнопку "Space"
const sounds = Array.from(document.querySelectorAll('audio')); // Получаю массив всех звуков по тегу "audio"
const checkbox = document.querySelector('#slideThree'); // Получаю элемент "Checkbox"

const onPushButton = (event) => {
  keys.forEach((key, i) => {
    if (event.key === key) { buttons[i].classList.add('keyboard__btn--active'); }
  });
  if (event.keyCode === 32) { spaceBtn.classList.add('keyboard__btn--active'); } // Обработка кнопки "Space"
};

const onReleaseButton = () => {
  for (let i = 0; i < buttons.length; i += 1) { buttons[i].classList.remove('keyboard__btn--active'); }
};

const playSound = (note) => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};

const onPlay = (event) => {
  keys.forEach((key, i) => {
    if (event.key === key) {
      playSound(buttons[i].getAttribute('data-note'));
    }
  });
  if (event.keyCode === 32) { playSound(spaceBtn.getAttribute('data-note')); } // Проигрываю ноту для "Space"
};

const onClickSoundSwitch = () => {
  for (let i = 0; i < sounds.length; i += 1) {
    if (checkbox.checked) {
      sounds[i].muted = false;
    } else sounds[i].muted = true;
  }
};

window.addEventListener('keydown', onPushButton);
window.addEventListener('keydown', onPlay);
window.addEventListener('keyup', onReleaseButton);
checkbox.addEventListener('change', onClickSoundSwitch);

// В методах onReleaseButton и onClickSoundSwitch с начала перебирал значения с помощью for...of, но ESLint заматерился, что такая конструкция является тяжёлой для перебора(или обработки) DOM элементов, пришлось заменить на обычный for, как-то так.
