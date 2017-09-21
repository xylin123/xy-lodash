/**
 * 创建一个包含所有使用 SameValueZero 进行等值比较后筛选的唯一值数组。
 * 
 * @param {array} array 需要处理的数组队列
 * @param {array[]} others 需要处理的数组队列
 * @returns 
 */
function intersection(array, ...others) {
  if (others.length === 0) { return array; }
  return others.reduce((items, curr) => items.filter(v => curr.indexOf(v) > -1), array);
}

module.exports = intersection;
