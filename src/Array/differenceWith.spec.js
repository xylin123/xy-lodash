const differenceWith = require('./differenceWith');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('differenceWith 函数测试', () => {
  it('differenceWith test 1', () => {
    const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
    expect(differenceWith(objects, [{ x: 1, y: 2 }], _.isEqual)).to.deep.equal([{ x: 2, y: 1 }]);
  });

  it('lodash test 1', () => {
    const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
    expect(_.differenceWith(objects, [{ x: 1, y: 2 }], _.isEqual)).to.deep.equal([{ x: 2, y: 1 }]);
  });
});
