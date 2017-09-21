const intersectionBy = require('./intersectionBy');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('intersectionBy 函数测试', () => {
  it('intersectionBy test 1', () => {
    expect(intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor)).to.deep.equal([2.1]);
    expect(intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x')).to.deep.equal([{ x: 1 }]);
  });

  it('lodash test 1', () => {
    expect(_.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor)).to.deep.equal([2.1]);
    expect(_.intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x')).to.deep.equal([{ x: 1 }]);
  });
});
