# as-number

[![frozen](http://badges.github.io/stability-badges/dist/frozen.svg)](http://github.com/badges/stability-badges)

Saving keystrokes, avoiding typos.

If the given value is a `typeof === "number"`, it returns the value unchanged. Otherwise, it will use the default argument, if specified as a number, or 0. 

```js
var number = require('as-number')

function Foo(opt) {
	opt = opt||{}

	opt.myArg = number(opt.myArg)
	opt.someArgument = number(opt.someArgument, 25)
	opt.yetAnotherArgument = number(opt.yetAnotherArgument, 15)
}
```

## Usage

[![NPM](https://nodei.co/npm/as-number.png)](https://nodei.co/npm/as-number/)

#### `number(value[, default])`

If `value` is `typeof === 'number'`, then it simply returns `value` unchanged. Otherwise, it will return `default` if it is also a number, or zero. 

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/as-number/blob/master/LICENSE.md) for details.
