+++
title = "Website Policies"
linktitle = "Policies"
hide_authorbox = true
disable_comments = true
enable_toc = true
description = ""
categories = ["Documentation"]
[menu.main]
  weight = 3
  parent = "docs-site"
+++

BluestNight currently supports two methods of including privacy policies (and other website policy documents) as links in the footer of the site.

The first is to create the documents `privacy-policy.md` and/or `terms-of-use.md` in the root of the content directory (i.e. `content/privacy-policy.md`). They will be detected and have links in the footer under the copyright.

The second is a limited integration with [Iubenda](http://iubenda.refr.cc/FMFBN89), a service that allows users to select how they collect user information - comment systems, analytics, forms, etc. - and generates a privacy policy that can be viewed at the click of a button. A free account with Iubenda does not allow for modification of this button, however, aside from whether it is white or black.

To use the Iubenda integration, set `id` and optionally `color` and `legal_only` under `Params.iubenda` in the site's configuration file. For example:

```
[Params.iubenda]
  id = "1234567"
  # "black" and "white" are the only valid options
  # Leave unset to automatically match the footer background
  # as much as possible
  color = "black"
  # Set to true to not display the user-friendly version of the policy
  legal_only = true
```

To get the `id`, [log in to Iubenda](https://www.iubenda.com/en/login) and go to the "Integration" tab for the policy you want to include. In the embedding code under "Integrate the policy", there will be a bit of code looking something like `<a href="//www.iubenda.com/privacy-policy/1234567"` - the numbers after "//www.iubenda.com/privacy-policy/" are the `id`.
