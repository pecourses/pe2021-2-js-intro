'use strict';

// function User(name, surname, age, isMale, email, isSubscribed) {
//   this.firstName = name;
//   this.lastName = surname;
//   this.age = age;
//   this.isMale = isMale;
//   this.email = email;
//   this.isSubscribed = isSubscribed;
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// const user = new User('', '', 0, true, '', true);

/******************************* */

class User {
  constructor(name, surname, age, isMale, email, isSubscribed) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  static isUser(obj) {
    return obj instanceof User;
  }
  // реализовать сеттер для года производства с валидацией и соответствующий геттер
  set age(value) {
    if (typeof value !== 'number') {
      throw new TypeError('age must be number value');
    }
    if (value < 0 || value > 130 || !Number.isInteger(value)) {
      throw new RangeError('age must be an integer value between 0 and 130');
    }

    this._age = value;
  }

  get age() {
    return this._age;
  }
}
try {
  const user = new User('Test', 'Testovich', 12, true, 'test@test.com', true);
  console.log('user full name :>> ', user.getFullName());
  user.age = 30; // user.age(20)
  console.log(user.age); // user.age()
} catch (err) {
  console.log('err :>> ', err);
}

// реализовать класс для телефонов (марка, модель, цвет, цена, год выпуска)
// реализовать метод для расчета возраста телефона
// создать экземпляр класса, вызвать для него метод

// реализовать сеттер для года производства с валидацией и соответствующий геттер

class Phone {
  constructor(mark, model, color, price, year) {
    this.mark = mark;
    this.model = model;
    this.color = color;
    this.price = price;
    this.year = year;
  }
  getPhoneAge() {
    return new Date().getFullYear() - this.year;
  }
  set year(value) {
    if (typeof value !== 'number') {
      throw new TypeError('inccorect year ');
    }
    if (value > new Date().getFullYear() || value < 1970) {
      throw new Error('inccorect year');
    }

    this._year = value;
  }
  get year() {
    return this._year;
  }
}
try {
  debugger;
  const myPhone = new Phone('4 note', 'xiaomi', 'black', 4000, 1969);
} catch (err) {
  console.log(err);
}
