const reverse = require('./reverse');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('reverse 函数测试', () => {
  it('reverse test 1', () => {
    const array = [1, 2, 3];
    expect(reverse(array)).to.deep.equal([3, 2, 1]);
    expect(array).to.deep.equal([3, 2, 1]);
  });

  it('lodash test 1', () => {
    const array = [1, 2, 3];
    expect(_.reverse(array)).to.deep.equal([3, 2, 1]);
    expect(array).to.deep.equal([3, 2, 1]);
  });
});
