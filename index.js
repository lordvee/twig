const splitArray = require('./components/splitArray');

const testArray = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 2, '', 2]

const newArray = splitArray(testArray, 5);

console.log(newArray);
