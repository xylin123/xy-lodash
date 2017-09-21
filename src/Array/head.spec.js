const head = require('./head');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('head 函数测试', () => {
  it('head test 1', () => {
    expect(head([1, 2, 3])).to.be.equal(1);
    expect(head([])).to.be.undefined;
  });

  it('lodash test 1', () => {
    expect(_.head([1, 2, 3])).to.be.equal(1);
    expect(_.head([])).to.be.undefined;
  });
});
