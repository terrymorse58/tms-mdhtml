// test of mdToHtmlDocument

import { mdToHtmlText } from '../mdhtml.js';

let htmlPretty = mdToHtmlText(
  "# Hello World",
  true
);

console.log(`htmlPretty:\n${htmlPretty}`);
