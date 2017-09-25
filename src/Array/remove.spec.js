const remove = require('./remove');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('remove 函数测试', () => {
  it('remove test 1', () => {
    const array = [1, 2, 3, 4];
    const evens = remove(array, value => value % 2 === 0);
    expect(array).to.deep.equal([1, 3]);
    expect(evens).to.deep.equal([2, 4]);
  });

  it('lodash test 1', () => {
    const array = [1, 2, 3, 4];
    const evens = _.remove(array, value => value % 2 === 0);
    expect(array).to.deep.equal([1, 3]);
    expect(evens).to.deep.equal([2, 4]);
  });
});
