var lib = require('./library');

var rect = lib.rectangle();
rect.create(2,4);
console.log(rect.area());
console.log(rect.perimeter());