/**
 * Created by laurente on 11/16/15.
 */
var buffer = new ArrayBuffer(8); //8 x 8 bits = 64 bits
var view = new Int32Array(buffer); //64 / 32 = 2 numbers


//The buffer will only see 2 numbers
view[0] = 5;
view[1] = 1323325;
view[2] = 342; // will NOT be in the view
console.log(view);