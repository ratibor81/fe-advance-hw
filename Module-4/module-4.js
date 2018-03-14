/*  Написать функцию, getPx(str), обратную setPx(). 
    Функция getPx должна получать строку вида '10px' 
    и возвращать число 10.
    */

// функция принимает размер виде строки и возвращает число без px
function isNumber(value) {
    return typeof value === 'string';
  }
function getPx(str) {
    if (isNumber(str)) {
    let number = parseFloat(str);
    return number;
    }
    else 
    return 'Input correct string!';
  }

  // проверка правильности кода
  console.log(getPx('10px') === 10);   // должно быть:  true
  console.log(getPx('10.5') === 10.5); // должно быть:  true
  console.log(getPx('0') === 0);       // должно быть:  true
  console.log(getPx(-1));              // должно быть:  'Input correct string!'
  console.log(getPx(10));              // должно быть:  'Input correct string!'
  
 // ------------------------------------------------------------------------------------------------- //

 /*  Написать фукнцию findLongestWord(str) 
    которая получает аргументом произвольную строку и
    возвращает самое длинное слово в этой строке.   
    Важное условие  - в строке должны быть только пробелы
    и символы букв и цифр!
*/

function findLongestWord(str) {
  if (str === "") {
    return str = "Введите непустую строку"; 
    
  }
  if (typeof str === 'number' || typeof str === 'boolean') {
    return str = String(str);
  }
    const strSplit = str.split(" ");
      let longestWord = "";
      for ( let i = 0; i < strSplit.length; i++ ) {
        if ( strSplit[i].length > longestWord.length ) {
        longestWord = strSplit[i];
        }
      }
      return longestWord;
    }
  


  // Проверки
  const find = findLongestWord("a bb ccc dddd eeeee ffff ggg hh i") === "eeeee";
  console.log("правильность поиска: ", find);
  // должно вернуть true
  
  const equal = findLongestWord("bb cc hh") === "bb";
  console.log("обработка равных строк: ", equal);
  // должно вернуть true
  
  const symbol = findLongestWord("a") === "a";
  console.log("обработка строки-символа: ", symbol);
  // должно вернуть true
  
  const empty = findLongestWord("") === "Введите непустую строку";
  console.log("обработка пустой строки: ", empty);
  // должно вернуть true
  
  const fromNum = findLongestWord(5) === "5";
  console.log("приведение к строке number: ", fromNum);
  // должно вернуть true
  
  const fromBool = findLongestWord(false) === "false";
  console.log("приведение к строке boolean: ", fromBool);
  // должно вернуть true
  
  if (fromBool && fromNum && empty && symbol && equal && find) {
    alert(
      "Функция работает правильно! Можно сдавать работу и закоментировать этот alert!"
    );
  }
  

  // --------------------------------------------------------------------------------------------------------------------------- //

/*  Есть массив с логинами (logins)
    Написать функцию, addLogin(value) 
    которая 
     1)проверяет количество символов и 
       пропускает от 3-х до 16-ти включительно,
       иначе возвращает текст с просьбой изменить
       логин (уменьшить - 'Не более 16 символов', если больше 16 
       и увеличить 'Не менее 3-х символов', если меньше 3-х)
     2)добавлет новый логин в logins только если тот уникальный 
       и возвращает true.
       Если не уникальный, то функция предлагает придумать новый логин,
       возвращая строку 'Such name already exists'.
    */

   let logins = ['ImFirst', 'robotGoogles', 'R2D2', 'admin', 'test', 'user'];

   function addLogin(value) {
    if ( value.length < 3 ) {
      return 'Не менее 3-х символов';
    }
    else if ( value.length > 16 ) {
      return 'Не более 16 символов';
    }

    if (logins.includes(value))
      return 'Этот логин уже занят, подберите другой логин.';
    else 
      logins.push(value);
      return true;
    }

   console.log( addLogin('ImFirst') === 'Этот логин уже занят, подберите другой логин.'); 
   // должно быть -> true
   
   console.log(addLogin('a') === 'Не менее 3-х символов'); 
   // должно быть -> true
   
   console.log(addLogin('aaa') === true); 
   // должно быть -> true
   
   console.log(addLogin('123456789abcdef') === true); 
   // должно быть -> true
   
   console.log(addLogin('0123456789abcdefg') === 'Не более 16 символов'); 
   // должно быть -> true
   
   // ------------------------------------------------------------------------------------------------------ //

   /*  Напишите функцию toPhoneFormat(str) 
    которая получает строку c телефонным номером, 
    содержащим любые символы и 12 цифр.
    Нужно извлечь все цифры в порядке написания
    и вернуть текст номера телефона в формате строки
     +(12)(345)123-45-67. 
    */

const arr = ['+38050-1234567', '+38(050)1234-567', '38-050-123-4567', '38/050/123:45:67', '380501234567', '38-050(123-4567)'];

