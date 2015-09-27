var test = require('tape')
var status = require('./')

test('simple test', function (assert) {
  assert.plan(3)
  assert.equal(status('Live'), 16)
  assert.equal(status('live'), 16)
  assert.equal(status(16), 'Live')
})
