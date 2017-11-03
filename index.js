var emojiToUnicode  = require('./src/emojiToUnicode')
var toSurrogatePairs  = require('./src/toSurrogatePairs')
var fromcodepoint  = require('./src/fromcodepoint')
var umeji = {
  emojiToUnicode:emojiToUnicode,
  toSurrogatePairs:toSurrogatePairs,
  fromcodepoint:fromcodepoint
}
exports.umoji = umeji