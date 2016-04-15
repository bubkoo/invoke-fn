# invoke-fn

> A faster alternative to `Function#apply`.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/invoke-fn/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/invoke-fn/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/invoke-fn)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/invoke-fn/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/invoke-fn)



## Install

```
$ npm install --save invoke-fn 
```



## Usage

> For more use-cases see the [tests](https://github.com/bubkoo/invoke-fn/blob/master/test/spec/index.js)

```js

var invoke = require('invoke-fn');

// invoke(func, thisArg, args);

    var obj = {
      add: function () {
        var result = 0;
        for (var i = 0, length = arguments.length; i < length; i++) {
          result += arguments[i]
        }
        return result;
      }
    }
    
invoke(function (a, b, c, d) {
      return this.add(a, b, c, d);
}, obj, [1, 2, 3, 4]);

// => 10
```

## Related

- [invoke-fn](https://github.com/bubkoo/invoke-fn) - A faster alternative to `Function#apply`.
- [invoke-before](https://github.com/bubkoo/invoke-before) - Returns a function that will only be executed before being called N times.
- [invoke-after](https://github.com/bubkoo/invoke-after) - Returns a function that will only be executed after being called N times.
- [invoke-once](https://github.com/bubkoo/invoke-once) - Restrict the given function only be invoked once.
- [try-invoke](https://github.com/bubkoo/try-invoke) - Attempts to invoke the given function, returning either the result or the caught error object.
- [is-native](https://github.com/bubkoo/is-native) - Checks if the given value is a native function.
- [to-source-code](https://github.com/bubkoo/to-source-code.git) - Converts function to its source code.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/invoke-fn/issues/new).
