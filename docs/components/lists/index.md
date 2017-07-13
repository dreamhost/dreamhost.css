---
title: Lists
layout: page
---

<!-- TO-DO: Document variations -->

<p class="t-l">Basic list styling, using BEM notation.</p>

<hr />

<ul class="list m-bottom">
	<li>List item</li>
	<li>List item</li>
</ul>

{% highlight html %}
<ul class="list">
	<li>List item</li>
	<li>List item</li>
</ul>
{% endhighlight%}

<hr />
## Bullets
<ul class="list list--disc m-bottom">
	<li>List item</li>
	<li>List item</li>
</ul>

{% highlight html %}
<ul class="list list--disc">
	<li>List item</li>
	<li>List item</li>
</ul>
{% endhighlight%}

<hr />
## Inline
<ul class="list list--inline m-bottom">
	<li>List item</li>
	<li>List item</li>
</ul>

{% highlight html %}
<ul class="list list--inline">
	<li>List item</li>
	<li>List item</li>
</ul>
{% endhighlight%}

<hr />
## Link lists

### Small bold
A slightly smaller and bolder list with no link underlines.
<ul class="list list--small-bold m-bottom">
	<li><a href="#">List item</a></li>
	<li><a href="#">List item</a></li>
</ul>

{% highlight html %}
<ul class="list list--small-bold">
	<li><a href="#">List item</a></li>
	<li><a href="#">List item</a></li>
</ul>
{% endhighlight%}

### Padding
Adds default padding around the list items for larger click areas.
<ul class="list list--padding m-bottom">
	<li><a href="#">List item</a></li>
	<li><a href="#">List item</a></li>
</ul>

{% highlight html %}
<ul class="list list--padding">
	<li><a href="#">List item</a></li>
	<li><a href="#">List item</a></li>
</ul>
{% endhighlight%}

