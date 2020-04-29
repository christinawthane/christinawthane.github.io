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

        <div class="card text-center">
            <a class="card-full-link" href="https://LilyBeeZurich.etsy.com/"></a>
            <img class="card-img-top mx-auto m-3" src="{{site.baseurl}}{% link images/lilybee_crafts_logo.svg%}" alt="LilyBee Crafts logo" style="height:200px" />
            <div class="card-body">
                <section>
                    <h2 class="card-title en" lang="en">LilyBee Crafts</h2>
                </section>
                <button type="button" class="btn btn-dark en">English</button>
                <button type="button" class="btn btn-dark de">Deutsch</button>
            </div>
        </div>
    </div>

    <div class="card-deck mt-4">
        <div class="card text-center p-4">
            <div class="card-body">
                <a href="https://www.facebook.com/LilyBeeZurich/"><div class="logo-72">
                    <img src="{{site.baseurl}}{% link images/flogo_RGB_HEX-72.png %}" alt="Facebook" width="100%"/>
                </div></a>
                <a href="https://www.instagram.com/LilyBeeZurich/"><div class="p-2 logo-72" style="background:#FF0077; ">
                    <img src="{{site.baseurl}}{% link images/glyph-logo_May2016_white.svg %}" alt="Instagram" width="100%"/>
                </div></a>
                <a href="https://LilyBeeZurich.etsy.com/"><div class="logo-72" style="background: #F56402;">
                    <img src="{{site.baseurl}}{% link images/etsy-logo.svg %}" alt="Etsy" width="100%"/>
                </div></a>
            </div>
        </div>
    </div>

    <section id="events">
        <div class="row text-light text-center">
            <div class="col mt-5 mb-2">
                <button type="button" class="btn btn-light btn-sm float-right position-relative"
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