var tape = require('tape')
var prefixer = require('./')

tape('prefixes key', function (t) {
  var prefix = prefixer('!')

  t.same(prefix('hello', 'world'), '!hello!world')
  t.same(prefix('hello', new Buffer('world')), new Buffer('!hello!world'))
  t.same(prefix(new Buffer('hello'), new Buffer('world')), new Buffer('!hello!world'))
  t.end()
})
