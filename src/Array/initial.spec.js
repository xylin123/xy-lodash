const initial = require('./initial');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('initial 函数测试', () => {
  it('initial test 1', () => {
    const array = [1, 2, 3];
    expect(initial(array)).to.deep.equal([1, 2]);
    expect(array).to.deep.equal([1, 2, 3]);
  });

  it('lodash test 1', () => {
    const array = [1, 2, 3];
    expect(_.initial(array)).to.deep.equal([1, 2]);
    expect(array).to.deep.equal([1, 2, 3]);
  });
});
