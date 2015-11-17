/*
*  @File: app.js
*  @Purpose: Demonstrate Buffer (node global) object
* */
var buf = new Buffer('hello', 'utf8');

console.log('--NEW BUFFER (content)--');
console.log(buf.toString());
console.log('--NEW BUFFER (raw)--');
console.log(buf);
console.log('--BUFFER TO JSON--');
console.log(buf.toJSON());
console.log('ITERATING THROUGH BUFFER ARRAY..');
buf.forEach(function (item, index) {
    if (index === 2) {
        console.log(`This is the third item: ${item}`);
    }
    else {
        console.log(item);
    }
});