// Домашнее задание

const hotelNumber = prompt('Пожалуйста выберете курорт: 1 - Taba, 2- Sharm, 3 - Hurgada:', '');

if (hotelNumber === '1') {
    alert('Вы выбрали курорт - Taba');
} else if (hotelNumber === '2') {
    alert('Вы выбрали курорт - Sharm');
} else if (hotelNumber === '3') {
    alert('Вы выбрали курорт - Hurgada');
} else {
    alert('Вы ввели число, для которого нет варианта курорта');
}

// Домашнее задание повышенной сложности

let groupTaba = 6;
let groupSharm = 15;
let groupHurgada = 25;
let acceptMembers;

let groupMembers = prompt('Пожалуйста введите количество участников группы:', Number(''));
    groupMembers = Number(groupMembers);

switch (true) {
    case Math.abs(parseInt(groupMembers)) != groupMembers:
        alert('Вы ввели неверное число!');
        break;
    case groupMembers <= groupTaba:
    acceptMembers = confirm('Есть места в группе Taba. Вы согласны быть в этой группе?');
    if (acceptMembers) {
        groupTaba = groupTaba - groupMembers;
        console.log(groupTaba);
        break;
    }
    case groupMembers <= groupSharm:
    acceptMembers = confirm('Есть места в группе Sharm. Вы согласны быть в этой группе?');
    if (acceptMembers) {
        groupSharm = groupSharm - groupMembers;
        console.log(groupSharm);
        break;
    }
    case groupMembers <= groupHurgada:
    acceptMembers = confirm('Есть места в группе Hurgada. Вы согласны быть в этой группе?');
    if (acceptMembers) {
        groupHurgada = groupHurgada - groupMembers;
        console.log(groupHurgada);
        break;
    }
    case groupMembers >= groupHurgada:
        alert('Ивините, такого количества мест нет ни в одной группе!');
        break;
}