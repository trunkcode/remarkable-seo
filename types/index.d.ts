import { Remarkable } from 'remarkable';

type imageOptions = [
  'title'
];

type linkOptions = [
  'title'
];

export declare function remarkableSeo(md: Remarkable, options?: configOptions): void;

export type configOptions = {
  image?: imageOptions | [];
  link?: linkOptions | [];
};

export type defaultOptions = {
  image: imageOptions;
  link: linkOptions;
};
