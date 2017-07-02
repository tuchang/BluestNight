+++
title = "Git Integration"
date = "2017-07-01T16:40:59-07:00"
hide_authorbox = true
disable_comments = true
draft = true
+++

Hugo provides a way for theme developers to [integrate](https://gohugo.io/extras/gitinfo) Git repository information into their theme templates. Here are ways that BluestNight can use that information.

# Setup

To use git repository information in your site, you must set `enableGitInfo` to `true` in your site's configuration file.

```
# In config.toml

enableGitInfo = true
```

In order to provide links with this Git information, e.g. a link to the commit that last updated a page, you will also need to provide a base URL to build the links from. Currently the only Git hosting supported is [GitHub](https://github.com) and [GitLab](https://gitlab.com/). You should only do so with public repositories. Do this by setting either `github` or `gitlab` under `[Params]` in your site's configuration file.



```
[Params]
    github = "https://github.com/gohugoio/hugoBasicExample"
```

# Last updated

If you have your site configured correctly
