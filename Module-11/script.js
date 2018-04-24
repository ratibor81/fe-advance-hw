const result = document.querySelector('#result');
const idInput = document.querySelector('#idInput');
const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const delInput = document.querySelector('#delInput');
const editInput = document.querySelector('#editInput');
const newName = document.querySelector('#newName');
const newAge = document.querySelector('#newAge');
const status = document.querySelector('.status');
const resTable = document.querySelector('.resultTable');

const htmlTpl = document.querySelector('#table-row').textContent.trim();
const compiled = _.template(htmlTpl);

const updateView = (users) => {
  let htmlString = '';
  users.forEach((user) => {
    htmlString += compiled(user);
  });
  resTable.style.display = 'table';
  result.innerHTML = htmlString;
};

const getAllUsers = () => {
  fetch('https://test-users-api.herokuapp.com/users/')
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error('Error fetching data');
    })
    .then((users) => {
      updateView(users.data);
    });
  // .catch((err) => {
  //   console.error('Error: ', err);
  // });
};

const getUserById = (id) => {
  if (idInput.value === '') { status.innerHTML = 'Введите ID !'; }
  fetch(`https://test-users-api.herokuapp.com/users/${id}`)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error('Error fetching data');
    })
    .then((user) => {
      result.innerHTML = compiled(user.data);
      idInput.value = '';
    });
};

const addUser = () => {
  if (nameInput.value === '' || ageInput.value === '') {
    status.innerHTML = 'Заполните все поля!';
    return;
  }
  if (!isNaN(nameInput.value) || ageInput.value < 0) { // Проверка с typeof nameInput.value !== 'string, почему-то не работает(
    status.innerHTML = 'Введите корректные данные!';
    return;
  }
  fetch('https://test-users-api.herokuapp.com/users', {
    method: 'POST',
    body: JSON.stringify({ name: nameInput.value, age: ageInput.value }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(() => {
      status.innerHTML = 'Пользователь успешно добавлен!';
    });
  nameInput.value = '';
  ageInput.value = '';
};

const removeUser = (id) => {
  if (delInput.value === '') { status.innerHTML = 'Введите Id !'; return; }
  fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
    method: 'DELETE',
  })
    .then(() => {
      delInput.value = '';
      status.innerHTML = 'Пользователь успешно удалён!';
    });
};

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const updateUser = (id, user) => {
  if (editInput.value === '' || newAge.value === '' || newName.value === '') {
    status.innerHTML = 'Заполните все поля!';
    return;
  }
  if (newAge.value < 0 || !isNaN(newName.value)) {
    status.innerHTML = 'Введите корректные данные!';
    return;
  }
  fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(() => {
      status.innerHTML = 'Изменения внесены успешно!';
      editInput.value = '';
      newAge.value = '';
      newName.value = '';
    });
};

const onClickHandler = (event) => {
  if (event.target.classList.contains('allusers')) {
    getAllUsers();
  }
  if (event.target.classList.contains('idBtn')) {
    getUserById(idInput.value);
  }
  if (event.target.classList.contains('addBtn')) {
    addUser();
  }
  if (event.target.classList.contains('delBtn')) {
    removeUser(delInput.value);
  }
  if (event.target.classList.contains('editBtn')) {
    const user = new User(newName.value, newAge.value);
    updateUser(editInput.value, user);
  }
};

document.addEventListener('click', onClickHandler);
