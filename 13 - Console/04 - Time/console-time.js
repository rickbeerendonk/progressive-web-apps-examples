/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

// Start timers
console.time('a');
console.time('b');

setTimeout(() => {
  // Log current timer value
  console.timeLog('a');
}, 1000);

setTimeout(() => {
  // Log and End timers
  console.timeEnd('b');
  console.timeEnd('a');
}, 2000);
