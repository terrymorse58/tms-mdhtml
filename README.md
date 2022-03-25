# tms-mdhtml

Convert Markdown to HTML
---

## Install

```bash
npm install tms-mdhtml
```

## Usage

### Command Line:
```bash
mdhtml --src <markdown_file> [...options]
```
options:

`--style <css_file>` - insert _css_file_ contents into style element

`--title "My Title Text"` - insert "_My Title Text_" into title element

`--output <html_file>` - save complete HTML to _html_file_. If not specified, HTML goes to _stdout_.

### JavaScript

```javascript
import { mdToHtmlText, mdToHtmlDocument } from 'tms-mdhtml';

/**
 * convert markdown text to HTML text
 * @param {string} mdText
 * @param {Boolean} [pretty]
 * @return {string}
 */
let htmlPretty = mdToHtmlText("# Hello World", true);

/*
    htmlPretty:
    <h1>Hello World</h1>
 */

/**
 * convert markdown + style + title strings to complete HTML document
 * @param {string} mdContent
 * @param {string} [styleContent]
 * @param {string} [titleContent]
 * @return {string} - complete html document text
 */

let htmlDocument = mdToHtmlDocument (
  "# Hello World",
  "h1 {font-size: 3rem;}",
  "Hello World Title"
);

/*
    htmlDocument:
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Hello World Title</title>
        <style>
          h1 {
            font-size: 3rem;
          }
        </style>
      </head>
      <body>
        <h1>Hello World</h1>
      </body>
    </html>
 */
```

## Resources

- [markdown-it demo](https://markdown-it.github.io)
- [markdown-it README](https://github.com/markdown-it/markdown-it#readme)
- [Syntax Highlighting Themes](https://stylishthemes.github.io/GitHub-Dark/)
