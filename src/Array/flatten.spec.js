const flatten = require('./flatten');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('flatten 函数测试', () => {
  it('flatten test 1', () => {
    expect(flatten([1, [2, [3, [4]], 5]])).to.deep.equal([1, 2, [3, [4]], 5]);
  });

  it('lodash test 1', () => {
    expect(_.flatten([1, [2, [3, [4]], 5]])).to.deep.equal([1, 2, [3, [4]], 5]);
  });
});
