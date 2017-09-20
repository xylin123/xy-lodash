/**
 * 从右边开始裁剪数组中的 N 个数组，返回剩余的部分
 * 
 * @param {array} array 需要处理的数组
 * @param {number} [n=1] 裁剪的个数
 * @returns 返回数组的剩余的部分。
 */
function dropRight(array, n = 1) {
  let i = 0;
  while (i < n) {
    array.pop();
    i += 1;
  }
  return array;
}

module.exports = dropRight;
