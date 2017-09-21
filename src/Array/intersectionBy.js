const intersection = require('./intersection');
const property = require('../Util/property');
const isString = require('../Lang/isString');
const isFunction = require('../Lang/isFunction');

/**
 * 这个方法类似 _.intersection，除了它接受一个 iteratee 调用每一个数组和值。iteratee 会传入一个参数：(value)
 * 
 * @param {array} array 需要检索的数组
 * @param {array[]} others 需要检索的数组
 * @param {fuction|string} iteratee 这个函数会处理每一个元素
 * @returns 
 */
function intersectionBy(...args) {
  let iteratee;
  let array;

  isFunction(args[args.length - 1]) || isString(args[args.length - 1])
    ?
    iteratee = args.pop()
    :
    iteratee = undefined;
  if (args.length === 1) { return args[0]; }
  if (iteratee === undefined) {
    return intersection(...args);
  }
  if (isString(iteratee)) {
    iteratee = property(iteratee);
  }
  if (isFunction(iteratee)) {
    array = args.shift();
    return args.reduce((items, curr) => {
      curr = curr.map(iteratee);
      return items.filter(v => curr.indexOf(iteratee(v)) > -1);
    }, array);
  }
  return undefined;
}

module.exports = intersectionBy;
