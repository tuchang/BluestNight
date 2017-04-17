# BluestNight
A dark theme with blue accents for Hugo. Provides multiple configuration options and overrides.

This theme is a complete recreation of my previous theming attempt [Darkroad](https://github.com/Shadow53/Darkroad) based on [Mainroad by Vimux](https://github.com/vimux/mainroad). The theme is similar only in basic structure and has been recreated from scratch.

### Example sites
See the theme in action with its custom color scheme [here](https://mnbryant.com) or with an override [here](https://shadow53.com)

### Features
- Responsive design
- Configurable color scheme
- Custom site wallpaper
- Custom CSS that cleans the page up for printing *only* the page content (try visiting one of the example pages and viewing print preview)
- Multiple sidebar widgets, including:
  - Categories list
  - Recent posts list
  - Post tags list (sorted by most common)
  - Patreon banner
  - Planned for the future:
    - Search bar
    - Blogroll/favorite links menu
    - Organizing the widgets in the order you'd like
- Optional authorbox on post sites
- `_index.md` support for all list pages, including custom content and hiding the list
- Pagination
- Dynamic site menu that works on desktop and mobile alike
- Comments system based on [Hashover](http://tildehash.com/?page=hashover) (requires PHP on the hosting server)
  - Comments can be enabled/disabled on a per-page basis as well as in the site config
- Dynamic taxonomy pages that look good on all screen sizes
- Custom "Error 404" page
- Custom robots.txt that prevents taxonomy pages from being indexed (e.g. /tags/my_tag)
- Check out the [TODO list](https://github.com/Shadow53/BluestNight)

### Shortcodes

##### Footnotes

*Currently working out some kinks*

##### Handwriting styles

The theme comes with a handful of 100% free handwriting fonts from [Font Squirrel](https://www.fontsquirrel.com/). You can choose between them using the `{{% handwriting %}}` shortcode. These are the currently available fonts:

- `"allura"`
- `"calligraffiti"`
- `"dancing-script"`
- `"daniel"`
- `"euphoria-script"`
- `"journal"`
- `"kingthings-wrote"`
- `"note-this"`
- `"vag-handwritten"`

###### Example:

```
{{% handwriting "calligraffiti" %}}
This is some text that will render using the "calligraffiti" font.
{{% /handwriting %}}
```
