const isFunction = require('../Lang/isFunction');
const isString = require('../Lang/isString');
const property = require('../Util/property');
const difference = require('./difference');

/**
 * 
 * 
 * @param {any} array 
 * @param {any} values 
 * @param {any} iteratee 
 * @returns 
 */

function differenceBy(array, values, iteratee) {
  if (iteratee === undefined) {
    return difference(array, values);
  }
  if (isString(iteratee)) {
    iteratee = property(iteratee);
  }
  if (isFunction(iteratee)) {
    values = values.map(iteratee);
    return array.filter(v => values.indexOf(iteratee(v)) === -1);
  }
  return undefined;
}

module.exports = differenceBy;
