const pullAll = require('./pullAll');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('pullAll 函数测试', () => {
  it('pullAll test 1', () => {
    const array = [1, 2, 3, 1, 2, 3];
    expect(pullAll(array, [2, 3])).to.deep.equal([1, 1]);
  });

  it('lodash test 1', () => {
    const array = [1, 2, 3, 1, 2, 3];
    expect(_.pullAll(array, [2, 3])).to.deep.equal([1, 1]);
  });
});
