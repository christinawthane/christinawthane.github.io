---
layout: home
---
<nav id="navbar" class="navbar navbar-light navbar-expand-lg bg-light sticky-top">
    {% include nav_maindrop.html %}
</nav>

<div class="container mt-4">
    <div class="card-deck">
        <div class="card text-center">
            <a class="card-full-link" href="{{site.baseurl}}{% link babywearing/index.html %}"></a>
            <img class="card-img-top mx-auto m-3" src="{{site.baseurl}}{% link images/profile_pic_oval_370.png %}" alt="Christine Bliven" style="height:200px; width:158px" />
            <div class="card-body">
                <section>
                    <h2 class="card-title en" lang="en">Babywearing</h2>
                    <h2 class="card-title de" lang="de">Trageberatungen</h2>
                </section>
                <button type="button" class="btn btn-dark en">English</button>
                <button type="button" class="btn btn-dark de">Deutsch</button>
            </div>
        </div>

        <div class="card text-center">
            <a class="card-full-link" href="{% link signingtime/index.html %}"></a>
            <img class="card-img-top mx-auto m-3" src="{{site.baseurl}}{% link images/bst_logo_vector.svg%}" alt="Baby Signing Time! logo" style="height:200px" />
            <div class="card-body">
                <section>
                    <h2 class="card-title en" lang="en">Baby Signing Time!</h2>
                </section>
                <button type="button" class="btn btn-dark en">English</button>
            </div>
        </div>
    </div>

    <section id="events">
    <div class="row text-light text-center">
        <div class="col mt-5 mb-2">
            <button type="button" class="btn btn-default btn-sm float-right position-relative"
             style="bottom: -10px" id="expandall">Expand All</button>
            <header>
                <h2>Events</h2>
            </header>
        </div>
    </div>
    <div class="card">
        <div class="card-body container-fluid">
            <section>
                {% include events.html expandbutton=false%}
            </section>
        </div>
    </div>
</section>
</div>
