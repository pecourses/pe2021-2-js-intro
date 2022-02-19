'use strict';

const port = 3000;

// op1 || op2
// if (Boolean(op1) === true)  {op1 || op2 => op1}
// if (Boolean(op1) === false) {op1 || op2 => op2}

// false = '', null, undefined, 0, false, NaN
const usePort = port || 5000;

// op1 ?? op2
// if (op1 === null || op1 === undefined) {op1 ?? op2 => op2}
// else                                   {op1 ?? op2 => op1}

// nullish - null, undefined
const usePort = port ?? 5000;

// op1 && op2
// if (Boolean(op1) === true)  {op1 && op2 => op2}
// if (Boolean(op1) === false) {op1 && op2 => op1}

// const isLoading = true;
// !isLoading && renderList();
