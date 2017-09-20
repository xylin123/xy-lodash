const property = require('./property');
const _ = require('lodash');
const expect = require('chai').expect;

const describe = global.describe;
const it = global.it;

describe('property 函数测试', () => {
  it('property test 1', () => {
    const obj = { a: { b: { c: 1 } } };
    expect(property('a.b.c')(obj)).to.equal(1);
    expect(property(['a', 'b', 'c'])(obj)).to.equal(1);
    expect(property([])(obj)).to.be.undefined;
  });

  it('lodash test 1', () => {
    const obj = { a: { b: { c: 1 } } };
    expect(_.property('a.b.c')(obj)).to.equal(1);
    expect(_.property(['a', 'b', 'c'])(obj)).to.equal(1);
    expect(_.property([])(obj)).to.be.undefined;
  });
});
