+++
title = "Events"
date = "2017-06-26T23:55:07-07:00"
hide_authorbox = true
disable_comments = true
categories = ["Documentation"]
+++

You have a list of events you want to share with your reader base - why not display them on your site?

BluestNight provides both a sidebar widget to display the 5 earliest occurring events listed and a template for a `.ics` calendar file that readers can subscribe to.

<!--more-->

# Setup

Place a data file for each event in the `data/events/` directory for your site. You will need to create the `events` subdirectory. The data files should have the following key/value pairs:

- `name`: The name of the event.
- `startDatetime`: The date and time that the event starts, in a [time format](https://golang.org/pkg/time/) that Hugo recognizes.
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

- Events have to be removed from `data/events/` in order to disappear from the sidebar.
  - This is due to the fact that Hugo does not provide a method of determining the time at site compilation. The closest thing is the `.Site.LastChange` variable, which indicates the most recent `date` in the front matter of all pages on the site. Since the site would need to be recompiled anyways to remove old events, site authors may as well keep their `data/events/` folder clean.
