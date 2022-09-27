// 1 Змінні
// const firstName = 'Vladya'; //string
 //не можна змінити(найкращий варік)
//let age = 26; //можна змінити
// const Barik = true; //boolean

// const _ = 'symbol'
//const if = 'err' не можна з зарезервованих слів
//const 5fgmr = 'err' не можна з цифри


// 2 Мутація

// console.log('Name: ' + firstName + ', age: '+ age.toString());
//const lastName = prompt('Type LastName');
//alert(firstName + ' ' + lastName);

//3 Оператори

// let currentYear = 2022;
// const birthYear = 2000;
// //const age = currentYear - birthYear;

// const a = 10;
// const b = 5;

// let c = 32;
// // c = c + a;
// c += a

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(currentYear++);
// console.log(currentYear);
// console.log(c);

// 4 Типи даних
// const Barik = true;
// const name = 'Vlad';
// const age = 22;
// let x;

// console.log(typeof Barik);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof x);
// console.log(typeof null); //бага
// console.log(null);


// 5 Приоритет операторів
const fullAge = 22;
const birthYear = 2000;
const currentYear = 2022;
// > < >= <=
const isFullAge = (currentYear - birthYear) >= fullAge
console.log(isFullAge);