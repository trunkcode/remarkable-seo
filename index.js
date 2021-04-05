"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const remarkableSeo = (md, options) => {
    const defaultOptions = {
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
        md.renderer.rules.image = (tokens, idx, ...args) => {
            tokens.map((token) => {
                if (token && token.alt !== '' && token.title === '') {
                    token.title = token.alt;
                }
            });
            return defaultImageRender(tokens, idx, ...args);
        };
    }
    if (config.link && config.link.includes('title')) {
        const defaultLinkRender = md.renderer.rules.link_open;
        md.renderer.rules.link_open = (tokens, idx, ...args) => {
            tokens.map((token) => {
                if (token && token.title === '') {
                    const linkTextId = idx + 1;
                    if (tokens[linkTextId]) {
                        const linkContent = tokens[linkTextId];
                        if (linkContent.type === 'text') {
                            token.title = linkContent.content;
                        }
                    }
                }
            });
            return defaultLinkRender(tokens, idx, ...args);
        };
    }
};
module.exports = remarkableSeo;
