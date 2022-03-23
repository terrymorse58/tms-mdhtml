// test of mdToHtmlDocument

import { mdToHtmlDocument } from '../mdhtml.js';

let htmlDocument = mdToHtmlDocument (
  "# Hello World",
  "h1 {font-size: 3rem;}",
  "Hello World Title"
);

console.log(`htmlDocument:\n${htmlDocument}`);
