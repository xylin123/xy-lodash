const last = require('./last');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('last 函数测试', () => {
  it('last test 1', () => {
    expect(last(['a', 'b', 'c'])).to.be.equal('c');
  });

  it('lodash test 1', () => {
    expect(_.last(['a', 'b', 'c'])).to.be.equal('c');
  });
});
