module.exports = function (index) {
  var h = '\\u'+(Math.floor((index - 0x10000) / 0x400) + 0xD800).toString(16);
  var c = '\\u'+((index - 0x10000) % 0x400 + 0xDC00).toString(16)
  console.log(h+c)
  return h+c
}
