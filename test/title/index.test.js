'use strict';

const { Remarkable } = require('remarkable');
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const remarkableSeo = require('../../index');

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

describe('Test `title` attribute', () => {
  it('Add `title` attribute on link(s) and image(s) where missing', () => {
    const expectedOutput = fs.readFileSync(
      path.resolve(__dirname, 'expected-output/all.html'),
      'utf8',
      (err, data) => {
        if (err) {
          console.error(err)
          return;
        }

        return data;
      });
    const md = new Remarkable();

    md.use(remarkableSeo);
    assert.strictEqual(md.render(testString), expectedOutput);
  });

  it('Add `title` attribute on image(s) where missing', () => {
    const expectedOutput = fs.readFileSync(
      path.resolve(__dirname, 'expected-output/image.html'),
      'utf8',
      (err, data) => {
        if (err) {
          console.error(err)
          return;
        }

        return data;
      });
    const md = new Remarkable();

    md.use(remarkableSeo, {
      'link': []
    });
    assert.strictEqual(md.render(testString), expectedOutput);
  });

  it('Add `title` attribute on link(s) where missing', () => {
    const expectedOutput = fs.readFileSync(
      path.resolve(__dirname, 'expected-output/link.html'),
      'utf8',
      (err, data) => {
        if (err) {
          console.error(err)
          return;
        }

        return data;
      });
    const md = new Remarkable();

    md.use(remarkableSeo, {
      'image': []
    });
    assert.strictEqual(md.render(testString), expectedOutput);
  });
});
