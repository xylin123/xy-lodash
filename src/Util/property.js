const isString = require('../Lang/isString');
const isArray = require('../Lang/isArray');
/**
 * 
 * 
 * @param {string|array} selector 
 * @returns 
 */
function property(selector) {
  let arr;
  if (isString(selector)) {
    arr = selector.split('.');
  }
  if (isArray(selector) && selector.length > 0) {
    arr = selector;
  }
  return (obj) => {
    if (!arr) return undefined;
    return arr.reduce((preV, currV) => {
      if (preV === undefined) return undefined;
      return preV[currV];
    }, obj);
  };
}

module.exports = property;
