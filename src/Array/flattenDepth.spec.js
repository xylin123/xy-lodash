const flattenDepth = require('./flattenDepth');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('flattenDepth 函数测试', () => {
  it('flattenDepth test 1', () => {
    const array = [1, [2, [3, [4]], 5]];
    expect(flattenDepth(array, 1)).to.deep.equal([1, 2, [3, [4]], 5]);
    expect(flattenDepth(array, 2)).to.deep.equal([1, 2, 3, [4], 5]);
  });

  it('lodash test 1', () => {
    const array = [1, [2, [3, [4]], 5]];
    expect(_.flattenDepth(array, 1)).to.deep.equal([1, 2, [3, [4]], 5]);
    expect(_.flattenDepth(array, 2)).to.deep.equal([1, 2, 3, [4], 5]);
  });
});
