---
title: Grid
layout: page
---

<p class="t-4">DreamHost uses Bourbon's Neat Sass grid alongside some helper classes from the most common layouts we need to create.</p>

<hr />

<img src="{{site.baseurl}}/assets/images/neat.png" alt="" class="m-bottom-0" />

<div class="m-bottom">
	<div class="u-clearfix m-bottom-2">
		<div class="bg-c-g300 p-s t-center g-1_2">.g-1_2</div>
		<div class="bg-c-g300 p-s t-center g-1_2">.g-1_2</div>
	</div>
	<div class="u-clearfix m-bottom-2">
		<div class="bg-c-g300 p-s t-center g-1_3">.g-1_3</div>
		<div class="bg-c-g300 p-s t-center g-2_3">.g-2_3</div>
	</div>
	<div class="u-clearfix m-bottom-2">
		<div class="bg-c-g300 p-s t-center g-1_4">.g-1_4</div>
		<div class="bg-c-g300 p-s t-center g-3_4">.g-3_4</div>
	</div>
</div>

{% highlight html %}
<div class="u-clearfix">
	<div class="g-1_2">.g-1_2</div>
	<div class="g-1_2">.g-1_2</div>
</div>
<div class="u-clearfix">
	<div class="g-1_3">.g-1_3</div>
	<div class="g-2_3">.g-2_3</div>
</div>
<div class="u-clearfix">
	<div class="g-1_4">.g-1_4</div>
	<div class="g-3_4">.g-3_4</div>
</div>
{% endhighlight %}

{% highlight css %}
.g-1_6 {@include span-columns(2)}
.g-1_4 {@include span-columns(3)}
.g-1_3 {@include span-columns(4)}
.g-1_2 {@include span-columns(6)}
.g-2_3 {@include span-columns(8)}
.g-3_4 {@include span-columns(9)}
.g-omega {@include omega()}
.g-shift-1 {@include shift(1)}
.g-shift-2 {@include shift(2)}
.g-shift-3 {@include shift(3)}
.g-shift-4 {@include shift(4)}
.g-shift-5 {@include shift(5)}
.g-shift-6 {@include shift(6)}
.g-shift-7 {@include shift(7)}
.g-shift-8 {@include shift(8)}
.g-shift-9 {@include shift(9)}
.g-shift-10 {@include shift(10)}
.g-shift-11 {@include shift(11)}
{% endhighlight %}

<p>See <a href="http://neat.bourbon.io/">Neat docs</a> for more information on using Neat with Sass if the helper classes aren't enough for your interface.</p>

<hr />
## Responsive
All helper classes are mobile-first responsive and can be modified by adding `__m` or `__l` to the end of a class, e.g `.g-1_3__medium`.

For example, the following will only have columns on screens larger than 750px.

<div class="u-clearfix m-bottom">
	<div class="bg-c-g300 p-1 g-1_2__m">responsive</div>
	<div class="bg-c-g300 p-1 g-1_2__m">responsive</div>
</div>

{% highlight css %}
<div class="u-clearfix">
	<div class="g-1_2__m">responsive</div>
	<div class="g-1_2__m">responsive</div>
</div>
{% endhighlight %}
