---
layout: page
title: Video
permalink: /my-stuff/video/
---
{% assign video-collections = site.collections | where: "type", "video" %}
{% for collection in video-collections %}
[{{ collection.title }}]({{ collection.link }})
{% endfor %}