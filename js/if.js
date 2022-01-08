// Условная конструкция и условные операции

/*
if (<condition>) {
  <operators_true>
} else {
  <operators_false>
}

*/

const isAccsessed = false;

if (isAccsessed) {
  console.log("You had permission) Have fun)");
} else {
  console.log("Accsess denied. Try again later.")
}

//условные операции
const age = 18;
console.log('age < 18', age < 18);
console.log('age > 18', age > 18);
console.log('age <= 18', age <= 18);
console.log('age >= 18', age >= 18);

// Нестрогое сравнение (сначала приводит типы, потом сравнивает)
console.log('age == 18', age == '18'); // ПЛОХО!!!
// Строгое сравнение (если типы разные, то сразу false)
console.log('age === 18', age === '18');

// Нестрогое неравенство (сначала приводит типы, потом сравнивает)
console.log('age != 18', age != '18'); // ПЛОХО!!!
// Строгое сравнение (если типы разные, то сразу false)
console.log('age !== 18', age !== '18');