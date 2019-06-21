---
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
<ul class="collapsible-events">
<li class="event">
    <div class="event-head">
        <img src="https://via.placeholder.com/75/6EC038" class="mr-3" alt="thumbnail"/>
        <div class="stacked-date">
            <div class="dayofweek">Tues</div>
            <div class="dayofmonth">10</div>
            <div class="month">Sept</div>
        </div>
        <h5 class="event-title">Title</h5>
        <a class="collapse-caret" data-toggle="collapse" href="#event1"
           aria-expanded="false" aria-controls="event1" aria-label="Expand">
            <!-- <i class="fa fa-caret-down" aria-hidden="true"></i>
            <i class="fa fa-caret-up" aria-hidden="true"></i> -->
        </a>
        <div class="event-rsvp">
            <button class="btn btn-primary" type="button" >RSVP</button>
        </div>
    </div>
    <div id="event1" class="event-body collapse">
        Body
    </div>

</li>
<li class="event">
    <div class="event-head">
        <img src="https://via.placeholder.com/75/6EC038" class="mr-3" alt="thumbnail"/>
        <div class="stacked-date">
            <div class="dayofweek">Tues</div>
            <div class="dayofmonth">10</div>
            <div class="month">Sept</div>
        </div>
        <h5 class="event-title">Title</h5>
        <a class="collapse-caret" data-toggle="collapse" href="#event1"
           aria-expanded="false" aria-controls="event2" aria-label="Expand">
            <!-- <i class="fa fa-caret-down" aria-hidden="true"></i>
            <i class="fa fa-caret-up" aria-hidden="true"></i> -->
        </a>
        <div class="event-rsvp">
            <button class="btn btn-primary" type="button" >RSVP</button>
        </div>
    </div>
    <div id="event2" class="event-body collapse">
        Body
    </div>

</li>
<!--
<li class="event">
    <div class="event-head">
        <img src="https://via.placeholder.com/75/6EC038" class="mr-3 thumbnail" alt="thumbnail" width="75" height="75"/>
        <div class="stacked-date">
            <div class="dayofweek">Tues</div>
            <div class="dayofmonth">10</div>
            <div class="month">Sept</div>
        </div>
        <h5 class="event-title">Title</h5>
        <div class="event-rsvp">
            <a class="btn btn-primary">RSVP</a>
        </div>

    </div>
</li> -->

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
});
</script>
