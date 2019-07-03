---
title: Course # Page title and menu item
slug: Course  # last part of URL
---
{%- assign classes = site.data.classes | where:"class", "signingtime" -%}
{%- assign numclasses = classes | size -%}
<div class="row">
    <div class="col-lg-8 col-md-6" markdown="1">
Baby Signing Time (BST) 1 covers basic signs such as food and family that will be most useful at
home. I recommend you take this class first. BST
2 covers signs that are probably less used, but still useful, such as clothes
and transportation signs. I recommend you take this class after taking BST 1,
but that is not required. If the scheduling works out better for you to take it
in the opposite order, please feel free to do so.

#### Schedule
The course runs 4 weeks and is offered at both [Hebammenpraxis Zurich]({{site.baseurl}}{% link map.md %}#hebammenpraxis) (Wipkingen neighborhood) and [Gut Betucht]({{site.baseurl}}{% link map.md %}#gutbetucht) (Schwamendingen neighborhood) locations.

{% if numclasses > 0 %}
Upcoming classes:

{% for class in site.data.classes %}
- {: .signingtimeclass {% if class.cancelled -%}.cancelled{%- endif -%}}
  {%- if class.title %}**{{class.title}}.** {% endif %}{{class.dayofweek}} at {{class.time}} on {{class.dates}}.
{%- case class.location -%}
    {%- when "gutbetucht" %} [Gut Betucht]({{site.baseurl}}{% link map.md %}#gutbetucht)
    {%- when "hebammenpraxis" %} [Hebammenpraxis Zurich]({{site.baseurl}}{% link map.md %}#hebammenpraxis)
    {%- when "lilybee" %} [LilyBee]({{site.baseurl}}{% link map.md %}#lilybee)
    {%- else %} {{class.location | capitalize}}
{%- endcase -%}
{% endfor %}

{% endif %}
#### Costs
- First child: {{site.data.price.signingtime.first}}.-
- Second child: {{site.data.price.signingtime.additional}}.-
- Adults: Free (with child)

{% if numclasses > 0 -%}
<a href="{{site.baseurl}}{% link signingtime/register.html %}" class="btn btn-primary mr-2" role="button">Register</a>
{%- endif -%}
<a href="{{site.baseurl}}{% link contact.html %}" role="button" class="btn btn-primary">Request more information</a>

Registration includes a DVD and download code for Baby Signing Time Episode 1 with Rachel Coleman!

</div>
<div class="col-lg-4 col-md-6">
    <!--
    Karl Fredrickson (https://unsplash.com/photos/GEJxI_QRPwM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
    Unsplash (https://unsplash.com/collections/204878/hannahrayna-agaist-the-world?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
    -->
    <img alt="Girl waving at pink cherry blossoms. Photo by Karl Fredrickson on Unsplash" src="{{site.baseurl}}{% link images/karl-fredrickson-74973-unsplash_600x900.jpg %}" class="img-fluid" />
</div>
</div>
