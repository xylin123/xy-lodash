const join = require('./join');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('join 函数测试', () => {
  it('join test 1', () => {
    expect(join(['a', 'b', 'c'], '~')).to.be.equal('a~b~c');
  });

  it('lodash test 1', () => {
    expect(_.join(['a', 'b', 'c'], '~')).to.be.equal('a~b~c');
  });
});
