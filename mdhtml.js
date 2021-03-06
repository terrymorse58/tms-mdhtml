// mdhtml - convert Markdown to HTML

import MarkdownIt from 'markdown-it';
import highlightJs from 'markdown-it-highlightjs';
import prettier from 'prettier';
import { styleDefault } from './css-default.js';

const htmlTemplate =
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{title}}</title>
  <style>{{style}}</style>
</head>
<body>
{{content}}
</body>
</html>`;

const md = new MarkdownIt({
  html: true,  // enable HTML tags in source
  xhtmlOut: false,  // use '/' to close single tags
  breaks: false,  // convert newlines to <br>
  langPrefix: 'language-',  // class prefix for fenced blocks
  linkify: false, // autoconvert text to links
  typographer: false, // enable typographic substitutions
  quotes: '“”‘’', // quote chars for substitution
  highlight: function (/*str, lang*/) { return ''; }
});

md.use(highlightJs, {
  auto: true, // detect language automatically
  code: true, // add hljs class to raw code blocks
  register: null, // register other languages
  inline: false  // highlight inline code
});

/**
 * convert markdown text to HTML text
 * @param {string} mdText
 * @param {Boolean} [pretty]
 * @return {string} - HTML fragment
 */
function mdToHtmlText(mdText, pretty = false) {

  // strip any front matter
  if (mdText.match(/^---/)) {
    const lines = mdText.split('\n');
    lines.shift(); // remove delimiter
    for (;;) {
      const isDelimiter = lines[0].match(/^---/);
      lines.shift();
      if (isDelimiter || lines.length === 0) { break; }
    }
    mdText = lines.join('\n');
  }

  let htmlText = md.render(mdText);
  if (pretty) {
    htmlText = prettier.format(htmlText, {parser: 'html'});
  }
  return htmlText;
}

/**
 * convert markdown + style + title strings to complete HTML document
 * @param {string} mdContent
 * @param {string} [styleContent]
 * @param {string} [titleContent]
 * @return {string} - complete html document text
 */
function mdToHtmlDocument (
  mdContent,
  styleContent = '',
  titleContent = ''
) {
  // console.log(`mdToHtmlDocument()`);

  const htmlText = mdToHtmlText(mdContent);

  const styleText = styleContent;

  // form html document contents
  let docText = htmlTemplate.replace('{{title}}', titleContent)
    .replace('{{style}}', styleText)
    .replace('{{content}}', htmlText);

  // TERRY skip prettier for now (was hanging on HTML format errors)
  // TODO make prettier an option
  if (1 === 1) {
    return docText;
  } else {
    return prettier.format(docText, {parser: 'html'});
  }
}

export {
  mdToHtmlText,
  mdToHtmlDocument
}
