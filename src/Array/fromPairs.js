/**
 * 反向版 _.toPairs，这个方法返回一个由键值对构成的对象。
 * 
 * @param {array} pairs 键值对
 * @returns {object} 返回一个新对象
 */
function fromPairs(pairs) {
  return pairs.reduce((result, item) => {
    result[item[0]] = item[1];
    return result;
  }, {});
}

module.exports = fromPairs;
