const isArray = require('./isArray');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('isArray函数测试', () => {
  it('isArray test 1', () => {
    expect(isArray([1, 2, 3])).to.deep.true;
  });

  it('isArray test 2', () => {
    expect(isArray({ 0: 1, 1: 1, 2: 1, length: 3 })).to.be.false;
  });

  it('isArray test 3', () => {
    expect(isArray('abc')).to.be.false;
  });
});
