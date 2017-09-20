const differenceBy = require('./differenceBy');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('differenceBy 函数测试', () => {
  it('differenceBy test 1', () => {
    expect(differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor)).to.deep.equal([3.1, 1.3]);
  });

  it('differenceBy test 1', () => {
    expect(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x')).to.deep.equal([{ x: 2 }]);
  });
});
