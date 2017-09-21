const intersectionWith = require('./intersectionWith');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('intersectionWith 函数测试', () => {
  it('intersectionWith test 1', () => {
    const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
    const others = [{ x: 1, y: 1 }, { x: 1, y: 2 }];
    expect(intersectionWith(objects, others, _.isEqual)).to.deep.equal([{ x: 1, y: 2 }]);
  });

  it('lodash test 1', () => {
    const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
    const others = [{ x: 1, y: 1 }, { x: 1, y: 2 }];
    expect(_.intersectionWith(objects, others, _.isEqual)).to.deep.equal([{ x: 1, y: 2 }]);
  });
});
