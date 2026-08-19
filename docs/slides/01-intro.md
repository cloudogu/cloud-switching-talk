<style>
/* You can optimize the font size of your presentation inline like so: */
  .reveal {
    font-family: Open Sans, sans-serif !important;
    font-size: 45px
  }
.reveal h1,
.reveal h2,
.reveal h3,
.reveal h4,
.reveal h5,
.reveal h6 {
  /* Save some space on the slides */
  margin: 0 0 20px 0;
}
</style>

<!-- .slide: style="text-align: center !important;font-size: 80%;"  -->
<!-- .slide: data-background-image="images/title-white.svg"  -->
<h1 class="title" style="margin-top: 0; font-size: 150%">
    <span class="title-accent">//</span> 
    Multi-Cloud in reality: <br/>Cloud-Switching automated <br/> as open source solution
</h1>

<p style="margin-top: 0">Johannes Schnatterer 
<br/>Cloudogu GmbH</p> 

<div class="state-background">
  <div style="display: inline-block; border: 2px solid #23a3dd; border-radius: 10px; overflow: hidden;">
    <a title="Link to slides" href="https://cloudogu.github.io/cloud-switching-talk/#/" style="display: block;">
      <img title="Link to slides" 
           src="images/slides-qr.svg" 
           style="display: block; margin: 0 auto; width: 200px; height: auto;" />
    <div style="margin: 0 0 10px; padding: 0; line-height: 0.5; font-size: 70%">
      Slides
    </div>
    </a>
  </div>
</div>

<div style="font-size:80%">
<a href='https://floss.social/@schnatterer' style="margin-left: 50px"><i class='fab fa-mastodon'></i> @schnatterer@floss.social</a>
<a href='https://www.linkedin.com/in/jschnatterer' target="_blank" style="margin-left: 50px"><i class='fab fa-linkedin'></i> in/jschnatterer</a>
</div>


<div class="title-version">
<!--VERSION-->
</div>

<p id="pdf" class="state-background" style="font-size: 70%">
    <a href="pdf/Multi-Cloud in reality Cloud-Switching automated as open source solution.pdf">
       <i class="far fa-file-pdf"></i>
</a></p>

Notes:

Present our concept for cloud switching, incl OSS impl.
Concretely: 
1. How come we implemented automatic cloud switching
2. how automatic cloud switching works
3. switch cloud provider life

Start with story how we came here 



## But Why?  <!-- .element style="margin-bottom: 0px"-->
<!-- .slide: id="Cloudogu-EcoSystem" data-auto-animate -->
<img data-src="images/EcoSystem-Layers.drawio.svg" title="Cloudogu EcoSystem shown in context/layers" width="99%" />

Notes:
* We have been around for about 10 years
* Back then k8s not the de-facto standard it is today
* We started shipping VMs and now have several hundred instances in prod
* Migration must be automated
* Idea: Migration concept for migrating VM -> K8s can also be used for k8s -> k8s.
* So we built it