/**
 * 
 * 
 * @param {array} array 
 * @param {number[]} indexes 
 * @returns 
 */
function pullAt(array, ...indexes) {
  const evens = [];
  indexes.forEach((v, i) => {
    evens.push(...array.splice(v - i, 1));
  });
  return evens;
}

module.exports = pullAt;
