---
title: Spacing
layout: page
---

<p class="t-large">All spacing is done using the same variaibles to ensure consistency. There are classes available to use either margins or padding to give elements external or internal spacing.</p>

<hr />

## Margins
<p class="t-large">Margin utilities are prefixed with m- and can be used to push other elements away from any side in t-shirt sizes.</p>

<p>Use the convention m-size or m-side-size, e.g m-large or m-bottom-large.</p>

<div>
	<p class="m-bottom-none t-small t-red t-bold">.m-larger</p>
	<div class="p-small bg-lighter-grey m-bottom-larger">Larger</div>
</div>
<div>
	<p class="m-bottom-none t-small t-red t-bold">.m-large</p>
	<div class="p-small bg-lighter-grey m-bottom-large">Large</div>
</div>
<div>
	<p class="m-bottom-none t-small t-red t-bold">.m</p>
	<div class="p-small bg-lighter-grey m-bottom">Default</div>
</div>
<div>
	<p class="m-bottom-none t-small t-red t-bold">.m-small</p>
	<div class="p-small bg-lighter-grey m-bottom-small">Small</div>
</div>
<div>
	<p class="m-bottom-none t-small t-red t-bold">.m-smaller</p>
	<div class="p-small bg-lighter-grey m-bottom-smaller">Smaller</div>
</div>
<div>
	<div class="p-small bg-lighter-grey m-bottom"></div>
</div>

{% highlight html %}
<div class="m-larger">Larger</div>
<div class="m-large">Large</div>
<div class="m">Default</div>
<div class="m-small">Small</div>
<div class="m-smaller">Smaller</div>

{% endhighlight %}

## Padding
<p class="t-large">Padding utilities are prefixed with p- and can be used to add space inside an element on any side in t-shirt sizes.</p>

<p>Use the convention m-size or m-side-size, e.g m-large or m-bottom-large.</p>

<div>
	<p class="m-bottom-none t-small t-red t-bold">.p-larger</p>
	<div class="p-larger border m-bottom">Larger</div>
</div>
<div>
	<p class="m-bottom-none t-small t-red t-bold">.p-large</p>
	<div class="p-large border m-bottom">Large</div>
</div>
<div>
	<p class="m-bottom-none t-small t-red t-bold">.p</p>
	<div class="p border m-bottom">Default</div>
</div>
<div>
	<p class="m-bottom-none t-small t-red t-bold">.p-small</p>
	<div class="p-small border m-bottom">Small</div>
</div>
<div>
	<p class="m-bottom-none t-small t-red t-bold">.p-smaller</p>
	<div class="p-smaller border m-bottom">Smaller</div>
</div>

{% highlight html %}
<div class="p-larger">Larger</div>
<div class="p-large">Large</div>
<div class="p">Default</div>
<div class="p-small">Small</div>
<div class="p-smaller">Smaller</div>
{% endhighlight %}
