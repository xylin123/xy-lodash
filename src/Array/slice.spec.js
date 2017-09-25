const slice = require('./slice');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('slice 函数测试', () => {
  it('slice test 1', () => {
    const array = [1, 2, 3];
    expect(slice(array, 1, 2)).to.deep.equal([2]);
    expect(array).to.deep.equal([1, 2, 3]);
  });

  it('lodash test 1', () => {
    const array = [1, 2, 3];
    expect(_.slice(array, 1, 2)).to.deep.equal([2]);
    expect(array).to.deep.equal([1, 2, 3]);
  });
});
