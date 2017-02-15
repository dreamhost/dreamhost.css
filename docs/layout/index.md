---
title: Layout
layout: page
---


<p class="t-large">Layout utilities are prefixed with l- and control the positioning of elements.</p>

<hr />

## Floats

<div>
	<p class="m-bottom-none t-small t-red t-bold">.t-float-left</p>
	<div class="u-clearfix">
		<p class="border p-small l-left">Left</p>
	</div>
</div>
<div>
	<p class="m-bottom-none t-small t-red t-bold">.l-float-right</p>
	<div class="u-clearfix">
		<p class="border p-small l-right">Right</p>
	</div>
</div>
<div>
	<p class="m-bottom-none t-small t-red t-bold">.l-float-none</p>
	<p class="border p-small l-none">None</p>
</div>

{% highlight html %}
<div class="u-clearfix">
	<div class="l-float-left">Left</div>
	<div class="l-float-right">Right</div>
</div>
{% endhighlight %}

## Display

<div>
	<p class="m-bottom-none t-small t-red t-bold">.l-centered</p>
	<div class="u-clearfix">
		<p class="border p-small l-centered" style="width: 400px;">Centered</p>
	</div>
</div>
<div class="m-bottom">
	<p class="m-bottom-none t-small t-red t-bold l-inline">.l-inline</p>
	<p class="border p-small l-inline">Inline</p>
</div>
<div>
	<p class="m-bottom-none t-small t-red t-bold l-inline">.l-inline-block</p>
	<p class="border p-small l-inline-block">Inline-block</p>
</div>
<div>
	<p class="m-bottom-none t-small t-red t-bold">.l-block</p>
	<p class="border p-small l-block">Block</p>
</div>

{% highlight html %}
<p class="l-centered" style="width: 400px;">Centered</p>
<p class="l-inline">Inline</p>
<p class="l-inline-block">Inline-block</p>
<p class="l-block">Block</p>

{% endhighlight %}

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


