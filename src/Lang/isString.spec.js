const isString = require('./isString');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('isString函数测试', () => {
  it('isString test 1', () => {
    expect(isString('abc')).to.deep.true;
  });

  it('isString test 2', () => {
    expect(isString(1)).to.be.false;
  });
});
