var emojiToUnicode  = require('../src/emojiToUnicode')
var toSurrogatePairs  = require('../src/toSurrogatePairs')
var fromcodepoint  = require('../src/fromcodepoint')
var umoji  = require('../dist/umoji.umd')
fromcodepoint()
emojiToUnicode('😀😀😀😀😀sdksk');
toSurrogatePairs(0x1F601)
console.log(String.fromCodePoint(128513))
console.log(umoji)
umoji.emojiToUnicode('😀😀😀😀😀sdksk');
umoji.toSurrogatePairs(0x1F601)