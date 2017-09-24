const pullAt = require('./pullAt');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('pullAt 函数测试', () => {
  it('pullAt test 1', () => {
    const array = [5, 10, 15, 20];
    const evens = pullAt(array, 1, 3);
    expect(array).to.deep.equal([5, 15]);
    expect(evens).to.deep.equal([10, 20]);
  });

  it('lodash test 1', () => {
    const array = [5, 10, 15, 20];
    const evens = _.pullAt(array, 1, 3);
    expect(array).to.deep.equal([5, 15]);
    expect(evens).to.deep.equal([10, 20]);
  });
});
