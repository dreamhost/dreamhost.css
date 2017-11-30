---
title: Lists
layout: page
---

<!-- TO-DO: Document variations -->

<p class="t-4">Basic list styling, using BEM notation.</p>

<hr />

<ul class="dh-list m-bottom">
	<li>list item</li>
	<li>list item</li>
</ul>

{% highlight html %}
<ul class="dh-list">
	<li>list item</li>
	<li>list item</li>
</ul>
{% endhighlight%}

<hr />
## Bullets
<ul class="dh-list dh-list--disc m-bottom">
	<li>list item</li>
	<li>list item</li>
</ul>

{% highlight html %}
<ul class="dh-list dh-list--disc">
	<li>list item</li>
	<li>list item</li>
</ul>
{% endhighlight%}

<hr />
## Inline
<ul class="dh-list dh-list--inline m-bottom">
	<li>list item</li>
	<li>list item</li>
</ul>

{% highlight html %}
<ul class="dh-list dh-list--inline">
	<li>list item</li>
	<li>list item</li>
</ul>
{% endhighlight%}

<hr />

## Fluid Row
Displays list items in a row, with a specified primary row item which scales based on overall container width.
<div class="m-bottom">
	<ul class="Fluid-Row">
		<li class="Fluid-Row__item p-2 border">
			Row item
		</li>
		<li class="Fluid-Row__item Fluid-Row__item--primary p-2 border">
			Primary row item
		</li>
		<li class="Fluid-Row__item p-2 border">
			Row item
		</li>
	</ul>
</div>

{% highlight html %}
<ul class="Fluid-Row">
    <li class="Fluid-Row__item">
        Row item
    </li>
    <li class="Fluid-Row__item Fluid-Row__item--primary">
        Primary row item
    </li>
    <li class="Fluid-Row__item">
        Row item
    </li>
</ul>
{% endhighlight %}

<hr />

## Link lists

### Small bold
A slightly smaller and bolder list with no link underlines.
<ul class="dh-list dh-list--small-bold m-bottom">
	<li><a href="#">list item</a></li>
	<li><a href="#">list item</a></li>
</ul>

{% highlight html %}
<ul class="dh-list dh-list--small-bold">
	<li><a href="#">list item</a></li>
	<li><a href="#">list item</a></li>
</ul>
{% endhighlight%}

### Padding
Adds default padding around the list items for larger click areas.
<ul class="dh-list dh-list--padding m-bottom">
	<li><a href="#">list item</a></li>
	<li><a href="#">list item</a></li>
</ul>

{% highlight html %}
<ul class="dh-list dh-list--padding">
	<li><a href="#">list item</a></li>
	<li><a href="#">list item</a></li>
</ul>
{% endhighlight%}

### Menu
Adds default padding around the list items for larger click areas.
<ul class="dh-list dh-list__menu m-bottom">
	<li>
		<a href="#">
			<p class="dh-list__menu--title">list item</p>
			<p class="dh-list__menu--description">list item description</p>
		</a>
	</li>
	<li>
		<a href="#">
			<p class="dh-list__menu--title">list item</p>
			<p class="dh-list__menu--description">list item description</p>
		</a>
	</li>
</ul>

{% highlight html %}
<ul class="dh-list dh-list__menu">
	<li>
		<a href="#">
			<p class="dh-list__menu--title">list item</p>
			<p class="dh-list__menu--description">list item description</p>
		</a>
	</li>
	<li>
		<a href="#">
			<p class="dh-list__menu--title">list item</p>
			<p class="dh-list__menu--description">list item description</p>
		</a>
	</li>
</ul>
{% endhighlight%}

