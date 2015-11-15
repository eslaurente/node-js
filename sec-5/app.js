var arr = [];

arr.push(function() {
	console.log('Hello world 1');
})

arr.push(function() {
	console.log('Hello world 2');
})

arr.push(function() {
	console.log('Hello world 3!');
})

arr.forEach(function(item) {
	console.log(item);
	item();
})