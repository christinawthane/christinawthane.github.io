---
layout: babywearing
---
{% assign grouped_blurbs = site.babywearing | group_by:"key"
%}{% for blurbs in grouped_blurbs
    %}{% assign blurblang = blurbs.items | group_by:"language"
    %}{% assign en = blurblang | where:"name", "en"
    %}{% assign de = blurblang | where:"name", "de"
    %}{% assign header = blurblang | where:"name", "head"
    %}{% assign footer = blurblang | where:"name", "foot"
    %}
<!-- {{blurbs.name}} -->
{% include homepage_section.html
        en=en.first.items.first
        de=de.first.items.first
        header=header.first.items.first
        footer=footer.first.items.first
%}{% endfor %}
