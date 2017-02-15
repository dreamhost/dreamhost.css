---
title: Grid
layout: page
---

<p class="t-large">DreamHost uses Bourbon's Neat Sass grid alongside some helper classes from the most common layouts we need to create.</p>

<hr />

<img src="/dreamhost.css/assets/images/neat.png" alt="" class="m-bottom-none" />

<div class="m-bottom">
	<div class="u-clearfix">
		<div class="border p-small l-centered g-1_2">.g-1_2</div>
		<div class="border p-small l-centered g-1_2">.g-1_2</div>
	</div>
	<div class="u-clearfix">
		<div class="border p-small l-centered g-1_3">.g-1_3</div>
		<div class="border p-small l-centered g-2_3">.g-2_3</div>
	</div>
	<div class="u-clearfix">
		<div class="border p-small l-centered g-1_4">.g-1_4</div>
		<div class="border p-small l-centered g-3_4">.g-3_4</div>
	</div>
</div>

{% highlight html %}
<div class="u-clearfix">
	<div class="border p-small l-centered g-1_2">.g-1_2</div>
	<div class="border p-small l-centered g-1_2">.g-1_2</div>
</div>
<div class="u-clearfix">
	<div class="border p-small l-centered g-1_3">.g-1_3</div>
	<div class="border p-small l-centered g-2_3">.g-2_3</div>
</div>
<div class="u-clearfix">
	<div class="border p-small l-centered g-1_4">.g-1_4</div>
	<div class="border p-small l-centered g-3_4">.g-3_4</div>
</div>
{% endhighlight %}

See [Neat docs](http://neat.bourbon.io/) for more information on using Sass if the helper classes aren't enough.



