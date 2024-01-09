---
title: "base64"
description: "The end of procrastination is the art of letting go"
date: 2017-06-12
thumb: universal-framework.jpg
tags:
  - web
  - development
---

Long URLs often get wrapped and become non-clickable in some email clients.

I prefer short URLs, including using base64 for embedded codes:

|          |                       |
| -------- | --------------------- |
| a-z      | 26 lowercase letters  |
| A-Z      | 26 uppercase letters  |
| 0-9      | 10 numeric digits     |
| - and \_ | hyphen and underscore |

Using the above base64 character set, we can now encode 16 million values using only 4 characters (e.g., 5tY6), or 68 billion values using only 6 characters (e.g., 5tY6_q).

See also these [flight results](https://docs.google.com/spreadsheets/d/1kt0gVKmewOzeYrGqrrZu_JBtzGCUiP59wAf2dliECjQ/edit?usp=sharing), and code in [Java](BaseConvert.java) and [PHP](Base64.php.txt).

And [geo64](geo64.py) is Python code to map geo lat/lon coordinates to base64 URLs.
