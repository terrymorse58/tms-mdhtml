#!/usr/bin/env node

/**
   md-html - command line Markdown-to-HTML converter
   Usage:
     mdhtml --src <markdown_file> [...options]
   Parameters:
     --src <markdown_file>
       markdown file to convert [REQUIRED]
   Optional:
     --style <css_file> css to include
       insert css_file contents into style element
     --title "My Title Text"
       insert "My Title Text" into title element
     --output <html_file>
       save complete HTML to html_file
       if not specified, HTML goes to stdout
 */

import { readFileText, isExistingFilePath } from './fileutils.js';
import * as fs from 'fs';
import { mdToHtmlDocument} from './mdhtml.js';

/**
 * extract flagged value from command line args
 * @param {string} flag
 * @return {string}
 */
function valueFromArgs (flag) {
  const args = process.argv;
  const iFlag = args.indexOf(flag);
  return (iFlag !== -1) ? args[iFlag + 1] : "";
}

const params = {
  srcPath: valueFromArgs('--src'),
  stylePath: valueFromArgs('--style'),
  titleStr: valueFromArgs('--title')
};
const outPath = valueFromArgs('--output');

if (!params.srcPath) {
  console.error(
    `USAGE: mdhtml --src <markdown_file> [ --style <css_file>` +
    ` --output <html_file> --title "Sample Title" ]`
  );
  process.exit(0);
}

// srcPath file must exist
if (!isExistingFilePath(params.srcPath)) {
  console.error(`ERROR: source file '${params.srcPath}' does not exist`);
  process.exit(0);
}

// if specified, stylePath file must exist
if (params.stylePath && !isExistingFilePath(params.stylePath)) {
  console.error(`ERROR: style file '${params.stylePath}' does not exist`);
  process.exit(0);
}

const mdText = readFileText(params.srcPath);
const styleText = readFileText(params.stylePath);

const prettyHTML = mdToHtmlDocument(mdText, styleText, params.titleStr);

// save to file or stdout
if (outPath) {
  fs.writeFileSync(outPath, prettyHTML, {encoding: 'utf8'});
  process.stdout.write(`Saved output to file: '${outPath}'\n`);
} else {
  process.stdout.write(prettyHTML);
}
