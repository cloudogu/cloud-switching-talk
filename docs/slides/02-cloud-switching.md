# Automatic<br/> Cloud <br/>Switching
<!-- .slide: data-background-image="images/cloud-switching.jpg"  -->

Notes: 
* Moving on to our concept and implementation of automated cloud switching
* Let's start with an overview the process



![](images/migration-flow-delta.svg)
Notes:

* incremental approach 
* From source instance of CES to target instance
* Regular delta migrations
* Two DNS entries
* Minimizes downtime (esp for large instances, Terabytes of data) and enable early testing
* -> possibility of continuous testing the target instance 



![](images/migration-flow-final.svg)
Notes:
* When test successful, a final migration leaves source in maintenance mode
* Change DNS Entry -> Change infra without user noticing
* Import insight: DNS is key for digital sovereignty!  
  When using Domain of your cloud provider or when your domain is managed by cloud provider.  
  Dependency increases.
* As usual: It's always DNS!
* From this theoretical point of view, let's dive right into the practice.