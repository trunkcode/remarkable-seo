'use strict';

import { configOptions, defaultOptions, remarkableOptions } from '../types/index.d';

'use strict';

function remarkableSeo(md: remarkableOptions, options?: configOptions): void {
  const defaultOptions: defaultOptions = {
    'image': [
      'title'
    ],
    'link': [
      'title'
    ]
  };
  const config = Object.assign({}, defaultOptions, options);

  if (config.image && config.image.includes('title')) {
    const defaultImageRender = md.renderer.rules.image;

    md.renderer.rules.image = function (tokens: Object, idx: Number) {
      if (tokens[idx] && tokens[idx].alt !== '' && tokens[idx].title === '') {
        tokens[idx].title = tokens[idx].alt;
      }

      return defaultImageRender(...arguments);
    };
  }

  if (config.link && config.link.includes('title')) {
    const defaultLinkRender = md.renderer.rules.link_open;

    // eslint-disable-next-line camelcase
    md.renderer.rules.link_open = function (tokens, idx) {
      if (tokens[idx] && tokens[idx].title === '') {
        const linkTextId = idx + 1;
        if (tokens[linkTextId] && tokens[linkTextId].type === 'text') {
          tokens[idx].title = tokens[linkTextId].content;
        }
      }

      return defaultLinkRender(...arguments);
    };
  }
}

module.exports = remarkableSeo;
