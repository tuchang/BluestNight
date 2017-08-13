+++
title = "Members"
hide_authorbox = true
disable_comments = true
categories = ["Documentation"]
[menu.main]
  weight = 2
  parent = "docs-shortcodes"
+++

Looking to put together a nice Members page for your site, but don't want to write a bunch of custom HTML?

Just use the `{{< member >}}` shortcode!

# Setup

**This setup is necessary for both the `member` shortcode *and* the `authorbox` feature!**

Create a data file for each member in your site's `data/members` directory with keys `Name`, `Img` (optional), `URL` (optional), `Position`, and `Bio`.

The `URL` field should indicate that particular member's home page, either on the same site (if they have a profile page) or on a separate site.

If a user doesn't have an `Img` key, the [default photo](https://gitlab.com/Shadow53/BluestNight/blob/master/static/images/profile.jpg) will be used instead.

<!--more-->

An example data file, to be found under `data/members/shadow53.yml`:

```yaml
# This example uses YAML
Name     : "Michael Bryant"
Img      : "/path/to/picture/of/michael.jpg"
Position : "Awesome Theme Designer"
URL      : https://mnbryant.com
Bio      : |
  I'm Michael, also known as Shadow53. This bio section
  is intended to have a small paragraph's worth of text
  in it so it takes up about as much space on the screen
  as the profile picture, because I think that looks nice.
  Lorem Ipsum. Foo, bar, baz, and all that.
```

# Usage

Just use the shortcode wherever you want the member entry to appear on the page. Syntax is `{{< member "Member Name" >}}` where `"Member Name"` is replaced with the value of the `Name` field in the data file. So, using the example above:

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis sollicitudin arcu sed
volutpat. Suspendisse ante erat, elementum eget orci a, consectetur condimentum est. Sed leo ipsum,
laoreet eu rhoncus id, posuere ut sem. Pellentesque blandit, tortor sit amet lobortis tristique, sem
felis pellentesque orci, vel interdum lacus magna et est. In fringilla facilisis ultrices. Maecenas
at bibendum tellus. Vivamus imperdiet volutpat lacus, a tempor enim rutrum at.

{{</* member "Michael Bryant" */>}}

Sed tristique ex eros. Donec vestibulum nunc sed mattis efficitur. Mauris mollis libero quis tellus
interdum, id venenatis dolor gravida. Praesent dignissim tempor blandit. Duis ut nisi eget arcu
molestie dapibus. Cras viverra magna id tincidunt ultrices. Nam id cursus diam, in ultricies sem. Ut
convallis eget metus non feugiat. Integer elementum consequat risus vitae lobortis. Curabitur
dapibus, lectus nec vulputate laoreet, leo elit gravida odio, ac dapibus nisl ex vel justo. Maecenas
ornare lobortis ante nec blandit.
```
