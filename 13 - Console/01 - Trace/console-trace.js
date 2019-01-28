/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

function bar() {
  console.trace('<Custom message, followed by stack trace>');
}

function foo() {
  bar();
}

foo();
