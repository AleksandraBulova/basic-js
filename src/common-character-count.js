const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

 function getCommonCharacterCount( s1, s2 ) {
  let s1Array = s1.split('');
  let s2Array = s2.split('');
  let res = 0;

  if(s1Array.length === 0){
    return 0;
  }

  checkForI: for(let i = 0; i < s1Array.length; i++){
    for(let j = 0; j < s2Array.length; j++){
      if (s1Array[i] === s2Array[j]){
        res++;
        s2Array = s2Array.filter((el,index) => index !== j)
        continue checkForI;
      }
    }
  }
  
  return res;
}

module.exports = {
  getCommonCharacterCount
};
