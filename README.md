## umoji
😀A lib convert emoji unicode to Surrogate pairs
> u can use with npm 
```
npm install umoji --save
```
#### method
* emojiToUnicode
> emoji to Surrogate pairs unicode
```js
emojiToUnicode('😀😀😀😀😀sdksk');// return '\ud83d\ude00\ud83d\ude00\ud83d\ude00\ud83d\ude00\ud83d\ude00sdks'
```
* toSurrogatePairs
> Hexadecimal and decimal number to unicode
```js
String.fromCodePoint(128513)// return '\ud83d\ude01'
toSurrogatePairs(0x1F601)// return '\ud83d\ude01'
```
* fromcodepoint
> a static method like es6 fromcodepoint, fromcodepoint()  then  use  String.fromCodePoint(),
```js
fromcodepoint()
```


👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧     &nbsp;&nbsp;&nbsp;A lot of people star this project
