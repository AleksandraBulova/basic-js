const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine( str ) {
  let strTransform = str.split('');
  let arrGlobal = [];
  let arrMiddle=[];
  for(let i = 0; i < strTransform.length; i++){
    if(i === 0 || strTransform[i] === strTransform[i - 1]){
      arrMiddle.push(strTransform[i]);
      if(i === strTransform.length - 1){
        arrGlobal.push(arrMiddle);
      }
      console.log(arrMiddle, 'if')
    }else {
      arrGlobal.push(arrMiddle);
      arrMiddle=[];
      arrMiddle.push(strTransform[i]);
      if(i === strTransform.length - 1){
        arrGlobal.push(arrMiddle);
      }
      console.log(arrMiddle, 'else')
    }
  }
  let string = arrGlobal.map(el => `${el.length}` + `${el[0]}`).join('');
  let result = string.split('').filter(el => el !== '1').join('');
  console.log(strTransform, arrGlobal, string, result)
  return result
}

module.exports = {
  encodeLine
};
