const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater( str, options ) {
  let stR = String(str);
  let repeatTimes = Number(options.repeatTimes);
  let separator = String(options.separator);
  let addition = String(options.addition);
  let additionRepeatTimes = Number(options.additionRepeatTimes);
  let additionSeparator = String(options.additionSeparator);
  
  if (options.addition === undefined && options.separator === undefined){
    separator = '+';
    return (stR + separator).repeat(repeatTimes).slice(0, - separator.length);
  }else if (options.separator === undefined && options.additionRepeatTimes === undefined) {
    separator = '+';
    return (stR + addition + separator).repeat(repeatTimes).slice(0, - separator.length);
  } else if(options.separator === undefined && options.additionSeparator === undefined) {
    separator = '+';
    additionSeparator = '|';
    return (stR + ((addition + additionSeparator).repeat(additionRepeatTimes)).slice(0, - additionSeparator.length) + separator).repeat(repeatTimes).slice(0, - separator.length);
  } else if (options.separator === undefined) {
    separator = '+';
    return (stR + ((addition + additionSeparator).repeat(additionRepeatTimes)).slice(0, - additionSeparator.length) + separator).repeat(repeatTimes).slice(0, - separator.length);
  } else if (options.additionSeparator === undefined) {
    additionSeparator = '|';
    return (stR + ((addition + additionSeparator).repeat(additionRepeatTimes)).slice(0, - additionSeparator.length) + separator).repeat(repeatTimes).slice(0, - separator.length);
  } else if(options.addition === undefined) {
    return (stR + separator).repeat(repeatTimes).slice(0, - separator.length);
  } else if(options.repeatTimes === undefined) {
    return stR + addition;
  }
  return (stR + ((addition + additionSeparator).repeat(additionRepeatTimes)).slice(0, - additionSeparator.length) + separator).repeat(repeatTimes).slice(0, - separator.length);
}

module.exports = {
  repeater
};
