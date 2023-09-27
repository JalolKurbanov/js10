
let amount = +prompt('Введите количество');

let users= {};

for(let i = 1;i<=amount;i++){
    let userName = prompt("Как вас зовут?");
    let userAge = +prompt("Сколько вам лет?");
    users[`name${i}`]=userName;
    users[`age${i}`]=userAge;
}
for(let k = 1;k<=amount;k++){
    console.log(`Пользователь - ${k}`);
    console.log(`Имя - ${users[`name`+k]}`);
    console.log(`Возраст - ${users[`age`+k]}`);
}