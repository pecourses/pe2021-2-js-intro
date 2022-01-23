'use strict'

function Phone (brand, model, makeYear, color, isNfc, price) {
  this.brand = brand;
  this.model = model;
  this.makeYear = makeYear;
  this.color = color;
  this.isNfc = isNfc;
  this.price = price;
}

const phones = [];

for(let i = 0; i < 20; i++) {
  const phone = new Phone(
    Math.random()>0.5 ? 'IPhone' : 'Samsung',
    `Series ${Math.trunc(Math.random() * 20)}`,
    2015 + Math.trunc(Math.random() * 8),
    Math.random() > 0.5 ? 'white' : 'black',
    Math.random() > 0.5,
    3000 + Math.trunc(Math.random() * 7000)
  );
  phones.push(phone);
}

// console.log('phones :>> ', phones);

// 1 Отобрать телефоны дороже 8000

// function expensivePhones(item, index, arr){
//   return item.price > 8000;
// }

// console.log('телефоны дороже 8000 :>> ', phones.filter( item => item.price > 8000) );

// 2 Проверить, есть ли золотые телефоны
// console.log('in object phones any gold phone :>> ', phones.some(phone => phone.color === 'gold'));

// 3 Отобрать телефоны 2018 года выпуска
// console.log('phones 2018 year :>> ', phones.filter(phone => phone.makeYear === 2018));
// 4 Проверить, все ли телефоны позже 2013 года выпуска
// console.log('every phone older 2013 year :>> ', phones.every(phone => phone.makeYear >= 2013));
// 5 Вывести 'brand: model year' каждого телефона
// phones.forEach( phone => console.log(`${phone.brand}: ${phone.model} ${phone.makeYear}`));
// 6 Получить масив с телефонами, цена которых ниже на 5% от исходной

// const newPhones = phones.map(p => { 
//   return {
//     brand: p.brand,
//     model:p.model,
//     color:p.color,
//     isNfc:p.isNfc, 
//     makeYear: p.makeYear,
//     price: p.price * 0.95, 
//   } 
// })

// Нельзя, т.к. объект p - ссылочный тип
// const newPhones = phones.map(p => { 
//   const newP = p;
//   newP.price = newP.price * 0.95;
//   return newP;
// })

// 7 Вывести бренд+модель телефонов с nfc.

// phones.filter(phone => phone.isNfc).forEach(p => console.log(`${p.brand} ${p.model}`))

// 8 Узнать, все ли белые айфоны с нфc

// console.log(phones.filter(phone => phone.color === 'white' && phone.brand === 'IPhone'));
// const wps = phones.filter(phone => phone.color === 'white' && phone.brand === 'IPhone');
// console.log(wps.every(p=>p.isNfc));

// console.log(
//   phones
//     .filter(phone => phone.color === 'white' && phone.model === 'IPhone')
//     .every(phone => phone.isNfc)
//     );

// 9 Вывести данные о моделях apple 2016 года
// phones
//   .filter(phone => phone.makeYear === 2016 && phone.brand === 'IPhone')
//   .forEach(phone => console.log(phone));


// // forEach выполняет коллбек последовательно для всех элементов массива
// // filter => новый массив с элеметами, которые удовлетворяют условию в коллбеке
// // map => новый массив с элементами, которые возвращены их коллбека для каждого элемента исходного массива
// // every => true (выполняется для всех) / false 
// // some  => true (выполняется хотя бы для одного) / false 
