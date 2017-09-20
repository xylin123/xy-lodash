/**
 * 指定 值 填充数组，从 start 到 end 的位置，但不包括 end 本身的位置。
 * 
 * @param {array} array 需要填充的数组
 * @param {any} value 填充的值
 * @param {number} [start=0] 开始位置
 * @param {any} [end=array.length] 结束位置
 * @returns {array} 返回数组
 */
function fill(array, value, start = 0, end = array.length) {
  for (let i = start; i < end; i += 1) {
    array[i] = value;
  }
  return array;
}

module.exports = fill;
