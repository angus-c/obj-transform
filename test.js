import transform from './index';
import { assert } from 'chai';

const baseObj = {a: 3, b: 9, c: 12};
let mappedObj;

describe('predicate function', () => {
  it('uses the value argument', () => {
    const incrementor = transform(value => value + 1);
    assert.deepEqual(incrementor(baseObj), { a: 4, b: 10, c: 13 });
    assert.deepEqual(incrementor(incrementor(baseObj)), { a: 5, b: 11, c: 14 });
  });
  it('uses the key argument', () => {
    const keyEcho = transform((_, key) => key);
    assert.deepEqual(keyEcho(baseObj), { a: 'a', b: 'b', c: 'c' });
  });
  it('uses the baseObj argument', () => {
    const objAsValue = transform((_, __, baseObj) => baseObj);
    assert.deepEqual(objAsValue(baseObj), { a: baseObj, b: baseObj, c: baseObj });
  });
});

describe('context argument', () => {
  it('is used as the `this` value', () => {
    const mixin = transform(function(value, key) {return this[key] || value});
    assert.deepEqual(mixin(baseObj, {a: 1, c: 3}), { a: 1, b: 9, c: 3 });
  });
});
