const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

 function deleteDigit( n ) {
  let nArray = String(n).split('');

  for (let i = 0; i < nArray.length; i++){
    if(nArray[0] < nArray[1] ){
     nArray.shift();
     return Number(nArray.join(''))
    }
  }

  let min = String(Math.min(...nArray))
  let arr = nArray.findIndex(el => el === min)
  let res = nArray.filter( (el, index) => index !== arr)

  return Number(res.join(''))
}

module.exports = {
  deleteDigit
};
