// @File: greeter.js
'use strict';
var EventEmitter = require('events');

module.exports = class Greeter extends EventEmitter {
    constructor() {
        super(); //as if calling 'super(this)'
        this.greeting = 'Hello,';
    }

    greet(arg) {
        console.log(`${this.greeting} ${arg}!`);
        this.emit('greet', arg);
    }
};