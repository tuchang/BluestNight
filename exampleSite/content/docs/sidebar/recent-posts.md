+++
title = "Recent Posts"
date = "2017-06-26T23:56:25-07:00"
hide_authorbox = true
disable_comments = true
categories = ["Documentation"]
[menu.main]
  weight = 4
  parent = "docs-sidebar"
+++

Display your most recent posts in the sidebar!

The recent article sidebar widget displays the ten most recent pages under the `post` [section](http://gohugo.io/content/sections/).

<!--more-->

# Setup

Set `recent_articles` to `true` under `Params.widgets` in the site configuration file.

```
# config.toml

[Params.widgets]
    recent_articles = true # Enable recent articles view
```
