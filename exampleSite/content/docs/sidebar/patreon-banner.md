+++
title = "Patreon Banner"
date = "2017-06-26T23:55:31-07:00"
hide_authorbox = true
disable_comments = true
categories = ["Documentation"]
[menu.main]
  weight = 3
  parent = "docs-sidebar"
+++

Have a Patreon account? Add a Patreon banner to the sidebar of your site that links to it!

<!--more-->

# Setup

Add a key `patreon` under `Params.widgets` in your site config file with the value of the "slug" of your Patreon page (the part coming after `patreon.com/`

```
# config.toml
[Params.widgets]
    patreon = "shadow53" # Links to https://patreon.com/shadow53
```

# Custom Banner

Since this is a dark theme by default, the default Patreon banner image is the [one with white text](https://s3.amazonaws.com/patreon_public_assets/toolbox/patreon_white.png). If this does not work well with your color scheme, you can specify the URL to a different image. Consider using one of the other official Patreon banners, found [here](https://www.patreon.com/toolbox/media).

When you have the URL to your patreon banner of choice (this can be a relative URL to an image in your `static/` directory), add it under `Params.widgets` as the value for `patreon_banner`.

```
# config.toml
[Params.widgets]
    patreon = "shadow53" # Links to https://patreon.com/shadow53
    patreon_banner = "https://c4.patreon.com/toolbox/patreon_logo.png"
```

The image will be automatically resized on the page to fit within the width of the sidebar.
