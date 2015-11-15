var EventEmitter = require('events');
var util = require('util');

function Greeter() {
	this.greeting = 'Hello world!';
}


util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function() {
	console.log(this.greeting);
	//this.emit('greet');
};

var greeter1 = new Greeter();
greeter1.on('greet', function() {
    console.log('Someone greeted!');
});

greeter1.greet();
greeter1.emit('greet');

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

