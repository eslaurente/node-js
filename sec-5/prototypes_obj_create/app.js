var EventEmitter = require('events');
var util = require('util');

function Greeter() {
	this.greeting = 'Hello, ';
}


util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function(arg) {
	console.log(this.greeting + arg + '!');
	this.emit('greet', arg);
};

var greeter1 = new Greeter();
greeter1.on('greet', function(arg) {
    console.log('Someone greeted: ' + arg);
});

greeter1.greet('Emerald');

// Below is demonstrating the inheritance
console.log('Testing prototypal inheritance...');

var person = {
	firstname: '',
	lastname: '',
	greet: function() {
		return this.firstname + ' ' + this.lastname;
	}
};

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());

