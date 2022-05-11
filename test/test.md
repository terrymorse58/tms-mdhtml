---
title: Test of Markdown to HTML
---
# Test Markdown Source

This is a test.

## This is h2

### This is h3

#### This is h4

- this is
- a list
- with 3 members
    - and a sublist

> This is  
> a blockquote test.

A paragraph with `var foo = bar(val);` inline code block.

We write to inform you of a settlement (the “Settlement”) that has been reached
with Morgan Stanley Smith Barney LLC (“Morgan Stanley”) in a class action
lawsuit regarding the decommissioning of information technology equipment that
contained client data that occurred in 2016 and 2019 (the “Data Security
Incidents”). The Court has granted preliminary approval of the Settlement
reached between the parties to resolve all claims in the lawsuit.

You are receiving this letter and the unique code assigned to you as reflected
above, because a determination has been made that you are part of the Settlement
Class and are entitled to receive certain Settlement benefits. The Settlement
Class includes all individuals with existing or closed Morgan Stanley accounts
established in the United States who received the notice letters sent by Morgan
Stanley regarding the Data Security Incidents in July 2020 and/or June 2021.

Markdown Table:

| This       | Is      |
|------------| ------- |
| A Markdown | Table   |

Native Table:

<table>
  <tr>
    <th colspan="2">This is</th>
  </tr>
  <tr>
    <td>A Native</td>
    <td>Table</td>
  </tr>
</table>

Fenced code block:

```javascript
// JavaScript:

//       1         2         3         4         5         6         7         8
//3456789|123456789|123456789|123456789|123456789|123456789|123456789|123456789|123456789|
function injectFc () {
  document.querySelectorAll('yt-live-chat-text-message-renderer:not([profile-link])').forEach(el => {
    console.log(el)
    console.log(el.data)
  })
}

setInterval(() => {
  let queryOptions = {active: true, currentWindow: true};
  chrome.tabs.query(queryOptions, (tb) => {
    var actTid = tb[0];
    chrome.scripting.executeScript(
      {
        target: {tabId: actTid.id, allFrames: true},
        func: injectFc,
      },
      () => {console.log(123);}
    )
  });
}, 20000);
```

