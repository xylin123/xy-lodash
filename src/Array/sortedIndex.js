
/**
 * 使用二进制的方式检索来决定 value 应该插入在数组中位置。它的 index 应该尽可能的小以保证数组的排序。
 * 
 * @param {number[]} array 需要检索的已排序数组
 * @param {number} value 要评估位置的值
 * @returns 返回 value 应该在数组中插入的 index。
 */
function sortedIndex(array, value) {
  array = array.slice();
  array.push(value);
  return array.sort((a, b) => a - b).indexOf(value);
}

module.exports = sortedIndex;
