import * as types from '../types/index.d';
import { Remarkable } from 'remarkable';

/**
 * Register as a plugin by passing `remarkableSeo` to remarkable's `.use()`
 * method.
 * @param md
 * @param options
 */
const remarkableSeo = (md: Remarkable, options?: types.configOptions): void => {
  // Remarkable.
  const defaultOptions: types.defaultOptions = {
    'download': true,
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

    md.renderer.rules.image = (tokens: Remarkable.ImageToken[], idx: number, ...args: []) => {
      tokens.map((token: Remarkable.ImageToken) => {
        if (token && token.alt !== '' && token.title === '') {
          token.title = token.alt;
        }
      });

      return defaultImageRender(tokens, idx, ...args);
    };
  }

  if (config.link && config.link.includes('title')) {
    const defaultLinkRender = md.renderer.rules.link_open;

    // eslint-disable-next-line camelcase
    md.renderer.rules.link_open = (tokens: Remarkable.LinkOpenToken[], idx: number, ...args: []) => {
      tokens.map((token: Remarkable.LinkOpenToken) => {
        if (token && token.title === '') {
          const linkTextId = idx + 1;
          if (tokens[linkTextId]) {
            const linkContent: Remarkable.ContentToken = tokens[linkTextId];
            if (linkContent.type === 'text') {
              token.title = linkContent.content;
            }
          }
        }
      });

      return defaultLinkRender(tokens, idx, ...args);
    };
  }

  if (config.download) {
    const defaultLinkRender = md.renderer.rules.link_open;

    // eslint-disable-next-line camelcase
    md.renderer.rules.link_open = (tokens: Remarkable.LinkOpenToken[], idx: number, ...args: []) => {
      let downloadAttr = false;
      tokens.map((token: Remarkable.LinkOpenToken) => {
        if (token) {
          if (token.title === 'download') {
            const linkTextId = idx + 1;
            downloadAttr = true;
            if (tokens[linkTextId]) {
              const linkContent: Remarkable.ContentToken = tokens[linkTextId];
              if (linkContent.type === 'text') {
                token.title = linkContent.content;
              }
            }
          }
        }
      });

      let result: string = defaultLinkRender(tokens, idx, ...args);
      if (downloadAttr) {
        result = result.replace('>', ' download>');
      }

      return result;
    };
  }
}

module.exports = remarkableSeo;
