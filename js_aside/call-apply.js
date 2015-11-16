var obj = {
    name: 'John Doe',
    greet: function (arg1, arg2) {
        arg1 = arg1 || 'test1'; //default param
        arg2 = arg2 || 'test2'; //default param
        console.log(`Hello ${ this.name }`);
        console.log(`arg1: ${ arg1 }, arg2: ${ arg2 }\n`);
    }
};

obj.greet(); // invoke with default param

// invoke and override 'this' reference, args comma-separated
obj.greet.call( { name: 'Jane Doe'}, 'call1', 'call2');

// invoke and override 'this' reference, args in one array
obj.greet.apply( { name: 'Emerald Laurente'}, ['call3', 'call4']);
