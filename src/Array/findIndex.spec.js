const findIndex = require('./findIndex');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('findIndex 函数测试', () => {
  it('findIndex test 1', () => {
    const users = [
      { user: 'barney', active: false },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ];
    expect(findIndex(users, o => o.user === 'barney')).to.equal(0);
    expect(users).to.deep.equal([
      { user: 'barney', active: false },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ]);
  });

  it('lodash test 1', () => {
    const users = [
      { user: 'barney', active: false },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ];
    expect(_.findIndex(users, o => o.user === 'barney')).to.equal(0);
    expect(users).to.deep.equal([
      { user: 'barney', active: false },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ]);
  });
});
