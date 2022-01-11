'use strict'

/**
 * Takes an array and splits them in n arrays
 * @param  {[Array]} inputArray The input array
 * @param  {[integer]} size The number of arrays to create
 * @return {[Array]}      The new re-grouped array
 */

const splitArray = (inputArray, size) => {
  // we define the array that will be returned once resized
  let resizedArray = [];
  // make sure size is not negative

  if(size >= 0) {
    // round it up to make sure no remainder is left
    const iterations = Math.ceil(inputArray.length / size);

    // loop through the array there are elements in
    while(inputArray.length > 0){

      // we splice the input array and push it into the new array as a new element
      resizedArray.push(inputArray.splice(0, iterations));
    }

    return resizedArray;

  } else {
    // throw and error in case size is negative
    throw new Error('The size cannot be negative');
  }
}


module.exports = splitArray
