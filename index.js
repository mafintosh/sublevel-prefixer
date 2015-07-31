module.exports = function (sep) {
  if (!sep) sep = '!'
  var sepBuffer = toBuffer(sep)

  return function (prefix, key) {
    if (typeof key === 'string') return sep + prefix + sep + key
    if (Buffer.isBuffer(key)) return Buffer.concat([sepBuffer, toBuffer(prefix), sepBuffer, key])
    throw new Error('key should be a string or a buffer')
  }
}

function toBuffer (b) {
  return Buffer.isBuffer(b) ? b : new Buffer(b)
}
