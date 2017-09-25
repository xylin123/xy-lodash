const sortedIndex = require('./sortedIndex');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('sortedIndex 函数测试', () => {
  it('sortedIndex test 1', () => {
    expect(sortedIndex([30, 50], 40)).to.be.equal(1);
    expect(sortedIndex([4, 5], 4)).to.be.equal(0);
  });

  it('lodash test 1', () => {
    expect(_.sortedIndex([30, 50], 40)).to.be.equal(1);
    expect(_.sortedIndex([4, 5], 4)).to.be.equal(0);
  });
});
