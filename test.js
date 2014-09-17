var number = require('./')
require('tape').test(function(t) {
	t.equal(number(3), 3)
	t.equal(number(0), 0)
	t.equal(number(3, 4), 3)
	t.ok(isNaN(number(NaN, 4))) //NaN !== NaN ... ?
	t.equal(number(Infinity, 4), Infinity)
	t.equal(number({}, 4), 4)
	t.equal(number('', 4), 4)
	t.equal(number('f', 4), 4)
	t.equal(number(null, 4), 4)
	t.equal(number(null, 'ff'), 0)
	t.equal(number('ff', 'ff'), 0)
	t.equal(number(null, 0), 0)
	t.equal(number(null), 0)
	t.equal(number(undefined, 4), 4)

	t.end()
})