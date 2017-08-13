+++
title = "Events"
hide_authorbox = true
disable_comments = true
categories = ["Documentation"]
[menu.main]
  weight = 2
  parent = "docs-sidebar"
+++

You have a list of events you want to share with your reader base - why not display them on your site?

BluestNight provides both a sidebar widget to display the 5 earliest occurring events listed and a template for a `.ics` calendar file that readers can subscribe to.

<!--more-->

# Setup

Place a data file for each event in the `data/events/` directory for your site. You will need to create the `events` subdirectory. The data files should have the following key/value pairs:

- `name`: The name of the event.
- `startDatetime`: The date and time that the event starts, in a [time format](https://golang.org/pkg/time/#pkg-constants) that Hugo recognizes.
- `endDatetime`: The date and time that the event ends, in a time format that Hugo recognizes.
- `location`: Where the event is taking place.
- `description`: A short description of the event.

To enable events on your site, set `upcoming_events` to `true` under `Params.widgets` in your sites configuration folder:

```
# In config.toml

[Params.widgets]
    upcoming_events = true
```

# Limitations

- Items do not automatically disappear from the sidebar
  - BluestNight automatically filters out events that have already passed when adding events to the sidebar, but it cannot dynamically remove them as they pass, due to it being a static site. It is on the site administrator to at least rebuild the site after an event has passed, though I suggest considering removing the data file as well.
