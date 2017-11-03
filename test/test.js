var emojiToUnicode  = require('../src/emojiToUnicode')
var toSurrogatePairs  = require('../src/toSurrogatePairs')
var fromcodepoint  = require('../src/fromcodepoint')
var umoji  = require('../index')
fromcodepoint()
emojiToUnicode('😀😀😀😀😀sdksk');
toSurrogatePairs(0x1F601)
console.log(String.fromCodePoint(128513))
console.log(umoji)