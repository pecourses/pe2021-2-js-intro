'use strict';

const user = {
  name: 'Test',
  age: 27,
};

// массивы, объекты, строки, number, true/false, null

const serialisedUser = JSON.stringify(user);
/************* SEND ******************* */
const deserialisedUser = JSON.parse(serialisedUser);
