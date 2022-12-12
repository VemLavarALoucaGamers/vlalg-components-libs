import debug from 'debug';
const log = debug('app:log');



/*
https://www.freecodecamp.org/news/javascript-es-modules-and-module-bundlers/
How to Import a Default Export into an ES Module
*/



// Enable the logger.
if (process.NODE_ENV !== 'production') {
  // Enable the logger.
  debug.enable('*');
  log('Logging is enabled!');
} else {
  debug.disable();
}

console.log('module 1');

export const name = 'Your Club 1';

export function multiply (x, y) {
  return x * y;
}

export const caltest = (x, y) => {
  return x * y;
};

export function hello() {
  console.log('Ola mundo - module 1');
}
