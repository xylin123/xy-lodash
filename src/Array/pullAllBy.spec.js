const pullAllBy = require('./pullAllBy');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('pullAllBy 函数测试', () => {
  it('pullAllBy test 1', () => {
    const array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
    expect(pullAllBy(array, [{ x: 1 }, { x: 3 }], 'x')).to.deep.equal([{ x: 2 }]);
    expect(array).to.deep.equal([{ x: 2 }]);
  });

  it('lodash test 1', () => {
    const array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
    expect(_.pullAllBy(array, [{ x: 1 }, { x: 3 }], 'x')).to.deep.equal([{ x: 2 }]);
    expect(array).to.deep.equal([{ x: 2 }]);
  });
});
