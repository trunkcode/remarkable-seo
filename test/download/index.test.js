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
* [Download Minion](https://octodex.github.com/images/minion.png "download")

Attached images:

1. ![Minion](https://octodex.github.com/images/minion.png)
1. ![Manufacturetocat](https://octodex.github.com/images/manufacturetocat.png)
1. ![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")
`;

describe('Test `download` attribute', () => {
  it('Add `download` attribute on link(s) where title set to `download`', () => {
    const expectedOutput = fs.readFileSync(
      path.resolve(__dirname, 'expected-output/download.html'),
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
      'download': true
    });
    assert.strictEqual(md.render(testString), expectedOutput);
  });
});
