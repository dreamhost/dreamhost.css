---
title: Lists
layout: page
---

<!-- TO-DO: Document variations -->

<p class="t-l">Basic list styling, using BEM notation.</p>

<h3>Standard list</h3>
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

<h3>Big list</h3>
<ul class="list list--padding m-bottom">
	<li>List item</li>
	<li>List item</li>
</ul>

{% highlight html %}
<ul class="list">
	<li>List item</li>
	<li>List item</li>
</ul>
{% endhighlight%}

<h3>Bulleted list</h3>
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

<h3>Inline list</h3>
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
