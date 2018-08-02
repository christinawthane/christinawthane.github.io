---
title: Course # Page title and menu item
slug: Course  # last part of URL
---
{%- assign classes = site.data.classes | where:"class", "signingtime" -%}
{%- assign numclasses = classes | size -%}
<div class="row">
    <div class="col-lg-8 col-md-6" markdown="1">
The next course will be held in Fall 2018 for children 4 years old or younger and their parent(s)/caregivers.
Please check back for exact dates, or leave a message on the contact page to be notified when the schedule is released.

#### Schedule
The course runs 4 weeks and is offered in both [Wipkingen]({{site.baseurl}}{% link map.md %}#wipkingen) and [Schwamendingen]({{site.baseurl}}{% link map.md %}#schwamendingen) locations.

{% if numclasses > 0 %}
Upcoming classes:

{% for class in site.data.classes %}
- {{class.dayofweek}} at {{class.time}} on {{class.dates}}.
{%- case class.location -%}
    {%- when "schwamendingen" %} [Schwamendingen]({{site.baseurl}}{% link map.md %}#schwamendingen)
    {%- when "wipkingen" %} [Wipkingen]({{site.baseurl}}{% link map.md %}#wipkingen)
    {%- else %} {{class.location | capitalize}}
{%- endcase %}
{% endfor %}

{% endif %}
#### Costs
- First child: 125.-
- Second child: 25.-
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
