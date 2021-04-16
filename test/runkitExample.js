const { Remarkable } = require('remarkable');
const remarkableSeo = require('remarkable-seo');
const md = new Remarkable();

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

md.use(remarkableSeo);

console.log(md.render(testString));
