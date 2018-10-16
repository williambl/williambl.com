---
layout: page
title: Games
permalink: /my-stuff/code/games
---
{% for project in site.code-games %}
[{{ project.name }}]({{ project.url }})
{% endfor %}
