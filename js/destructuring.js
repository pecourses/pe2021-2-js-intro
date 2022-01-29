'use strict';
/* Деструктурирующее присваивание (деструктуризация)*/

const user = {
  name: 'Test',
  age: 23,
  email: 'test@test.com',
  isMale: true,
};

f(user);

// function f(userObj) {
//   // const name = userObj.name;
//   // const age = userObj.age;

//   const { name, age} = userObj;

//   console.log('user :>> ', `User name: ${name}. He is ${age} years old.`);
// }

function f({ name: firstName, age }) {
  // const name = userObj.name;
  // const age = userObj.age;

  // const { name, age} = userObj;

  console.log('user :>> ', `User name: ${firstName}. He is ${age} years old.`);
}

// переименовать параметры в x, y, z
// функция принимает parallelepiped и => объем
const paralel = {
  a: 12,
  b: 30,
  c: 55,
};

console.log(volume(paralel));

// function volume({ a, b, c }) {
//   return a * b * c;
// }

function volume({ a: x, b: y, c: z }) {
  return x * y * z;
}

/****************************************** */

const book = {
  author: {
    firstName: 'Test',
    lastName: 'Testovich',
  },
  price: 12,
};

const {
  author: { firstName: fN, lastName },
  price,
} = book;

/******************************************* */

const arr = [1, 2, 3, 4, 5, 6];

const [zero, first, second, , , fifth] = arr;

const user1 = {
  name: 'Test',
  age: 23,
  emails: ['test1@test.com', 'test2@test.com'],
  isMale: true,
};

const {
  name,
  emails: [email1, email2],
} = user1;
