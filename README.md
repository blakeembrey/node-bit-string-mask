# Bit String Mask

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

> Mask a string using bits from an input number.

## Installation

```
npm install bit-string-mask --save
```

## Usage

```ts
import { mask } from 'bit-string-mask'

mask('test', 0) //=> "test"
mask('test', 1) //=> "Test"
mask('test', 2) //=> "tEst"
```

## TypeScript

This project is written using [TypeScript](https://github.com/Microsoft/TypeScript) and publishes the definitions directly to NPM.

## License

MIT

[npm-image]: https://img.shields.io/npm/v/bit-string-mask.svg?style=flat
[npm-url]: https://npmjs.org/package/bit-string-mask
[downloads-image]: https://img.shields.io/npm/dm/bit-string-mask.svg?style=flat
[downloads-url]: https://npmjs.org/package/bit-string-mask
[travis-image]: https://img.shields.io/travis/blakeembrey/node-bit-string-mask.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/node-bit-string-mask
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/node-bit-string-mask.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/node-bit-string-mask?branch=master
