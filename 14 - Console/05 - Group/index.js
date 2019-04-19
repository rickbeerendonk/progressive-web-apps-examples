/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

console.group('Group A');

console.log('1st');

console.group();

console.log('2nd');
console.log('3rd');

console.groupEnd();

console.log('4th');

console.groupEnd();

console.log('5th');
