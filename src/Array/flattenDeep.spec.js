const flattenDeep = require('./flattenDeep');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('flattenDeep 函数测试', () => {
  it('flattenDeep test 1', () => {
    expect(flattenDeep([1, [2, [3, [4]], 5]])).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('lodash test 1', () => {
    expect(_.flattenDeep([1, [2, [3, [4]], 5]])).to.deep.equal([1, 2, 3, 4, 5]);
  });
});
