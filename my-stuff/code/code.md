---
layout: page
title: Code
permalink: /my-stuff/code/
---
{% assign code-collections = site.collections | where: "type", "code" %}
{% for collection in code-collections %}
    {{ collection.label }}
{% endfor %}
