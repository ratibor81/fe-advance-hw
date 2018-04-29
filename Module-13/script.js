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
const resultsList = document.querySelector('.results');
const form = document.querySelector('#form');

const showResults = (results) => { // Ф-ция для отрисовки результата валидации
  let list = '';
  const keys = Object.keys(results);
  const values = Object.values(results);
  values.forEach((value, i) => {
    if (value === true) {
      list += `<li class="success">SUCCESS: ${keys[i]} passed validation</li>`;
    } else { list += `<li class="error">ERROR: ${keys[i]} failed validation</li>`; }
  });
  resultsList.innerHTML = list;

  // ЭТОТ ВАРИАНТ КОРОЧЕ, НО EsLint СКАЗАЛ: "юзай Object.{keys,values}, а потом перебирай массив" !
  // for (const key in results) {
  //   if (results[key] === true) {
  //     list += `<li class="success">SUCCESS: ${key} passed validation</li>`;
  //   } else { list += `<li class="error">ERROR: ${key} failed validation</li>`; }
  // }
  // resultsList.innerHTML = list;
};

const validate = (event) => {
  event.preventDefault();
  if (firstname.value === '' || lastname.value === '' || tel.value === '') { // Проверка на пустые значения input'ов
    resultsList.innerHTML = '<div class="error">ERROR: You must fill all the fields !!!</div>';
    return;
  }
  const results = {
    firstname: false,
    lastname: false,
    tel: false,
  };
  if ((/^[a-zA-Z]|[а-яА-Я]+$/.test(firstname.value))) { // Только одно слово латиница или кирилица
    results.firstname = true;
  }
  if ((/^[a-zA-Z]|[а-яА-Я]+$/.test(lastname.value))) { // Аналогично полю firstname
    results.lastname = true;
  }
  if ((/\+\d{3}[\s|-]\d{2}[\s|-]\d{2}[\s|-]\d{2}[\s|-]\d{3}/).test(tel.value)) { // Проходят значения с пробелом или дефисом
    results.tel = true;
  }
  form.reset(); // Сброс полей формы после валидации
  showResults(results); // Отрисовка объекта валидации формы
};

submitBtn.addEventListener('click', validate);
