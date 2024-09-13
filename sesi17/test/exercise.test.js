const {compareNumber} = require('../exercise');

QUnit.module('exercise');

QUnit.test('compareNumber', assert => {
  assert.equal(compareNumber(1, 2), true);
  assert.equal(compareNumber(2, 1), false);
  assert.equal(compareNumber(2, 2), -1);
});
