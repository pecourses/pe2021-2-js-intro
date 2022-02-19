'use strict';

const port = 3000;

// false = '', null, undefined, 0, false, NaN
const usePort = port || 5000;

// nullish - null, undefined
const usePort = port ?? 5000;

// && -
const isLoading = true;
!isLoading && renderList();
