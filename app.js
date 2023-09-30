
let amount = +prompt('Введите количество');

let users= {};
for(let q = 1;q<=amount;q++){
    users[q]={};
}
for(let i = 1;i<=amount;i++){
    let userName = prompt("Как вас зовут?");
    let userAge = +prompt("Сколько вам лет?");
    users[i][`name`]=userName;
    users[i][`age`]=userAge;
}
for(let k = 1;k<=amount;k++){
    console.log(`Пользователь - ${k}`);
    console.log(`Имя - ${users[k][`name`]}`);
    console.log(`Возраст - ${users[k][`age`]}`);
}
console.log(users);