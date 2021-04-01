export default class TrimPhp {
  lTrim(str: string, charList?: string): string;
  rTrim(str: string, charList?: string): string;
  trim(str: string, charList?: string): string;
}

type imageOptions = [
  'title'
];

type linkOptions = [
  'title'
];

type rendererOptions = {
  rules: {};
  getBreak?: {};
};

export type configOptions = {
  image?: imageOptions | [];
  link?: linkOptions | [];
};

export type defaultOptions = {
  image: imageOptions;
  link: linkOptions;
};

export type remarkableOptions = {
  inline: {};
  block: {};
  core: {};
  renderer: rendererOptions;
  ruler: {};
  options: {};
};
