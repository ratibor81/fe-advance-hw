
const buttons = Array.from(document.querySelectorAll('button')); // Получаю массив всех "button"
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split(''); // Получаю массив букв
const spaceBtn = document.querySelector('.keyboard__btn--space'); // Получаю кнопку "Space"
const sounds = Array.from(document.querySelectorAll('audio')); // Получаю массив всех звуков по тегу "audio"
const checkbox = document.querySelector('#slideThree'); // Получаю элемент "Checkbox"

// Обработчик для клика

// function onPushButton(event){
//   const button = event.target;
//     if (button.tagName != 'BUTTON') {
//       console.log('Ne to!');}
//       else {
//       buttons.forEach(button => button.classList.remove('keyboard__btn--active'));
//       button.classList.add('keyboard__btn--active');
//       playSound(button.getAttribute('data-note'));
//     }
    
// }

const onPushButton = (event) => {
  keys.forEach((key, i) => {
    if (event.key === key) { 
      buttons[i].classList.add('keyboard__btn--active'); 
      playSound(buttons[i].getAttribute('data-note')); 
    }
    
  });
    if (event.keyCode === 32) { 
      spaceBtn.classList.add('keyboard__btn--active');
      playSound(spaceBtn.getAttribute('data-note')) 
    } 
  
};

const onReleaseButton = () => {
  for (let i = 0; i < buttons.length; i += 1) { buttons[i].classList.remove('keyboard__btn--active'); }
};

const playSound = (note) => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};

const onClickSoundSwitch = () => {
  for (let i = 0; i < sounds.length; i += 1) {
    if (checkbox.checked) {
      sounds[i].muted = false;
    } else sounds[i].muted = true;
  }
};

window.addEventListener('keydown', onPushButton);
window.addEventListener('keyup', onReleaseButton);
checkbox.addEventListener('change', onClickSoundSwitch);