function toPhoneFormat(value) {
  const symbols = value.split('');
  const arrSymbols = symbols.filter(elem => elem >= 0 );
  const tel = `+(${arrSymbols[0]}${arrSymbols[1]})(${arrSymbols[2]}${arrSymbols[3]}${arrSymbols[4]})${arrSymbols[5]}${arrSymbols[6]}${arrSymbols[7]}-${arrSymbols[8]}${arrSymbols[9]}-${arrSymbols[10]}${arrSymbols[11]}`;
  return tel;
}

// проверка 

let res = arr.map(elem => elem = toPhoneFormat(elem));
console.log( res.every(elem => elem == '+(38)(050)123-45-67'));

// ---------------------------------------------------------------------------------------------------------------- //

/*  Есть массив с ценой проживания в номере (rents).
    1) Написать функцию, arrangeArray,
       которая сортирует массив rents по ценам 
       в порядке возрастания
    2) Написать функцию, uniqRents(arr) 
      которая содает новый массив, 
      состоящий только из уникальных цен. 
    3) Написать функцию rentsToString(arr), 
      которая из анализа массива rents 
      возвращает строку.
    */

   let rents  = [59, 62, 66, 67, 45, 48, 60, 62, 59.0, 62.0, 59.00, 66.00, 45, 45.00, 48, 102];

   function arrangeArray(arr) {
     let res = arr.sort((current, next) => current - next);
     return res;
   }
   //arrangeArray(rents);

   function uniqArray(arr) {
     let res = [];
     nextInput:
     for (let i = 0; i < arr.length; i++) {
       let price = arr[i];  // для каждого элемента
       for (let j = 0; j < res.length; j++) {  // ищем, был ли он уже?
         if (res[j] == price) continue nextInput;  // если да, то следующий
       }
       res.push(price); // добавляем в результирующий массив
     }
     return res;
   }
   //uniqArray(rents);
   
   let rents  = [59, 62, 66, 67, 45, 48, 60, 62, 59.0, 62.0, 59.00, 66.00, 45, 45.00, 48, 102];

   function rentsToString (arr) {
    let sum, min, max, srt;
      sum = arr.reduce((current, next) => current + next);
      srt = arr.sort((current, next) => current - next);
      min = srt[0];
      max = srt[srt.length - 1];
     
     return `Цены проживания в отелях 
         начинаются от ${min}$ и заканчиваются ${max}$.
         Средняя цена на сегодня состовляет ${sum/arr.length}$.`
   }
   rentsToString(rents);
   
   // --------------------------------------------------------------------------------------------------- //

// Все циклы for надо переписать с помощью 
//  map, filter, reduce, every


/* Функция findGreaterThen получает два 
   аргумента  - число и массив.
   Функция фозвращает новый массив,
   содержащий элементы которые больше
   числа.
*/
const findGreaterThen = (n, arr) => {

  const result = arr.filter(elem => elem > n );
  return result;

};
const numbers = [1, 2, 3, 4, 5];
console.log(findGreaterThen(2, numbers)); // [3, 4, 5,]
console.log(findGreaterThen(3, numbers)); // [4, 5,]
console.log(findGreaterThen(1, numbers)); // [2, 3, 4, 5,]

/* Функция findEvery получает два 
   аргумента  - число и массив.
   Функция фозвращает true если
   все элементы имеют значения больше или равны числу.
   Иначе есть хоть один элемент меньше числа,
   то возвращается false
*/
const findEvery = (n, arr) => {
  const isBigEnough = (el, arr) => el >= n;
   if (arr.every(isBigEnough)) {
      return true;
    }
  
  return false;
};

const numbs = [5, 6, 7, 8, 9];
console.log(findEvery(5, numbs)); // true
console.log(findEvery(6, numbs)); // false
console.log(findEvery(4, numbs)); // true

//==========================================
/* Функция multiplyBy принимает два аргумента -
   число и массив. Функция возвращает массив,
   все значения которого умножены на число.
   */
const numbers = [1, 2, 3, 4, 5];

const multiplyBy = (n, arr) => {
  let result = arr.map(i => i * n);

  return result;
};

console.log(multiplyBy(2, numbers)); // [2, 4, 6, 8, 10]
console.log(multiplyBy(3, numbers)); // [3, 6, 9, 12, 15]
console.log(multiplyBy(4, numbers)); // [4, 8, 12, 16, 20]


//==========================================
/* Функция summAllNumbers принимает любое число аргументов.
   Функция возвращает число - сумму всех аргументов.
*/
function summAllNumbers () {
  const args = Array.from(arguments);
  sum = args.reduce((current, next) => current + next);
  return sum;
};


console.log(summAllNumbers(1, 2, 3)); // 6
console.log(summAllNumbers(1, 2, 3, 4)); // 10
console.log(summAllNumbers(1, 2, 3, 4, 5)); // 15
   