const isFunction = require('./isFunction');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('isFunction函数测试', () => {
  it('isFunction test 1', () => {
    expect(isFunction(() => {})).to.be.true;
  });

  it('isFunction test 2', () => {
    expect(isFunction(/abc/)).to.be.false;
  });
});
