'use strict'; //JS strict mode

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    }
}

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(`John prototype: ${Object.getPrototypeOf(john).constructor.name}`);
console.log(`Jane prototype: ${Object.getPrototypeOf(jane).constructor.name}`);
console.log(`John proto === Jane proto: ${john.__proto__ === jane.__proto__}`);