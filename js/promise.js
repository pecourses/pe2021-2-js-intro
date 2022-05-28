'use strict';

fetch('https://randomuser.me/api')
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))

// 1 async всегда возвращает промис
// 2 await только внутри async функции 
// 3 await =>Promise.result
// 4 обработка ошибок с помощью try/catch

async function f() {
  try{  
    const response = await fetch('https://randomuser.me/api')
    const data = await response.json()
    return data
  } catch (err) {
    console.log('err', err)
  }
}

f().then(data => console.log('data', data))