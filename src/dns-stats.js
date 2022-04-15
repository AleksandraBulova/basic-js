const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */


 function getDNSStats( domains ) {
  if (domains.length === 0) {
    return {};
  }
  let domainsTransform = (domains.map(el => el.split('.').reverse()));
  let obj= {};
  let domainsTransformFlat = domainsTransform.flat(1);
  let object = domainsTransformFlat.reduce((stack, value) => {
    return stack[value] ? stack[value]++ : stack[value] = 1, stack;
  }, {})
  let arr = Object.values(object);
  obj['.' + domainsTransform[0][0]] = arr[0];
  for (let i = 0; i < domainsTransform.length; i++) {
    obj['.' + domainsTransform[i].join('.')] = arr[i + 1];
  }
  return obj;
}

module.exports = {
  getDNSStats
};
