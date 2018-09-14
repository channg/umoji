var emojiToUnicode  = require('./src/emojiToUnicode')
var toSurrogatePairs  = require('./src/toSurrogatePairs')
var fromcodepoint  = require('./src/fromcodepoint')
var umoji = {
  emojiToUnicode:emojiToUnicode,
  toSurrogatePairs:toSurrogatePairs,
  fromcodepoint:fromcodepoint
}
module.exports = umoji
