"use strict";

// primary script file
console.log('first');

var exampleFunction = function exampleFunction() {
  var fruits = ['apple', 'bananas'];
  fruits.forEach(function (fruit) {
    console.log(fruit);
  });
};
"use strict";

// single page script file
console.log('page');
exampleFunction();
"use strict";

// single module script file
console.log('module');