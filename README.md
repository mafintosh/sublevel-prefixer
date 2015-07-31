# sublevel-prefixer

Prefix a key with a sublevel prefix

```
npm install sublevel-prefixer
```

[![build status](http://img.shields.io/travis/mafintosh/sublevel-prefixer.svg?style=flat)](http://travis-ci.org/mafintosh/sublevel-prefixer)

## Usage

``` js
var prefixer = require('sublevel-prefixer')
var prefix = prefixer('!') // use '!' as the separator

// using string keys
console.log(prefix('my-prefix', 'my-key')) // !my-prefix!my-key

// using binary keys
console.log(prefix('my-prefix', new Buffer('my-key'))) // returns above as a buffer
```

## License

MIT
