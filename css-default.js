// default css for md-html

const styleDefault =
  `html {
  overflow-x: initial !important;
}

:root {
  --bg-color: #2D2D2D;
  --border-color: #787878;
  --table-border-color: #3e444d;
  --hr-color: #4D4D4D;
  --text-color: #E7E9EB;
  --link-color: #1e90ff;
  --select-text-bg-color: #5C789A;
  --code-bg-color: #404245;
  --select-text-font-color: auto;
  --sans-serif: "Helvetica Neue", Helvetica, Arial, sans-serif;
  --monospace: Menlo, Consolas, Monaco, "Liberation Mono", "Lucida Console",
      monospace;
  --title-bar-height: 20px;
  --line-height: 1.6;

  /* highlight.js for fenced code block */
  --hljs-color: #c9d1d9;
  --hljs-background-color: #1D1B1B;
  --hljs-color-keyword: #A3C6F9;
  --hljs-color-string: #6BB86A;
  --hljs-color-comment: #9F9FAD;
  --hljs-color-function: #F09449;
  --hljs-color-attribute: #88AECE;
  --hljs-color-language: #B5BD68;
  --hljs-color-literal: #F09449;
}

html {
  font-size: 16px;
  letter-spacing: 0.075rem;
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: var(--sans-serif);
  -webkit-font-smoothing: antialiased;
}

*, ::after, ::before {
  box-sizing: border-box;
}

body {
  width: min(100vw - 2rem, 704px);
  margin: 0 auto;
  padding: 1rem 0;
  height: auto;
  inset: 0;
  font-size: 1rem;
  line-height: var(--line-height);
  overflow-x: hidden;
  background-image: inherit;
  background-size: inherit;
  background-attachment: inherit;
  background-origin: inherit;
  background-clip: inherit;
  background-color: inherit;
  tab-size: 4;
  background-position: inherit;
  background-repeat: inherit;
}

a {
  color: var(--link-color);
  text-decoration: none;
  cursor: pointer;
}

a:active, a:hover {
  outline: 0;
  filter: brightness(80%);
}

a img, img a {
  cursor: pointer;
}

::selection {
  text-shadow: none;
  background: var(--select-text-bg-color);
  color: var(--select-text-font-color);
}

img {
  max-width: 100%;
  vertical-align: middle;
  image-orientation: from-image;
}

p {
  line-height: inherit;
}

p > img:only-child {
  display: block;
  margin: auto;
}

h1, h2, h3, h4, h5, h6 {
  break-after: avoid-page;
  break-inside: avoid;
  orphans: 4;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.8rem;
}

h3 {
  font-size: 1.6rem;
}

h4 {
  font-size: 1.4rem;
}

h5 {
  font-size: 1.2rem;
}

h6 {
  font-size: 1rem;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 1rem 0;
}

blockquote {
  padding-left: 1.4rem;
  margin: 1rem 0 1.875rem 1rem;
  border-left: solid 4px var(--hr-color);
  font-style: italic;
  font-size: 0.9rem;
}

blockquote > :last-child {
  margin-bottom: 0;
}

blockquote > :first-child, li > :first-child {
  margin-top: 0;
}

li {
  margin: 0;
  position: relative;
}

li div {
  padding-top: 0;
}

li p {
  margin: 0.5rem 0;
}

li blockquote {
  margin: 1rem 0;
}

hr {
  border: 1px solid var(--hr-color);
}

/* table styles from bootsdark */
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  overflow: auto;
  break-inside: auto;
  text-align: left;
  color: #fff;
  border: 1px solid var(--table-border-color);
}

table tr {
  break-inside: avoid;
  break-after: auto;
}

table td, table th {
  padding: 5px 10px;
  vertical-align: top;
  border: 1px solid var(--table-border-color);
}

table thead th {
  border-bottom: 2px solid var(--table-border-color);
}

table tbody + tbody {
  border-top: 2px solid var(--table-border-color);
}

code {
  letter-spacing: normal;
  font-family: var(--monospace);
  background-color: var(--code-bg-color);
}

@media print {
  body, html {
    border: 1px solid transparent;
    padding: 0 4rem 0 2rem;
    height: 90%;
    break-after: avoid;
    break-before: avoid;
    font-variant-ligatures: no-common-ligatures;
    background-color: transparent;
    color: black;
  }
}

/* highlight.js github-dark theme */
.hljs {
  color: var(--hljs-color);
  background-color: var(--hljs-background-color);
}

code.hljs {
  padding: 3px 5px;
}

pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1.5;
}


.hljs-doctag, .hljs-keyword, .hljs-meta .hljs-keyword, .hljs-template-tag,
.hljs-template-variable, .hljs-type {
  color: var(--hljs-color-keyword);
}

.hljs-variable.language_ {
  color: var(--hljs-color-language);
}

.hljs-title, .hljs-title.class_, .hljs-title.class_.inherited__, .hljs-title.function_ {
  color: var(--hljs-color-function);
}

.hljs-attr, .hljs-attribute, .hljs-selector-attr {
  color: var(--hljs-color-attribute);
}

.hljs-literal, .hljs-number {
  color: var(--hljs-color-literal);
}

.hljs-meta, .hljs-operator, .hljs-selector-class, .hljs-selector-id, .hljs-variable {
  color: var(--hljs-color-attribute);
}

.hljs-meta .hljs-string, .hljs-regexp, .hljs-string {
  color: var(--hljs-color-string);
}

.hljs-built_in, .hljs-symbol {
  color: #ffa657
}

.hljs-code, .hljs-comment, .hljs-formula {
  color: var(--hljs-color-comment);
}

.hljs-name, .hljs-quote, .hljs-selector-pseudo, .hljs-selector-tag {
  color: #7ee787
}

.hljs-subst {
  color: #c9d1d9
}

.hljs-section {
  color: #1f6feb;
  font-weight: 700
}

.hljs-bullet {
  color: #f2cc60
}

.hljs-emphasis {
  color: #c9d1d9;
  font-style: italic
}

.hljs-strong {
  color: #c9d1d9;
  font-weight: 700
}

.hljs-addition {
  color: #aff5b4;
  background-color: #033a16
}

.hljs-deletion {
  color: #ffdcd7;
  background-color: #67060c
}

`;

export {
  styleDefault
};
