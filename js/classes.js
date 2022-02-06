// 'use strict';

// // function User(name, surname, age, isMale, email, isSubscribed) {
// //   this.firstName = name;
// //   this.lastName = surname;
// //   this.age = age;
// //   this.isMale = isMale;
// //   this.email = email;
// //   this.isSubscribed = isSubscribed;
// // }

// // User.prototype.getFullName = function () {
// //   return `${this.firstName} ${this.lastName}`;
// // };

// // const user = new User('', '', 0, true, '', true);

// /******************************* */

// class User {
//   constructor(name, surname, age, isMale, email, isSubscribed) {
//     this.firstName = name;
//     this.lastName = surname;
//     this.age = age;
//     this.isMale = isMale;
//     this.email = email;
//     this.isSubscribed = isSubscribed;
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   static isUser(obj) {
//     return obj instanceof User;
//   }
//   // реализовать сеттер для года производства с валидацией и соответствующий геттер
//   set age(value) {
//     if (typeof value !== 'number') {
//       throw new TypeError('age must be number value');
//     }
//     if (value < 0 || value > 130 || !Number.isInteger(value)) {
//       throw new RangeError('age must be an integer value between 0 and 130');
//     }

//     this._age = value;
//   }

//   get age() {
//     return this._age;
//   }
// }
// try {
//   const user = new User('Test', 'Testovich', 12, true, 'test@test.com', true);
//   console.log('user full name :>> ', user.getFullName());
//   user.age = 30; // user.age(20)
//   console.log(user.age); // user.age()
// } catch (err) {
//   console.log('err :>> ', err);
// }

// // реализовать класс для телефонов (марка, модель, цвет, цена, год выпуска)
// // реализовать метод для расчета возраста телефона
// // создать экземпляр класса, вызвать для него метод

// // реализовать сеттер для года производства с валидацией и соответствующий геттер

// class Phone {
//   constructor(mark, model, color, price, year) {
//     this.mark = mark;
//     this.model = model;
//     this.color = color;
//     this.price = price;
//     this.year = year;
//   }
//   getPhoneAge() {
//     return new Date().getFullYear() - this.year;
//   }
//   set year(value) {
//     if (typeof value !== 'number') {
//       throw new TypeError('inccorect year ');
//     }
//     if (value > new Date().getFullYear() || value < 1970) {
//       throw new Error('inccorect year');
//     }

//     this._year = value;
//   }
//   get year() {
//     return this._year;
//   }
// }
// try {
//   debugger;
//   const myPhone = new Phone('4 note', 'xiaomi', 'black', 4000, 1969);
// } catch (err) {
//   console.log(err);
// }
/************************************************************************** */
/* ООП */
// Основные принципы ООП
// инкапсуляция (сокрытие логики и (свойств))
// наследование (переипользование структуры и логики)
// полиморфизм (умение работать с разными типами (в js полиморфизм подтипов))

// //  Наследование

// базовый/родительский
class User {
  constructor(name, surname, age, isMale, email, isBanned = false) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isBanned = isBanned;
  }
  // методы
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user1 = new User('Test', 'Testovoch', 55, false, 'test@test.com');

// дочерний
class Moderator extends User {
  constructor(name, surname, age, isMale, email, permission) {
    super(name, surname, age, isMale, email); // вызов конструктора базового класса
    this.permission = permission;
  }
  sendMessage(user, message) {
    console.log(`${user.fullName} will receive message: "${message}"`);
  }
}

const moderator1 = new Moderator(
  'Mod',
  'Modovich',
  20,
  true,
  'mod@mod.com',
  {}
);

moderator1.sendMessage(user1, 'Your message was banned');

// класс Admin c методами bann(user) - забанить юзера,  unbann(user) - разбанить юзера
class Admin extends Moderator {
  constructor(name, surname, age, isMale, email, permission, category) {
    super(name, surname, age, isMale, email, permission);
    this.category = category;
  }
  bann(user) {
    user.isBanned = true;
  }
  unbann(user) {
    user.isBanned = false;
  }
}
const admin = new Admin('Mr.', 'Smith', 1000, true, 'mrsmith@zion.com', {}, 1);
// console.log(admin);
// admin.bann(user1);
// console.log(user1);
// admin.unbann(user1);
// console.log(user1);

/***** ПЕРЕОПРЕДЕЛЕНИЕ **************************************************************** */

// squirrel (есть, что дадут), flyingSquirrel (есть только орехи)

class Squirrel {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(`squirrel ${this.name} is running`);
  }

  eat(food) {
    console.log(`squirrel ${this.name} is eating ${food}`);
  }
}

class FlyingSquirrel extends Squirrel {
  constructor(name, maxDistance) {
    super(name);
    this.maxDistance = maxDistance;
  }

  flying() {
    console.log(`squirrel ${this.name} is flying up to ${this.maxDistance}`);
  }

  eat() {
    console.log(`squirrel ${this.name} is eating nuts`);
  }
}

const sqiurrel = new Squirrel('Lilia');

const fSquirrel = new FlyingSquirrel('Boing 777', 30);

/***************************************************************************** */
// абстрактный класс - класс без реализации
class Figure {
  constructor(name) {
    this.name = name;
  }
  getArea() {
    return null;
  }
}

class Square extends Figure {
  constructor(a) {
    super('Square');
    this.a = a;
  }
  getArea() {
    return this.a * this.a;
  }
}

class Rectangle extends Figure {
  constructor(a, b) {
    super('Rectangle');
    this.a = a;
    this.b = b;
  }
  getArea() {
    return this.a * this.b;
  }
}

const s = new Square(5);
const r = new Rectangle(2, 10);

function calcArea(fig) {
  if (fig instanceof Figure) {
    return fig.getArea();
  }
  throw TypeError('received param is not a Figure');
}
