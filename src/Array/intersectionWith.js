const intersection = require('./intersection');
const isFunction = require('../Lang/isFunction');

/**
 * 这个方法类似 _.intersection，除了它接受一个 comparator 调用每一个数组和值。iteratee 会传入2个参数：((arrVal, othVal)
 * 
 * @param {array} array 需要检索的数组
 * @param {array[]} others 需要检索的数组
 * @param {fuction|string} iteratee 这个函数会处理每一个元素
 * @returns 
 */
function intersectionWith(...args) {
  let comparator;
  let array;

  isFunction(args[args.length - 1]) ? comparator = args.pop() : comparator = undefined;
  if (args.length === 1) { return args[0]; }
  if (comparator === undefined) {
    return intersection(...args);
  }
  if (isFunction(comparator)) {
    array = args.shift();
    return args.reduce((items, curr) =>
      items.filter((v) => {
        let isSame = false;
        curr.forEach((a) => {
          if (isSame) { return; }
          isSame = comparator(v, a);
        });
        return isSame;
      }), array);
  }
  return undefined;
}

module.exports = intersectionWith;
