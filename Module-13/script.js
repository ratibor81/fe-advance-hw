/*
  Соединить задание 1 и 2

  Напишите функцию validate которая проверяет все поля формы
  и возвращает результат в виде обьекта со свойствами firstname,
  lastname и tel.

  Кроме того, формат объекта: в свойства записывается буль-флаг
  уведомляющий о статусе прохождения валидации для поля.

  При клике на кнопку submit должна происходить проверка.

  Визуализировать результат проверки.
    Написать функцию showResults(results), которая принимает
    один аргумент results - объект такого формата который возвращает
    функция validate, и создает html разметку по результатам
    этого объекта.

    showResults добавляет в список с классом .results
    (уже есть в html), li для каждого поля формы. В li записать:
    SUCCESS: 'имя поля' passed validation
    ERROR: 'имя поля' failed validation

    Для li с положительным результатом дать класс success,
    с отрицательным error.
*/

const firstname = document.querySelector('#first_name');
const lastname = document.querySelector('#last_name');
const tel = document.querySelector('#tel');
const submitBtn = document.querySelector('#submit-btn');
const validateFields = Array.from(document.querySelectorAll('.validateResult'));
// const form = document.querySelector('#form');

const showResults = (results) => {
  const keys = Object.keys(results);
  const values = Object.values(results);
  values.forEach((value, i) => {
    if (value === true) {
      validateFields[i].innerHTML = `<li class="success">SUCCESS: ${keys[i]} passed validation</li>`;
    } else { validateFields[i].innerHTML = `<li class="error">ERROR: ${keys[i]} failed validation</li>`; }
  });
};

const validate = () => {
  // event.preventDefault();
  if (firstname.value === '' || lastname.value === '' || tel.value === '') {
    return;
  }
  const results = {
    firstname: false,
    lastname: false,
    tel: false,
  };
  if ((/^([a-zA-Z]{3,12})|([а-яА-Я]{3,12})+$/.test(firstname.value))) {
    results.firstname = true;
  }
  if ((/^([a-zA-Z]{3,12})|([а-яА-Я]{3,12})+$/.test(lastname.value))) {
    results.lastname = true;
  }
  if (/\d{10}/.test(tel.value)) {
    results.tel = true;
    const telArr = Array.from(tel.value);
    tel.value = `+38(${telArr.slice(0, 3).join('')}) ${telArr.slice(3, 5).join('')}-${telArr.slice(5, 7).join('')}-${telArr.slice(7, 10).join('')}`;
  }
  // form.reset(); // Сброс полей формы
  showResults(results); // Отрисовка объекта валидации полей
};

submitBtn.addEventListener('click', validate);
