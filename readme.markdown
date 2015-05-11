# postcss-remove-base [![Build Status](https://travis-ci.org/morishitter/postcss-remove-base.svg)](https://travis-ci.org/morishitter/postcss-remove-base)

Remove rules that have `@base` annotation

## Install

```shell
$ npm install postcss-remove-base
```

## Example

```js
var fs = require('fs')
var postcss = require('postcss')
var removeBase = require('postcss-remove-base')

var css = fs.readFileSync('input.css', 'utf-8')

var output = postcss(css)
  .use(removeBase())
  .process(css)
  .css
```

Using this `input.css`:

```css
.base {
  /*
   * @base
   */
  color: red;
}

.class {
  padding: 10px;
}
```

You will get:

```css
.class {
  padding: 10px;
}
```

## License

The MIT License (MIT)

Copyright (c) 2015 Masaaki Morishita
