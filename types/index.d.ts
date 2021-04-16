import { Remarkable } from 'remarkable';

type imageOptions = [
  'title'
];

type linkOptions = [
  'title'
];

export declare function remarkableSeo(md: Remarkable, options?: configOptions): void;

export type configOptions = {
  download?: boolean | true;
  image?: imageOptions | [];
  link?: linkOptions | [];
};

export type defaultOptions = {
  download: boolean;
  image: imageOptions;
  link: linkOptions;
};
