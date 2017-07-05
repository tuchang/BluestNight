# BluestNight
A dark theme with blue accents for Hugo. Provides multiple configuration options and overrides.

This theme is a complete recreation of my previous theming attempt [Darkroad](https://github.com/Shadow53/Darkroad) based on [Mainroad by Vimux](https://github.com/vimux/mainroad). The theme is similar only in basic structure and has been recreated from scratch.

# Documentation

You can find documentation on how to use the theme, as well as a `config.toml` [template](https://shadow53.gitlab.io/BluestNight/docs/example-config), on the [example site](https://shadow53.gitlab.io/BluestNight/)

# Example sites
See the theme in action with its custom color scheme [here](https://mnbryant.com) or with an override [here](https://shadow53.com)

# Features

- Site header with tagline
- [Search](https://shadow53.gitlab.io/BluestNight/docs/sidebar/search) powered by [Lunr.js](https://lunrjs.com)
- Responsive design using [CSS flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
- [Configurable color scheme](https://shadow53.gitlab.io/BluestNight/docs/site/appearance#custom-colors)
- [Custom site wallpaper](https://shadow53.gitlab.io/BluestNight/docs/site/appearance#custom-background)
- Custom CSS that cleans the page up for printing *only* the page content (try visiting one of the example pages and viewing print preview)
- Custom or in-section [next/previous links](https://shadow53.gitlab.io/BluestNight/docs/pages/next-prev-page/) for content pages
- Custom shortcodes that I find useful
  - [Handwriting fonts](https://shadow53.gitlab.io/BluestNight/docs/shortcodes/handwriting)
  - [Member boxes](https://shadow53.gitlab.io/BluestNight/docs/shortcodes/members)
- Multiple sidebar widgets, including:
  - [Categories](https://shadow53.gitlab.io/BluestNight/docs/sidebar/category-list)
  - [Recent posts](https://shadow53.gitlab.io/BluestNight/docs/sidebar/recent-posts)
  - [Tags](https://shadow53.gitlab.io/BluestNight/docs/sidebar/tag-list)
  - [Patreon banner](https://shadow53.gitlab.io/BluestNight/docs/sidebar/patreon-banner)
  - [Upcoming events](https://shadow53.gitlab.io/BluestNight/docs/sidebar/events)
- Optional [authorbox](https://shadow53.gitlab.io/BluestNight/docs/pages/authorbox)
- [List page customization](https://shadow53.gitlab.io/BluestNight/docs/pages/custom-list-pages)
- Pagination
- Dynamic site menu that works on desktop and mobile alike - supports seemingly infinite nesting (might look bad on mobile, though)
- Comments system based on [Hashover](https://shadow53.gitlab.io/BluestNight/docs/pages/comments#hashover) or [Muut](https://shadow53.gitlab.io/BluestNight/docs/pages/comments#muut)
  - Comments can be disabled on a per-page basis
- Dynamic taxonomy pages that look good on all screen sizes
- [Social icons](https://shadow53.gitlab.io/BluestNight/docs/site/social-icons) in the page footer
- Custom "Error 404" page
- Custom robots.txt that prevents taxonomy pages from being indexed (e.g. /tags/my_tag)
- Custom RSS generator that includes only content pages with dates
