const fromPairs = require('./fromPairs');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('fromPairs 函数测试', () => {
  it('fromPairs test 1', () => {
    expect(fromPairs([['fred', 30], ['barney', 40]])).to.deep.equal({ fred: 30, barney: 40 });
  });

  it('lodash test 1', () => {
    expect(_.fromPairs([['fred', 30], ['barney', 40]])).to.deep.equal({ fred: 30, barney: 40 });
  });
});
