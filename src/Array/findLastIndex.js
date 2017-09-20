/**
 * 
 * 
 * @param {array} array 需要搜索的数组
 * @param {function} predicate 这个函数会在每一次迭代调用
 * @returns 返回符合元素的 index，否则返回 -1。
 */
function findLastIndex(array, predicate) {
  array = array.slice(0);

  let found = false;
  let index = -1;

  do {
    if (predicate(array.pop())) {
      found = true;
      index = array.length;
    }
  } while (!found);
  return index;
}

module.exports = findLastIndex;
