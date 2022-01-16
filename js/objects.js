const firstName = 'Test';
const lastName = 'Testovoch';
const email = 'test@gmail.com';

// Объявление объекта
const obj1 = {};
const obj2 = Object();
const obj3 = new Object();

// имя свойства - строка, Symbol()
const user = {
  firstName: 'Test',
  lastName: 'Testovich',
  email: 'test@gmail.com',
  password: 'qwerty',
}

console.log(user);
console.log(user.firstName);

user.email = 'test1@gmail.com';

user.id = 123;

delete user.password;

/***** Ссылочные типы и типы-значения***************************** */

// Примитивы (типы-значения)
const a = 1;
const b = 1;
console.log (a===b);

// Объекты (ссылочные типы)
const o1 = {name:'Test'};
const o2 = o1;
console.log(o1===o2);

/******************************************************************* */
// Создать объект машины (марка, модель, год выпуска, номер, цвет)
// просмотреть объект
// изменить цвет
// удалить св-во год выпуска
// добавить св-во имя/фамилия владельца
// просмотреть объект

const vehicle = {
  model: '968m',
  marka: 'Zaz',
  number: 'AP99999AM',
  year: 2022,
  color: 'black',
}

console.log(vehicle);

vehicle.color = 'yellow';
delete vehicle.year;
vehicle.infoUser = 'Test Testovich';

console.log(vehicle);

/**************************************************************** */
// Вычисляемое свойство
// const prop = prompt('Input prop')
// alert(user[prop])
// prop = 'password'
// user.'password'

const vehicleProp = 'color';
vehicle[vehicleProp] = 'black';
/************************************************************** */


const user2 = {
  // свойства
  firstName: 'Test',
  lastName: 'Testovich',
  email: 'test@gmail.com',
  password: 'qwerty',
  weight: 70,
  height: 1.75,
  //методы
  getFullName () {
    // this -- ссылка на вызывающий объект (на себя)
    return `${this.firstName} ${this.lastName}`
  },
  // getBMI: function(){}
  getBMI () {
    return this.weight / (this.height ** 2)
  },
}
user2.getFullName()
// const bmiUser2 = user2.getBMI()
console.log(user2.getBMI())

// Глобальный объект -- window

const anotherUser = {
  firstName: "Ivan",
  lastName: "Ivanovich",
  getFullName: user2.getFullName,
}

console.log(anotherUser.getFullName)

/***** Функции-конструкторы ***************************************************************** */

// Функция-конструктор (функция для создания и инициализации объектов):
// - именуется в UpperCamelCase
// - для перевода функции в режим конструктора ее нужно вызывать с new

function User(firstName, lastName = '', age = null, email = ''){
  // const this = {};
  if(!new.target) {
    return new User(firstName, lastName, age, email);
  }
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;
  // this.isAdult = function(){
  //   return this.age >= 18;
  // } // ПЛОХО!!! Каждый объект содержит код метода
  // return this;
}

// Общая логика выносится в прототип
const userProto = {}; // new User()

userProto.isAdult = function(){
  return this.age >= 18;
}

User.prototype = userProto;


const user4 = User('Test', '', 23, 'test@gmail.com');
const user5 = new User('Fedor', 'Sidorovich', 16, 'fedor@gmail.com');
// const user6 = new User('123456', '987654')

// console.log(user4.isAdult())
console.log(user4)
console.log(user5)

// Реализовать метод для ф-и-конструктора (в прототипе) кота/машины
// для изменения цвета кота/машины (цвер передавать как параметр в метод)







// Написать функцию-конструктор для создания котиков/машин
// Создать с помощью функции-конструктора 2 объекта

function Cat(nickname, age, color, sex) {
  this.nickname = nickname;
  this.age = age;
  this.color = color;
  this.sex = sex;
}

// const catProto = {};

// catProto.changeColor = function(newColor){
//   this.color = newColor;
// }

// Cat.prototype = catProto;
Cat.prototype = {
  changeColor: function(newColor){
       this.color = newColor;
  }
}

const cat1 = new Cat('typhoon', 5, 'white', 'male');
const cat2 = new Cat('furious', 4, 'black', 'female');

cat1.changeColor('red');

// Object.create()

// В JS прототипное наследование


const newCat = {
  name:'Murchik',
  owner: {
    firstName: "Test", 
    lastName:"Testovich"
  }
}
