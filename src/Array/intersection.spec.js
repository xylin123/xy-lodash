const intersection = require('./intersection');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('intersection 函数测试', () => {
  it('intersection test 1', () => {
    expect(intersection([2, 1], [4, 2], [1, 2])).to.deep.equal([2]);
    expect(intersection([2, 1])).to.deep.equal([2, 1]);
  });

  it('lodash test 1', () => {
    expect(_.intersection([2, 1], [4, 2], [1, 2])).to.deep.equal([2]);
    expect(_.intersection([2, 1])).to.deep.equal([2, 1]);
  });
});
