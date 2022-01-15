// Переменные, объявленные вне любого блока -- глобальные, видны всем блокам (Scope - Script)
// Переменные, объявленные внутри блока, т.е. в {} -- локальные , видны только внутри блока (Scope - Block)

const globalVar = 'global';


if (true) {
  const localVar1 = 'localVar1';

  if (true) {
    const localVar2 = 'localVar2';
    console.log(globalVar);
    console.log(localVar1);
    console.log(localVar2);
  }
}