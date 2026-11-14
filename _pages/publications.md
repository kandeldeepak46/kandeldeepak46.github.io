---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<p>See my <a href="{{ site.author.googlescholar | escape }}">Google Scholar profile</a> for the latest publication list.</p>

{% assign publication_groups = site.publications | group_by: 'year' | sort: 'name' | reverse %}
{% for group in publication_groups %}
  <h2>{{ group.name }}</h2>
  {% assign entries = group.items | sort: 'title' %}
  {% for post in entries %}
    {% include publication-single.html %}
  {% endfor %}
{% endfor %}
