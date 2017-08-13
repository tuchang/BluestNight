+++
title = "Social Icons"
hide_authorbox = true
disable_comments = true
categories = ["Documentation"]
[menu.main]
  weight = 4
  parent = "docs-site"
+++

Social icons are an easy way to link viewers of your site to other parts of your online presence, such as to your Facebook, Twitter, LinkedIn, GitHub, and more. The complete list is below.

<!--more-->

# Setup

Everything here goes under `[Params.social]` in your site's `config.toml` file.

Example (from [Shadow53's blog](https://shadow53.com)):

```
[Params.social]
    linkedin = "shadow53"
    github = "Shadow53"
    steam = "id/shad0w0710"
```

Full list of social links and how to link to them:

- DeviantArt (`deviantart = "username"`)
- Facebook (`facebook = "userid"`)
    - Your Facebook user id is what comes after "https://facebook.com/" on your public profile page
- GitHub (`github = "username"` or `github = "username/project-name")
- GitLab (`gitlab = "username"` or `gitlab = "username/project-name")
- Google Plus (`googleplus = "+Joe-Smith"`)
- Instagram (`instagram = "username"`)
- LinkedIn (`linkedin = "userid"`)
- Medium (`medium = "username"`)
- Pinterest (`pinterest = "username"`)
    - Your username is whatever follows "https://pinterest.com/" on your profile page
- Quora (`quora = "userid")
    - Your userid is whatever follows "https://quora.com/profile/" on your profile page
- Reddit (`reddit = "username"`)
- Slack Organization (`slack_org = "subdomain"`)
    - Your subdomain is whatever comes after "https://" and before ".slack.com"
- Soundcloud (`soundcloud = "userid"`)
    - Your userid is whatever comes after "https://soundcloud.com/" on your profile page
- Spotify (`spotify = "username"`)
- Steam (`steam = "id/username" OR "profiles/48624573984729386"`)
  - If you have a custom profile link set up, it will be `id/your-login-username`
  - If not, it will be `profiles/your-steam-userid-number`
  - You may need to look yourself up on the [Steam Community](http://steamcommunity.com/) to figure out which to use. The content you use will be the part of the URL after `steamcommunity.com`
- Tumblr (`tumblr = "username"`)
- Twitch (`twitch = "username"`)
- Twitter (`twitter = "username"`)
- Vimeo (`vimeo = "userid"`)
  - It seems some users have custom URLs and some are identified as "user1234567". Use whatever comes after "https://vimeo.com/" on your profile page.
