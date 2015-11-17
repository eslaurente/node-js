// @File: app.js
// require module that use ES6 classes
'use strict';
var Greeter = require('./greeter');

var greeter1 = new Greeter();
greeter1.on('greet', function(arg) {
    console.log('Someone greeted: ' + arg);
});

greeter1.greet('Emerald');
