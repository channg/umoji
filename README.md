<h1 align="center">umoji</center></h3>

<p align="center">
 <a href="https://www.npmjs.com/package/umoji"><img alt="npm" src="https://img.shields.io/npm/v/umoji.svg?style=flat-square"></a>
</p>


😀A lib convert emoji unicode to Surrogate pairs
* u can use with npm 
```
npm install umoji --save
```
* use cdn
	 https://unpkg.com/umoji@2.0.0/dist/umoji.umd.js
#### method
* emojiToUnicode
> emoji to Surrogate pairs unicode
```js
umoji.emojiToUnicode('😀😀😀😀😀sdksk');// return '\ud83d\ude00\ud83d\ude00\ud83d\ude00\ud83d\ude00\ud83d\ude00sdks'
```
* toSurrogatePairs
> Hexadecimal and decimal number to unicode
```js
umoji.toSurrogatePairs(128513)// return '\ud83d\ude01'
umoji.toSurrogatePairs(0x1F601)// return '\ud83d\ude01'
```
* fromcodepoint
> a static method like es6 fromcodepoint, fromcodepoint()  then  use  String.fromCodePoint(),
```js
fromcodepoint()
String.fromCodePoint(128513)// return '\ud83d\ude01'
```


👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧     &nbsp;&nbsp;&nbsp;A lot of people star this project
