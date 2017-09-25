const pullAt = require('./pullAt');

/**
 * 移除经过 predicate 处理为真值的元素，并返回被移除的元素。predicate 会传入3个参数：(value, index, array)
 * 
 * @param {array} array 需要调整的数组
 * @param {function} predicate 这个函数会处理每一个元素
 * @returns 
 */
function remove(array, predicate) {
  const indexes = [];
  array.forEach((value, i, arr) => {
    if (predicate(value ,i, arr)) {
      indexes.push(i);
    }
  });
  return pullAt(array, indexes);
}

module.exports = remove;
