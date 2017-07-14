+++
title = "Analytics"
date = "2017-07-01T13:57:18-07:00"
hide_authorbox = true
disable_comments = true
categories = ["Documentation"]
[menu.main]
  weight = 1
  parent = "docs-site"
+++

BluestNight comes with support for [Piwik](https://piwik.org/) as an site analytics provider. This requires having a Piwik instance hosted somewhere, either [self-hosted](https://piwik.org/download/) or [hosted by Innocraft](https://www.innocraft.cloud/). The theme uses the [JavaScript tracking client](https://developer.piwik.org/guides/tracking-javascript-guide).

<!--more-->

# Setup

Set `enable` to `true` and `host` to the root URL of the Piwik installation under `[Params.piwik]` in your site's configuration file.

```
# In config.toml
[Params.piwik]
    enable = true
    # URL to the root of the piwik installation.
    # Can include paths after the TLD (e.g https://example.com/piwik/)
    host = "https://piwik.example.com"
    # Include <noscript> tags to track users with javascript disabled
    track_nojs = true
    # Include a link in the site footer to allow users to opt out of analytics
    enable_optout = true
```

# Ajax "one-click" opt-out

Piwik currently only provides an `<iframe>` as a method of opting out of being tracked. It sucks, looks bad on a themed page, and just generally isn't a great idea. A user thought so too and [created a plugin](https://plugins.piwik.org/AjaxOptOut) that allows developers to create an opt-out *button*. \*GASP!\*

I recommend you install the above plugin and enable support for one-click opting out with the below configuration:

```
# In config.toml
[Params.piwik]
    enable = true
    # URL to the root of the piwik installation.
    # Can include paths after the TLD (e.g https://example.com/piwik/)
    host = "https://piwik.example.com"
    # Include <noscript> tags to track users with javascript disabled
    track_nojs = true
    # Include a link in the site footer to allow users to opt out of analytics
    enable_optout = true
    # Enable ajax "one-click"
    enable_ajax = true
```
