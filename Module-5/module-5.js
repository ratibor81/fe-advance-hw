/*  
  Напишите код, который последовательно: 
 - добавляет поле mood со значением'happy'
 - заменяет значение hobby на 'javascript'
 - удаляет свойство premium
 - выводит содержимое объекта user 
    циклом в формате ключ: значение
*/

const user = {
    name: 'Mango',
    age:  20,
    hobby: 'html',
    premium: true
  };

const editObj = (Obj) => {
    Obj.mood = 'happy';
    Obj.hobby = 'javascript';
    delete Obj['premium'];
}

editObj(user);

const getObjContent = (Obj) => {
    for (let key in Obj) {
        console.log(` ${key} : ${Obj[key]} `);
    }
}
getObjContent(user);

// ------------------------------------------------------------------------------------------------- //

/*  
  Напишите код, который бы  с помощью функции-конструкора 
  (CF - Constructor Function) User позволял создавать 
  объекты пользователя со следующим свойствами:
 - тип - 'user'
 - имя - параметр CF
 - age - параметр CF
 - friends - число, параметр CF

  Написать функцию getUserInfo, которая на основании одного 
  параметра - имени объекта, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать один объект пользователя User и 
  с помощью функции getUserInfo вывести строку в консоль.
*/

function UserObj ( name, age, friends) {
    this.type = 'user';
    this.name = name;
    this.age = age;
    this.friends = friends;
}
const user = new UserObj("Vasya", 25, 30);

const getUserInfo = (user) => {
    return `User ${user.name} is ${user.age} years old and has ${user.friends} friends`;
}
getUserInfo(user);

// -------------------------------------------------------------------------------------------------------------------------------- //

/*  
  В этой работе содается объект - хранилище.
  Должны хранится пары ключ-значение.
  Ососбенность данного хранилища в том, 
  что ключи генерируются специальной 
  функцией на на основе замыкания, что гарантирует уникальность ключа. 
  Ключи создаются как у масива от 0 и далее добавляя по 1.
  Ваша задача состоит в том, чтобы создать функцию addToObj, 
  которая гарантирет уникальность добавляемого значения 
  (вернее в соданную функцию добавить код)
  
*/

// счетчик на основе замыкания
const counter = (function() {
    let privateCounter = 0;
  
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    };
  })();
  
  /*
    Пример ипользования счетчика
    
    counter.value() // 0
    counter.increment();
    counter.value() // 1
  */
  
  const emtyObject = Object.create(null);    // создает объект без методов
  
  function addToObj(value, obj) {
    let key;
    for (key in obj) {
        if (Object.is(value, obj[key])) {    // Проверка на уникальность value перед добавлением.
            return;
        }
    }
    obj[counter.value()] = value;
    counter.increment();
  }


  addToObj("one", emtyObject);
  addToObj("two", emtyObject);
  addToObj("three", emtyObject);
  addToObj("four", emtyObject);
  addToObj("one", emtyObject);
  addToObj("one", emtyObject);
  addToObj("two", emtyObject);
  addToObj("five", emtyObject);
  addToObj("three", emtyObject);
  addToObj("five", emtyObject);
  addToObj("one", emtyObject);
  addToObj("four", emtyObject);
  
  // Вывод объекта
  console.log(emtyObject);

  // ------------------------------------------------------------------------------------------------------ //

  /*  
  Дополните код так, чтобы скрипт последовательно выводил в консоль
  строку пары ключ:значение объекта poly. 
  Поле с датой вывести в Украинской локали.
  
  - Реализуйте перебор ключей обьекта используя for in в функции showUserInfoA
  - Реализуйте перебор ключей обьекта НЕ используя for in в функции showUserInfoB
*/



function User(login, pass) {
    this.login = login;
    this.pass = pass;
    this.regDate = new Date().toLocaleString('Uk-uk');
}
  
const poly = new User("Poly", "12345qwerty");
  
function showUserInfoA(obj) {
    console.log("===== With for in =====");
    for (let key in obj) {
        console.log(` ${key} : ${obj[key]} `);
    }
    
}
  
  showUserInfoA(poly);
  
function showUserInfoB(obj) {
    console.log("===== Without for in =====");
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    for (i = 0; i < keys.length; i++){
        console.log(`${keys[i]} : ${values[i]}`);
        
    }
   
}
  
  showUserInfoB(poly);
 
 // ---------------------------------------------------------------------------------------------------------------------- //

 /*  
    Написать функцию, которая бы выводила в консоль
    время, оставшееся до следующего Нового Года
    в Украинской локали
*/
const leftTimeNY = () => {
      const today = new Date(); 
      const endYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999);

      const leftTime = endYear - today;
      const leftDate = leftTime / 86400000;
      const days = Math.floor(leftDate);
      const leftHour = (leftDate - days)*24;
      const hour = Math.floor(leftHour);
      const leftMin = (leftHour - hour)*60;
      const min = Math.floor(leftMin);
      const leftSec = (leftMin - min)*60;
      const sec = Math.floor(leftSec);
      
return console.log(`До Нового 2019-го Року:  ${days} дн. ${hour} год. ${min} хв. ${sec} сек.`);
     
}

leftTimeNY()

 