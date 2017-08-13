+++
title = "Customize List Pages"
hide_authorbox = true
disable_comments = true
categories = ["Documentation"]
[menu.main]
  weight = 3
  parent = "docs-pages"
+++

BluestNight provides a number of ways for you to customize [list pages](https://gohugo.io/templates/list/) using [`_index.md`](https://gohugo.io/content/using-index-md/) files.

# Custom content

If you create an `_index.md` file for a list page and put content in it, that content will appear above the list on the generated page.

# Hide the list

Maybe you don't want to display the list of pages, just your custom content. Set `hide_list` to `true` in the front matter of the `_index.md` file and BluestNight will only generate the custom content on that page.

<!--more-->

# Examples

This site author wants to display a message to their readers before showing the most recent posts.

```
+++
# Found under "post/_index.md"
title = "My Awesome Posts"
hide_list = false
+++

Before you get to my posts, I just want you all to know how much I appreciate your readership and your feedback on my posts.
```

This site author provides a multi-page how-to guide and wants users to start with a link to the first item so they don't skip ahead.

```
+++
# Found under "how-to/install-linux/_index.md"
title = "How to Install Linux"
hide_list = true # Won't show any other pages under "how-to/install-linux"
+++

If you've ever wanted to install a Linux distribution on your computer but weren't sure how, this guide is for you!

(More introductory stuff about installing Linux - this is a code example, I don't need to write a full paragraph!)

[Start here]({{</* ref "how-to/install-linux/1.md" */>}}).
```
