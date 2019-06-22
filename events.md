---
title: Upcoming events
layout: card
permalink: /events/
scrollspy: navbar
scrollspy_offset: 56
usebootstrapjs: true
usefontawesome: true
---
# Upcoming events

<style>
.thumbnail {
    width:75px;
    height:75px;
    background:#6EC038;
    display: inline-block;
}
</style>
<button type="button" class="btn btn-default btn-sm float-right" id="expandall">Expand All</button>
<ul class="collapsible-events">
{% assign events = site.data.events | sort: "date" %}
{% for event in events %}
{% assign uid = event.date | append: event.title | append: event.time | slugify: "latin" %}
<li class="event">
    <div class="event-head">
        <div class="border d-inline-block mr-3 rounded">
            <img src="{{ event.image }}" class="event-thumbnail p-1 rounded" alt="thumbnail"/>
        </div>
        <div class="stacked-date">
            <div class="dayofweek">{{ event.date | date: "%a" }}</div>
            <div class="dayofmonth">{{ event.date | date: "%d" }}</div>
            <div class="month">{{ event.date | date: "%b" }}</div>
        </div>
        <h5 class="event-title">{{ event.title | smartify }}</h5>
        <span class="event-time">{{ event.time }}</span>
        <a class="collapse-caret" data-toggle="collapse" href="#event-{{uid}}"
           aria-expanded="false" aria-controls="event1" aria-label="Expand">
        </a>
        <div class="event-rsvp">
            <button class="btn btn-primary" type="button" >RSVP</button>
        </div>
    </div>
    <div id="event-{{uid}}" class="event-body collapse">
        <p><b>Location:</b>
            {%- case event.location -%}
                {%- when "hebammenpraxis" %} <a href="{{site.baseurl}}{% link map.md %}#gutbetucht">Gut Betucht</a>
                {%- when "gutbetucht" %} <a href="{{site.baseurl}}{% link map.md %}#hebammenpraxis">Hebammenpraxis Zurich</a>
                {%- when "lilybee" %} <a href="{{site.baseurl}}{% link map.md %}#lilybee">LilyBee</a>
                {%- else %} <a href="{{site.baseurl}}{% link map.md %}">{{event.location | capitalize}}</a>
            {%- endcase %}
        </p>
        <p><b>Time:</b> {{ event.time }}</p>
        {% if event.alldates != nil %}
        <p><b>Dates:</b> {{ event.alldates }}</p>
        {% endif %}
        <p><b>Price:</b> {{ event.price}} CHF{{ event.price_extras }}</p>
        {{ event.description }}
        {% if event.more != nil -%}
        <a href="{{event.more}}" class="event-more">More Info...</a>
        {%- endif %}
    </div>
</li>
{% endfor %}
</ul>

<script>
// Hook to update caret CSS when events are expanded/collapsed
document.addEventListener('DOMContentLoaded', () => {
    function setCaret(evt) {
        var data = $(evt.target).data('bs.collapse');
        var shown = evt.type.includes("show");
        if( shown ) {
            $(data._triggerArray).addClass("expanded");
        } else {
            $(data._triggerArray).removeClass("expanded");
        }
        console.log("triggered by "+evt.target.id);
        console.log("Shown: "+shown)
    }
    $('.event-body').on('shown.bs.collapse', setCaret)
    $('.event-body').on('hidden.bs.collapse', setCaret)


    $("#expandall").on('click', (evt) => {
        console.log("Expand all");
        var $btn = $(evt.currentTarget)
        if( $btn.text().includes("Collapse")) {
            $(".event-body").collapse("hide");
            $btn.text("Expand All");
        } else {
            $(".event-body").collapse("show");
            $btn.text("Collapse All");
        }

    });
});
</script>