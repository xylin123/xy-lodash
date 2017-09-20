const drop = require('./drop');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('drop 函数测试', () => {
  it('drop test 1', () => {
    expect(drop([1, 2, 3])).to.deep.equal([2, 3]);
    expect(drop([1, 2, 3], 2)).to.deep.equal([3]);
    expect(drop([1, 2, 3], 5)).to.deep.equal([]);
    expect(drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
  });

  it('lodash test 1', () => {
    expect(_.drop([1, 2, 3])).to.deep.equal([2, 3]);
    expect(_.drop([1, 2, 3], 2)).to.deep.equal([3]);
    expect(_.drop([1, 2, 3], 5)).to.deep.equal([]);
    expect(_.drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
  });
});
