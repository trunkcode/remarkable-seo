# remarkable-seo

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

[Remarkable](https://www.npmjs.com/package/remarkable) plugin adds `title` attribute on link and image tags.

## Install

Via `npm`

```bash
npm install remarkable-seo --save-dev
```

Via `Yarn`

```bash
yarn add remarkable-seo --dev
```

## Usage

```javascript
import { Remarkable } from 'remarkable';
import remarkableSeo from 'remarkable-seo';

const md = new Remarkable();

const testString = `Add 'title' attribute on link and image where missing.

Links to test Title:

* [Example](http://example.com)
* [Google](https://google.com)
* [Facebook](https://facebook.com "Facebook page")

Attached images:

1. ![Minion](https://octodex.github.com/images/minion.png)
1. ![Manufacturetocat](https://octodex.github.com/images/manufacturetocat.png)
1. ![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")
`;

md.use(remarkableSeo);
console.log(md.render(testString));
```

### With CommonJS

```javascript
const { Remarkable } = require('remarkable');
const remarkableSeo = require('remarkable-seo');
const md = new Remarkable();

const testString = `Add 'title' attribute on link and image where missing.

Links to test Title:

* [Example](http://example.com)
* [Google](https://google.com)
* [Facebook](https://facebook.com "Facebook page")

Attached images:

1. ![Minion](https://octodex.github.com/images/minion.png)
1. ![Manufacturetocat](https://octodex.github.com/images/manufacturetocat.png)
1. ![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")
`;

md.use(remarkableSeo);
console.log(md.render(testString));
```

### With Docusaurus `v1`

```javascript
const remarkableSeo = require('remarkable-seo');
const siteConfig = {
  ...

  markdownPlugins: [
    function (md) {
      remarkableSeo(md);
    }
  ]

  ...
}
```

[npm-image]: https://img.shields.io/npm/v/remarkable-seo.svg
[npm-url]: https://www.npmjs.com/package/remarkable-seo
[downloads-image]: https://img.shields.io/npm/dt/remarkable-seo.svg
[travis-image]: https://api.travis-ci.org/trunkcode/remarkable-seo.svg?branch=main
[travis-url]: https://travis-ci.org/trunkcode/remarkable-seo
