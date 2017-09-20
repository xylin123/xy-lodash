const findLastIndex = require('./findLastIndex');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('findLastIndex 函数测试', () => {
  it('findLastIndex test 1', () => {
    const users = [
      { user: 'pebbles', active: false },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ];
    expect(findLastIndex(users, o => o.user === 'pebbles')).to.equal(2);
    expect(users).to.deep.equal([
      { user: 'pebbles', active: false },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ]);
  });

  it('lodash test 1', () => {
    const users = [
      { user: 'pebbles', active: false },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ];
    expect(_.findLastIndex(users, o => o.user === 'pebbles')).to.equal(2);
    expect(users).to.deep.equal([
      { user: 'pebbles', active: false },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ]);
  });
});
