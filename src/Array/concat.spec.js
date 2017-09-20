const concat = require('./concat');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('concat函数测试', () => {
  it('concat test 1', () => {
    const array = [1];
    expect(concat(array, 2, [3], [[4]])).to.deep.equal([1, 2, 3, [4]]);
    expect(array).to.deep.equal([1]);
  });
});
