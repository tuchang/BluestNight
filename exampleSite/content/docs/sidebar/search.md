+++
title = "Search"
date = "2017-06-26T23:56:58-07:00"
hide_authorbox = true
disable_comments = true
categories = ["Documentation"]
+++

BluestNight offers client-side searching powered by [Lunr.js](https://lunrjs.com). This searching is powered by a JSON index of your site's content pages - this does not include any list pages, even ones [customized using `_index.md`](pages/customize-list-pages). Results are displayed as you type, allowing users to quickly find what they are looking for.

<!--more-->

# Setup

Set `search` to `true` under `Params.widgets` and add `"JSON"` to the output types for `home` in your site's configuration file.

```
# In config.toml

[Params.widgets]
    search = true

[outputs]
    home = ["HTML", "CSS", "RSS", "JSON"]
```
