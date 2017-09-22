/**
 * 这个方式类似 _.pull，除了它接受数组形式的一系列值。
 * 
 * @param {array} array 需要调整的数组
 * @param {array} values 要移除的值
 * @returns 
 */
function pullAll(array, values) {
  values.forEach(val => {
    let index = -1;
    do {
      index = array.indexOf(val, index + 1);
      if (index > -1) { 
        array.splice(index, 1);
      };
    } while(index > -1);
  });
  return array;
}

module.exports = pullAll;
