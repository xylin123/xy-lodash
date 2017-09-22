const pull = require('./pull');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('pull 函数测试', () => {
  it('pull test 1', () => {
    const array = [1, 2, 3, 1, 2, 3];
    expect(pull(array, 2, 3)).to.deep.equal([1, 1]);
  });

  it('lodash test 1', () => {
    const array = [1, 2, 3, 1, 2, 3];
    expect(_.pull(array, 2, 3)).to.deep.equal([1, 1]);
  });
});
