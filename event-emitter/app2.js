var util = require('util');

function Person() {
    this.firstname = 'Emerald';
    this.lastname = 'Laurente';
}

Person.prototype.greet = function() {
    console.log(`Hello ${ this.firstname } ${ this.lastname }`);
};

function Policeman() {
    Person.call(this); //call() replaces the 'this' with the one
    //created by 'new' adds the other properties created by Person
    this.badgenumber = '1234';
}

// Connect Person's prototype with the Policeman object
util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();

//OUTPUT:
//Hello Emerald Laurente