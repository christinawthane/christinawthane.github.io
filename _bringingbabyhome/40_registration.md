---
title: Course # Page title and menu item
slug: Course  # last part of URL
---
{%- assign classes = site.data.events | where:"class", "bringingbabyhome" -%}
{%- assign numclasses = classes | size -%}
<div class="row">
    <div class="col-lg-8 col-md-6" markdown="1">
Bringing Baby Home consists of four three-hour sessions. It is expected that both
partners will attend all sessions. Course fees are per couple, and include course
materials.

#### Schedule
The course runs 4 weeks and is offered at
[Hebammenpraxis Zurich]({{site.baseurl}}{% link map.md %}#hebammenpraxis)
in the Wipkingen neighborhood.
{% if numclasses > 0 %}
Upcoming classes:

{% for class in classes %}
- {: .course {% if class.cancelled -%}.cancelled{%- endif -%}}
  {%- if class.title %}**{{class.title}}.** {% endif %}{{class.dayofweek}} at {{class.time}} on {{class.alldates}}.
{%- case class.location -%}
    {%- when "gutbetucht" %} [Gut Betucht]({{site.baseurl}}{% link map.md %}#gutbetucht)
    {%- when "hebammenpraxis" %} [Hebammenpraxis Zurich]({{site.baseurl}}{% link map.md %}#hebammenpraxis)
    {%- when "lilybee" %} [LilyBee]({{site.baseurl}}{% link map.md %}#lilybee)
    {%- else %} {{class.location | capitalize}}
{%- endcase -%}
{% endfor %}

{% endif %}
#### Cost

The course costs {{site.data.classinfo["bringingbabyhome"].price}} CHF per couple and includes:

- 12 hours of classes
- Course materials
- Access to Gottmann Institute online materials

{% if numclasses > 0 -%}
<a href="{{site.baseurl}}{% link rsvp.html %}" class="btn btn-primary mr-2" role="button">RSVP</a>
{%- endif -%}
<a href="{{site.baseurl}}{% link contact.html %}" role="button" class="btn btn-primary">Request more information</a>

</div>
<div class="col-lg-4 col-md-6">
    <!--
    Karl Fredrickson (https://unsplash.com/photos/GEJxI_QRPwM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
    Unsplash (https://unsplash.com/collections/204878/hannahrayna-agaist-the-world?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
    -->
    <img alt="Happy family in a field" src="{{site.baseurl}}{% link images/backlit_family.jpg %}" class="img-fluid" />
</div>
</div>
