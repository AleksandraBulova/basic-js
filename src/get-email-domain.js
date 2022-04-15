const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */


 function getEmailDomain( email ) {
  const arrEmail = email.split('')
  const indexSymbol = arrEmail.findIndex(el => el === '@')
  const modifyArrEmail = arrEmail.slice(indexSymbol + 1, arrEmail.length)
  if(modifyArrEmail.find(el => el === '@') === '@'){
    const index = modifyArrEmail.findIndex(el => el === '@')
    const modifyArr = modifyArrEmail.slice(index + 1, modifyArrEmail.length)

    return modifyArr.join('')
  }

  return modifyArrEmail.join('')
}

module.exports = {
  getEmailDomain
};
