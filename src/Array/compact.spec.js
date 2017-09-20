const compact = require('./compact');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('compact函数测试', () => {
  it('compact test 1', () => {
    expect(compact([0, 1, false, 2, '', 3])).to.deep.equal([1, 2, 3]);
  });
});
