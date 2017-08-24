+++
title = "Appearance"
hide_authorbox = true
disable_comments = true
description = "Customize the appearance of your Hugo site by adding a custom background image, changing the colors used for the site, or modifying the default choice of whether to use serif or sans-serif fonts."
categories = ["Documentation"]
[menu.main]
  weight = 3
  parent = "docs-site"
+++

# Custom Background

Add the following to your site's `config.toml` file:

```
[Params.background]
    src = "images/background_lg.png"
    #medium_src = "images/background_med.png"
    #small_src = "images/background_sm.png"
    fit_width = true
    tile = false
```

- Change `src` to the relative path from the site's baseURL where the background image can be found. In the above example, the file would be found at `{site root}/static/images/background.png`.
- Optionally set `medium_src` and `small_src` to smaller images to use on screens that are at most 1024px and 640px, respectively. If either of these are omitted, the next largest image source will be used.
- Set `fit_width` to `true` if you want the behavior of CSS [`background-size: contain`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size?v=example#contain) and `false` if you want the behavior of [`background-size: cover`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size?v=example#cover)

# Custom Colors

Add the following to your site's `config.toml` file:

```
[Params.color]
    page_background = "#000000"
    main_background = "#050505"
    alt_background = "#252525"
    main_text = "#e2e2e2"
    alt_text = "#e2e2e2"
    accent = "#2c8cef"
    accent_text = "#e2e2e2"
```

**The above values represent the default colors in the theme.** Modify them as you'd like.

- `page_background` is the background color for what is "behind" the page. This is the same area as where the background image is applied, so it is a good idea to pick a color that matches the image if you use `fit_width = true` on the background image.
- `main_background` is the background color for most of the content page.
- `alt_background` is the alternate background color for the page. This background is applied to the navigation bar, footer, various buttons, and as the alternate color for zebra-striped tables.
- `main_text` is the font color that corresponds with `main_background`.
- `alt_text` is the font color that corresponds with `alt_background`.
- `accent` is the color applied to the site header, links, and buttons that are hovered over or marked active.
- `accent_text` is the font color that is used when `accent` is being used as the background color.

# Font Customization

BluestNight uses the following font families:

- [Clear Sans](https://01.org/clear-sans) (sans-serif)
- [Zilla Slab](https://blog.mozilla.org/opendesign/zilla-slab-common-language-shared-font/) (serif)
- [Source Code Pro](http://adobe-fonts.github.io/source-code-pro/) (monospace)

By default, Clear Sans is used for all text on the on the web page except for `<code>` and `<pre>` blocks, which use Source Code Pro, and any text inside of the [handwriting shortcode]({{< ref "docs/shortcodes/handwriting.md" >}}). Zilla Slab is used by default for text when a page is printed.

These defaults can be modified, though, through the use of four configuration properties and two shortcodes.

```
[Params.fonts]
  header_style = "sans-serif"
  body_style = "sans-serif"
  print_header_style = "sans-serif"
  print_body_style = "serif"
```

The above code block shows the default values of each of the four configuration properties and how they would appear inside on a configuration file written in TOML. Properties prefixed with `print_` affect printed pages only, while those without affect only the page on a screen. The `header_style` properties set the font family for all page headers, while the `body_style` ones affect the main text of the page (inside the `<article>` tag, for the web developers).

{{% alert %}}
If `header_style` and `body_style` (or `print_header_style` and `print_body_style`) match, the choice of "serif" or "sans-serif" is applied to the *entire* page. If they do not match, text in the footer and sidebar is ignored, unless it is a header.
{{% /alert %}}

If you want to change the font family for a block of text on a page, you can use the `{{%/* serif */%}}` and `{{%/* sans-serif */%}}` shortcodes.

## Examples

```
{{%/* serif */%}}
This text will **always** be *serif*.
{{%/* /serif */%}}
```

{{< alert >}}
{{% serif %}}
This text will **always** be *serif*.
{{% /serif %}}
{{< /alert >}}

```
{{%/* sans-serif */%}}
This text will **always** be *sans-serif*.
{{%/* /sans-serif */%}}
```

{{< alert >}}
{{% sans-serif %}}
This text will **always** be *sans-serif*.
{{% /sans-serif %}}
{{< /alert >}}
