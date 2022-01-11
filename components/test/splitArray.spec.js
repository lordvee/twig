// test/splitArray.spec.js
//import { strict as assert } from 'assert';
const assert = require('assert')

const splitArray = require('../splitArray');
const testArray = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 2, '', -1];
describe('splitArray function', () =>{
  it('Should not accept size smaller than zero', ()=> {
    const size = -1;

    assert.throws( ()=> {
      splitArray(testArray, size);
    },
    //'Error: The size cannot be negative', 'Error: The size cannot be negative'
    {
      name: 'Error',
      message: 'The size cannot be negative',
      // Only properties on the validation object will be tested for.
      // Using nested objects requires all properties to be present. Otherwise
      // the validation is going to fail.
    })
  });
  size = 4;
  it('Should create the same array size as specified in input size', ()=> {
    const size = Math.floor(Math.random() * testArray.length);
    assert.ok( () => {
      (splitArray(testArray, size)).length === size;
    })
  })
})
