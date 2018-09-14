(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.umoji = factory());
}(this, (function () { 'use strict';

  var emojiToUnicode = function (emoji) {
    var backStr = "";
    if(emoji&&emoji.length>0){
      for(var char of emoji){
        var index =  char.codePointAt(0);
        if(index>65535){
          var h = '\\u'+(Math.floor((index - 0x10000) / 0x400) + 0xD800).toString(16);
          var c = '\\u'+((index - 0x10000) % 0x400 + 0xDC00).toString(16);
          backStr = backStr + h + c;
        }else{
          backStr = backStr + char;
        }
      }
      console.log(backStr);
    }
    return backStr
  };

  var toSurrogatePairs = function (index) {
    var h = '\\u'+(Math.floor((index - 0x10000) / 0x400) + 0xD800).toString(16);
    var c = '\\u'+((index - 0x10000) % 0x400 + 0xDC00).toString(16);
    console.log(h+c);
    return h+c
  };

  /*! https://mths.be/fromcodepoint v0.2.1 by @mathias */
  var fromcodepoint = function () {
    var stringFromCharCode = String.fromCharCode;
    var floor = Math.floor;
    var fromCodePoint = function(_) {
      var MAX_SIZE = 0x4000;
      var codeUnits = [];
      var highSurrogate;
      var lowSurrogate;
      var index = -1;
      var length = arguments.length;
      if (!length) {
        return '';
      }
      var result = '';
      while (++index < length) {
        var codePoint = Number(arguments[index]);
        if (
          !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
          codePoint < 0 || // not a valid Unicode code point
          codePoint > 0x10FFFF || // not a valid Unicode code point
          floor(codePoint) != codePoint // not an integer
        ) {
          throw RangeError('Invalid code point: ' + codePoint);
        }
        if (codePoint <= 0xFFFF) { // BMP code point
          codeUnits.push(codePoint);
        } else { // Astral code point; split in surrogate halves
          // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          codePoint -= 0x10000;
          highSurrogate = (codePoint >> 10) + 0xD800;
          lowSurrogate = (codePoint % 0x400) + 0xDC00;
          codeUnits.push(highSurrogate, lowSurrogate);
        }
        if (index + 1 == length || codeUnits.length > MAX_SIZE) {
          result += stringFromCharCode.apply(null, codeUnits);
          codeUnits.length = 0;
        }
      }
      return result;
    };
    String.prototype.fromCodePoint = fromCodePoint;
  };

  var umoji = {
    emojiToUnicode:emojiToUnicode,
    toSurrogatePairs:toSurrogatePairs,
    fromcodepoint:fromcodepoint
  };
  var umoji_1 = umoji;

  return umoji_1;

})));
