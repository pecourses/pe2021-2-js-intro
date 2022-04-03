'use strict';

const o = {
  firstName: 'Test',
  age: 25,
};

function genStory(city) {
  return `${this.firstName} is ${this.age}. He (she) goes to ${city}.`;
}

// bind
const genStoryBindToO = genStory.bind(o);
console.log('genStoryBindToO():', genStoryBindToO('Oslo'));

// call
console.log('call():', genStory.call(o, 'Oslo'));

// apply
console.log('apply():', genStory.apply(o, ['Oslo']));
//****************************************************** */
class User {
  constructor(fN = 'me', age = 20) {
    this.fN = fN;
    this.age = age;
    // 1 bind
    // this.printUser = this.printUser.bind(this);
  }

  printUser() {
    console.log('this.fN', this.fN);
  }
  printUserWithDelay() {
    // 0
    // setTimeout(this.printUser, 2000); // нет this
    // 1 bind
    // setTimeout(this.printUser, 2000);
    // 2 стрелка
    setTimeout(() => this.printUser(), 2000);
  }
}

const u = new User();
u.printUser();
u.printUserWithDelay();
