---
title: Layout
layout: page
---

<p class="t-4">Layout utilities are prefixed with l- and control the positioning of elements.</p>

<hr />

## Floats

<div class="m-bottom">
	<p class="m-bottom-0 t-s t-red t-bold">.l-float-left</p>
	<div class="border t-light-grey">
		<div class="u-clearfix">
			<p class="bg-grey p-s l-float-left t-darker-grey">Left</p>
		</div>
	</div>
</div>
<div class="m-bottom">
	<p class="m-bottom-0 t-s t-red t-bold">.l-float-right</p>
	<div class="border t-light-grey">
		<div class="u-clearfix">
			<p class="bg-grey p-s l-float-right t-darker-grey">Right</p>
		</div>
	</div>
</div>

{% highlight html %}
<div class="u-clearfix">
	<div class="l-float-left">Left</div>
	<div class="l-float-right">Right</div>
</div>
{% endhighlight %}

<hr />

## Display

<div class="m-bottom">
	<p class="m-bottom-0 t-s t-red t-bold l-inline">.l-inline</p>
	<p class="p-s l-inline">Inline</p>
</div>
<div>
	<p class="m-bottom-0 t-s t-red t-bold l-inline">.l-inline-block</p>
	<p class="bg-grey p-s l-inline-block">Inline-block</p>
</div>
<div>
	<p class="m-bottom-0 t-s t-red t-bold">.l-block</p>
	<p class="bg-grey p-s l-block">Block</p>
</div>

{% highlight html %}
<p class="l-inline">Inline</p>
<p class="l-inline-block">Inline-block</p>
<p class="l-block">Block</p>

{% endhighlight %}

<hr />

## Positioning

These classes can be used for positioning specific elements in relation to their parents.

{% highlight html %}
<div class="l-pos-absolute">Absolute</div>
<div class="l-pos-relative">Relative</div>
<div class="l-pos-fixed">Fixed</div>
{% endhighlight %}

{% highlight html %}
<div class="l-pos-top">Top</div>
<div class="l-pos-right">Right</div>
<div class="l-pos-bottom">Bottom</div>
<div class="l-pos-left">Left</div>

<div class="l-pos-top-left">Top left</div>
<div class="l-pos-top-right">Top right</div>
<div class="l-pos-bottom-left">Bottom left</div>
<div class="l-pos-bottom-right">Bottom right</div>
{% endhighlight %}

<hr/>

## Responsive
All layout classes are responsive and can use the __m and __l modifier classes, e.g `l-block___m`.
