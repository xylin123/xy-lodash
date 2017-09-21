const indexOf = require('./indexOf');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('indexOf 函数测试', () => {
  it('indexOf test 1', () => {
    expect(indexOf([1, 2, 1, 2], 2)).to.be.equal(1);
    expect(indexOf([1, 2, 1, 2], 2, 2)).to.be.equal(3);
  });

  it('lodash test 1', () => {
    expect(_.indexOf([1, 2, 1, 2], 2)).to.be.equal(1);
    expect(_.indexOf([1, 2, 1, 2], 2, 2)).to.be.equal(3);
  });
});
