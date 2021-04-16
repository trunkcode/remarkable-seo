'use strict';

import { Remarkable } from 'remarkable';
import remarkableSeo from './index';

const testString = `Add 'title' attribute on link and image where missing.

Links to test Title:

* [Example](http://example.com)
* [Google](https://google.com)
* [Facebook](https://facebook.com "Facebook page")
* [Download Minion](https://octodex.github.com/images/minion.png "download"))

Attached images:

1. ![Minion](https://octodex.github.com/images/minion.png)
1. ![Manufacturetocat](https://octodex.github.com/images/manufacturetocat.png)
1. ![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")
`;

const testLink = {
  'image': []
};
const testImage = {
  'link': []
};

const md = new Remarkable();

md.use(remarkableSeo);
md.render(testString);

if (testImage) {
  md.use(remarkableSeo, testImage);
  md.render(testString);
}

if (testLink) {
  md.use(remarkableSeo, testLink);
  md.render(testLink);
}
