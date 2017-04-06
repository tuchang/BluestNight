## Widgets

- [ ] Add a blogroll / favorite links menu widget in the sidebar - .fi-link icon?
- [ ] Add search widget to sidebar - .fi-magnifying-glass icon
- [ ] Donate with Paypal widget? - .fi-paypal icon
- [x] Fix menu visibility issues
   - Menu is not visible on large screen if previously hidden (JS fix)
   - Menu is not visible on small screen if above happens (JS fix)
   - [x] Submenu does not expand after leaving small screen size (JS fix)
~~- [ ] [GitInfo](https://gohugo.io/extras/gitinfo/) support? What is this?~~
- [ ] [Google Analytics](https://gohugo.io/extras/analytics/)

## Archetypes
- [x] Add default archetype
- [x] Add archetype for `post`

## Posts

- [x] Add customizable and privacy-friendly comment system
- [x] Allow optionally overriding site page navigation setting
   - [ ] Optionally show only the next or previous nav, even if Hugo says the other exists

## Color scheme

- [x] Allow modification to certain base colors
- [x] Figure out how to get the nav elements to turn (accent color) on hover
- [ ] Menu items that are also sub menus do not get marked active
- [x] (Optionally?) zebra stripe tables
- [x] Override the text selection color

## Templates

- [ ] Implement [blocks](https://gohugo.io/templates/blocks/)
- [ ] Generate [pages for tags/categories](https://gohugo.io/templates/terms/) (also taxonomy lists on [this page](https://gohugo.io/templates/list/) and [this one](https://gohugo.io/taxonomies/displaying))
- [ ] Custom [home page](https://gohugo.io/templates/homepage/)?
  - What would a custom home page include?
- [ ] Templates for list pages containing `{{ .Content }}` for custom content ([Docs](https://gohugo.io/content/using-index-md/))

## Other
- [ ] Reduce dependencies on JavaScript as much as possible
  - [ ] Bonus: remove all dependencies on JavaScript so the theme is only HTML and CSS
- [ ] Card-esque items in post list?
- [ ] Implement microdata based on [Schema.org](https://schema.org/docs/gs.html)
