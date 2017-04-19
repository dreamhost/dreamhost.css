---
title: Grid
layout: page
---

<p class="t-l">DreamHost uses Bourbon's Neat Sass grid alongside some helper classes from the most common layouts we need to create.</p>

<hr />

<img src="{{site.baseurl}}/assets/images/neat.png" alt="" class="m-bottom-0" />

<div class="m-bottom">
	<div class="u-clearfix">
		<div class="border p-s t-center g-1_2">.g-1_2</div>
		<div class="border p-s t-center g-1_2">.g-1_2</div>
	</div>
	<div class="u-clearfix">
		<div class="border p-s t-center g-1_3">.g-1_3</div>
		<div class="border p-s t-center g-2_3">.g-2_3</div>
	</div>
	<div class="u-clearfix">
		<div class="border p-s t-center g-1_4">.g-1_4</div>
		<div class="border p-s t-center g-3_4">.g-3_4</div>
	</div>
</div>

{% highlight html %}
<div class="u-clearfix">
	<div class="border p-s t-center g-1_2">.g-1_2</div>
	<div class="border p-s t-center g-1_2">.g-1_2</div>
</div>
<div class="u-clearfix">
	<div class="border p-s t-center g-1_3">.g-1_3</div>
	<div class="border p-s t-center g-2_3">.g-2_3</div>
</div>
<div class="u-clearfix">
	<div class="border p-s t-center g-1_4">.g-1_4</div>
	<div class="border p-s t-center g-3_4">.g-3_4</div>
</div>
{% endhighlight %}

<p class="p-bottom">See <a href="http://neat.bourbon.io/">Neat docs</a> for more information on using Sass if the helper classes aren't enough.</p>



