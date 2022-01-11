How to run

to run the code, just type

$ node index.js

___________________________________________
Code details

Index.js represents a piece of mock up code. The library itself is actually in components/splitArray.js
There is a basic test included that can be run with mocha. To run the tests, please install dev dependencies:

npm install

npm run tests

___________________________________________
How does the code work

The library takes 2 inputs: inputArray and size and returns an array of elements equal to the size value containing each of the input elements.

The code works in 2 main parts:
	- work out how the new array number of elements should contain by rounding up to the next integer
	- take chunks of that size of the original array and store them in the new array until the old array is empty

___________________________________________
Testing

Testing checks that the new array size corresponds to the requested size number and that the size number is not negative