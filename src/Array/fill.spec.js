const fill = require('./fill');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('fill 函数测试', () => {
  it('fill test 1', () => {
    const array = [1, 2, 3];
    expect(fill(array, 'a')).to.deep.equal(['a', 'a', 'a']);
    expect(fill(Array(3), 2)).to.deep.equal([2, 2, 2]);
    expect(fill([4, 6, 8, 10], '*', 1, 3)).to.deep.equal([4, '*', '*', 10]);
  });

  it('lodash test 1', () => {
    const array = [1, 2, 3];
    expect(_.fill(array, 'a')).to.deep.equal(['a', 'a', 'a']);
    expect(_.fill(Array(3), 2)).to.deep.equal([2, 2, 2]);
    expect(_.fill([4, 6, 8, 10], '*', 1, 3)).to.deep.equal([4, '*', '*', 10]);
  });
});
