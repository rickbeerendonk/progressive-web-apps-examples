/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

// Object
console.table({ a: 1, b: 2 });
console.table({
  html: { version: '5.3', specifications: 'http://w3c.github.io/html/' },
  css: {
    version: 2018,
    specifications: 'https://www.w3.org/Style/CSS/specs.en.html'
  },
  javascript: {
    version: 2018,
    specifications: 'https://tc39.github.io/ecma262/'
  }
});

// Array
console.table([111, 222, 333]);
console.table([
  [111, 222, 333],
  ['AAA', 'BBB', 'CCC']
]);
