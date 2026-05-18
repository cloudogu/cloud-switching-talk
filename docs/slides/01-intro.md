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
    Bye-bye Lock-in: <br/>Automate cloud switching<br/> using open source
</h1>

<p style="margin-top: 0">Matthias Eiserloh, Johannes Schnatterer 
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
<!--<a href='https://www.linkedin.com/in/' target="_blank"><i class='fab fa-linkedin'></i> in/</a>=-->
<a href='https://www.linkedin.com/in/jschnatterer' target="_blank" style="margin-left: 50px"><i class='fab fa-linkedin'></i> in/jschnatterer</a>
<a href='https://floss.social/@schnatterer' style="margin-left: 50px"><i class='fab fa-mastodon'></i> @schnatterer@floss.social</a>
</div>


<div class="title-version">
Version: 202605180832-425fd73
</div>

<p id="pdf" class="state-background" style="font-size: 70%">
    <a href="pdf/Bye-bye Lock-in Automate cloud switching using open source.pdf">
       <i class="far fa-file-pdf"></i>
</a></p>

Notes:
1. How come we implemented automatic cloud switching
2. how automatic cloud switching works
3. switch cloud provider life

Start with story how we came here 



## But Why?  <!-- .element style="margin-bottom: 0px"-->
<!-- .slide: id="Cloudogu-EcoSystem" data-auto-animate -->
<img data-src="images/EcoSystem-Layers-1.svg" title="Cloudogu EcoSystem shown in context/layers" width="99%" />

Notes:
* CES = OSS Platform for providing tool stacks 
* Tool-stacks for different use cases
  * PM Tools like Redmine/OpenProject, combined with wiki tools like blue spice media wiki
  * SW Dev: Git,CI server, statical code anaylsis, artifact repo
  * DevOps: ArgoCD, Prometheus, Vault
* Platform integrates
  * SSO
  * Central User Management
  * cross-tool menu
* AI
  * Cross tool queries 
  * central configuration of LLM Provider
* LowOps - simplifying operations
  * Pre-configured tools (SSO, KI, Menü)
  * Integrated monitoring
  * automatic backups
  * Automatable updates (incl. Major Updates). This allows a large number of isolated tenants to be kept up to date with little effort.
* Should run on every infra -> k8s good foundation



## But Why?  <!-- .element style="margin-bottom: 0px"-->
<!-- .slide: id="Cloudogu-EcoSystem" data-auto-animate -->
<img data-src="images/EcoSystem-Layers-2.svg" title="Cloudogu EcoSystem shown in context/layers" width="99%" />

Notes:
* We have been around for about 10 years
* Back then k8s not the de-facto standard it is today
* We started shipping VMs and now have several hundred instances in prod
* Migration must be automatated
* Idea: Migration concept for migrating VM -> K8s can also be used for k8s -> k8s.
* So we built it



## But Why?  <!-- .element style="margin-bottom: 0px"-->
<!-- .slide: id="Cloudogu-EcoSystem" data-auto-animate -->
<img data-src="images/EcoSystem-Layers.drawio.svg" title="Cloudogu EcoSystem shown in context/layers" width="99%" />

Notes:
With this we can now migrate between cloud provider, on prem, or every other k8s cluster

Why is this important for us?



### Infra independence through cloud switching
![](images/Infra-Independence.svg)

Notes:
* Central promise of CES is infra-independence, data sovereignty through free choice of cloud provider
* CES run in the cloud, to on-premises up to air-gapped environments for which we built special tooling
* for the cloud, we have partnerships with sovereign local providers:
  * Cloud & Heat from Dresden
  * MetalStack from Munich
  * Grass Merkur from Hanover
* Recently we became member of SCS, to use open Standards beyond k8s to extend infra independence 
* We also deployed on Hyperscalers if needed.
* With k8s fundamentally establishes infrastructure independence.
* Nothing special – everyone does k8s these days.
* With automatic cloud switching we go one step further, allowing easy change the underlying infrastructure layer i.e., the cloud provider. This can be done without user recognizing it.



<img src="images/buzzwords.jpg" class="floatRight fragment" style="border-radius: 5px">

### Reasons to switch


* 🇺🇸
  <i class="fas fa-arrow-left"></i><i class="fas fa-arrow-right"></i>
  🇪🇺
* 💶💶💶
  <i class="fas fa-arrow-right"></i>
  💶
* <i class="fas fa-cloud" style="color: #24A2DC;"></i>
  <i class="fas fa-arrow-left"></i><i class="fas fa-arrow-right"></i>
 🏠️
* ...

‼️ Ability to switch (digital sovereignty)

➡️ Multi Cloud

Notes:
* Why change at all?
* Political uncertainty -> Being able to bring workloads back to home country.
  Or maybe when times change, bring it back because, cheaper, more compute available, etc.
* Cost increase
* Migrating workloads from on prem to the cloud or back
* Can be many reasons.
* Most important for all: Ability to switch -> Also core aspect of digi sov
* On the tech-side all these use cases belong to the term multi-cloud
* A lot of buzzwords! Questions
  * Is Multi Cloud a mere buzzword to you?
  * Who is using multi cloud architectures?
* Let's define the buzzword multi cloud!



<!-- .slide: style="text-align: center" -->
### Multi Cloud Architecture Options

![](images/multi_cloud_architecture_options.png)

🌐 [architectelevator.com/cloud/hybrid-multi-cloud](https://architectelevator.com/cloud/hybrid-multi-cloud/)

Note:
* Gregor Hohpe: MC = "running workloads with more than one cloud provider"
* Distinction from hybrid: "splitting workload(s) across the cloud and on-premise." -> Decide which workloads to move out
* Multi-Cloud: Architecture decision -> Strategy

1. Arbitrary: No strategy, switch when too expensive, for example
2. Segmented:  different vendor preferences for different kind of workloads, e.g. using individual vendor strength (VMs/K8s; Confidentiality; AI/ML;
3. 1+2 not "true" multi-cloud, because no choice. Choice can be made possible using an abstraction layer (containers)
4. Parallel: Same app in multiple clouds -> More abstraction and complexity for better availability (using open source tools like k8s + LB; difficult for proprietary managed services)
5. Portable: "pinnacle of multi-cloud" (Multi-cloud abstraction frameworks such as Anthos)

But it does not have to be a heavyweight solution like this as we are going to show with our OSS solution