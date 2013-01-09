var assert = require('assert');

var hoge = 'foo';
var fuga = 'bar';
var piyo = hoge;
var falsy = '';

assert(falsy);

assert(fuga === piyo);

assert.ok(hoge === fuga);

var piyo = 3;
assert.ok(fuga === piyo);

var longString = 'very very loooooooooooooooooooooooooooooooooooooooooooooooooooong message';
var anotherLongString = 'yet another loooooooooooooooooooooooooooooooooooooooooooooooooooong message';
assert.ok(longString === anotherLongString);