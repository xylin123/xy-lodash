const difference = require('./difference');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('difference函数测试', () => {
  it('difference test 1', () => {
    expect(difference([3, 2, 1], [4, 2])).to.deep.equal([3, 1]);
  });
});
