const dropRight = require('./dropRight');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('dropRight 函数测试', () => {
  it('dropRight test 1', () => {
    expect(dropRight([1, 2, 3])).to.deep.equal([1, 2]);
    expect(dropRight([1, 2, 3], 2)).to.deep.equal([1]);
    expect(dropRight([1, 2, 3], 5)).to.deep.equal([]);
    expect(dropRight([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
  });

  it('lodash test 1', () => {
    expect(_.dropRight([1, 2, 3])).to.deep.equal([1, 2]);
    expect(_.dropRight([1, 2, 3], 2)).to.deep.equal([1]);
    expect(_.dropRight([1, 2, 3], 5)).to.deep.equal([]);
    expect(_.dropRight([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
  });
});
