---
title: Spacing
layout: page
---

<p class="t-l">All spacing is done using the same variaibles to ensure consistency. There are classes available to use either margins or padding to give elements external or internal spacing.</p>

<hr />

## Margins
<p class="t-l">Margin utilities are prefixed with m- and can be used to push other elements away from any side in t-shirt sizes.</p>

<p>Use the convention m-size or m-side-size, e.g m-l or m-bottom-l.</p>

<div>
	<p class="m-bottom-0 t-s t-red t-bold">.m-xl</p>
	<div class="p-s bg-lighter-grey m-bottom-xl">Larger</div>
</div>
<div>
	<p class="m-bottom-0 t-s t-red t-bold">.m-l</p>
	<div class="p-s bg-lighter-grey m-bottom-l">Large</div>
</div>
<div>
	<p class="m-bottom-0 t-s t-red t-bold">.m</p>
	<div class="p-s bg-lighter-grey m-bottom">Default</div>
</div>
<div>
	<p class="m-bottom-0 t-s t-red t-bold">.m-small</p>
	<div class="p-s bg-lighter-grey m-bottom-s">Small</div>
</div>
<div>
	<p class="m-bottom-0 t-s t-red t-bold">.m-smaller</p>
	<div class="p-s bg-lighter-grey m-bottom-xs">Smaller</div>
</div>
<div>
	<div class="p-s bg-lighter-grey m-bottom"></div>
</div>

{% highlight html %}
<div class="m-xl">Larger</div>
<div class="m-l">Large</div>
<div class="m">Default</div>
<div class="m-s">Small</div>
<div class="m-xs">Smaller</div>

{% endhighlight %}

## Padding
<p class="t-l">Padding utilities are prefixed with p- and can be used to add space inside an element on any side in t-shirt sizes.</p>

<p>Use the convention m-size or m-side-size, e.g m-large or m-bottom-l.</p>

<div>
	<p class="m-bottom-0 t-s t-red t-bold">.p-xl</p>
	<div class="p-xl border m-bottom">Larger</div>
</div>
<div>
	<p class="m-bottom-0 t-s t-red t-bold">.p-l</p>
	<div class="p-l border m-bottom">Large</div>
</div>
<div>
	<p class="m-bottom-0 t-s t-red t-bold">.p</p>
	<div class="p border m-bottom">Default</div>
</div>
<div>
	<p class="m-bottom-0 t-s t-red t-bold">.p-s</p>
	<div class="p-s border m-bottom">Small</div>
</div>
<div>
	<p class="m-bottom-0 t-s t-red t-bold">.p-xs</p>
	<div class="p-xs border m-bottom">Smaller</div>
</div>

{% highlight html %}
<div class="p-xl">Larger</div>
<div class="p-l">Large</div>
<div class="p">Default</div>
<div class="p-s">Small</div>
<div class="p-xs">Smaller</div>
{% endhighlight %}
