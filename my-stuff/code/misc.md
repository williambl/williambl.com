---
layout: page
title: Misc. things
permalink: /my-stuff/code/misc
---
{% for project in site.code-misc %}
[{{ project.name }}]({{ project.url }})
{% endfor %}
