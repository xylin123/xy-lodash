/**
 * 创建一个裁剪后的数组，从 start 到 end 的位置，但不包括 end 本身的位置
 * 
 * @param {array} array 需要裁剪的数组
 * @param {number} [start=0] 开始位置
 * @param {number} [end=array.length] 结束位置
 * @returns 返回裁剪后的数组
 */
function slice(array, start = 0, end = array.length) {
  return array.slice(start, end);
}

module.exports = slice;
