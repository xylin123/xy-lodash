const chunk = require('./chunk');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('chunk函数的测试', () => {
  it('chunk test 1', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([['a', 'b'], ['c', 'd']]);
  });

  it('chunk test 2', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).to.deep.equal([['a', 'b', 'c'], ['d']]);
  });
});
