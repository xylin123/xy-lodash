/**
 * 这个方法类似 _.find。除了它返回最先通过 predicate 判断为真值的元素的 index ，而不是元素本身。
 * 
 * @param {array} array 需要搜索的数组
 * @param {function} predicate 这个函数会在每一次迭代调用
 * @returns 返回符合元素的 index，否则返回 -1。
 */
function findIndex(array, predicate) {
  // 浅克隆
  array = array.slice(0);

  const totalLen = array.length;
  let found = false;
  let index = -1;

  do {
    if (predicate(array.shift())) {
      found = true;
      index = totalLen - array.length - 1;
    }
  } while (!found);
  return index;
}

module.exports = findIndex;
