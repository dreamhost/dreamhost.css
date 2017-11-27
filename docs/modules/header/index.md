---
title: Page Header
layout: page
---

<p class="t-5">The page header is the bar at the top of every DreamHost application that contains the logo and navigation</p>

<p class="alert alert--error">Watch out! The responsive part of the page header doesn't seem to work right now. Maybe it's <em>your</em> destiny to be the one to solve it. <a href="https://github.com/dreamhost/dreamhost.css/issues/73">Track issue.</a>

<hr />

<div class="Page-Header m-bottom">
	<div class="Page-Header__container">
		<a class="Page-Header__logo w-100" href="/dreamhost.css/"><img src="https://www.dreamhost.com/assets/images/logo.dreamhost.white.svg" width="157" height="23"></a>
		<ul class="Page-Header__nav Page-Header__only-show-large">
			<li><a href="/dreamhost.css/sass/variables" class="Page-Header__nav-link is-active">Active link</a></li>
			<li><a href="/dreamhost.css/typography" class="Page-Header__nav-link">Other</a></li>
		</ul>
	</div>
</div>

## Basic guidelines
<ul class="list list--disc m-bottom-2">
	<li>Logo:
		<ul class="list list--disc">
			<li>For internal sites (employees & customers), the moon symbol is enough</li>
			<li>For external sites (non-customers), use the full DreamHost logo</li>
		</ul>
	</li>
	<li>Colors:
		<ul class="list list--disc">
			<li>Default state is dark blue/black</li>
			<li>There is `.Page-Header--overlay` that makes the bar transparent and overlap any other content on the page. E.g. overlapping a nice big marketing photo</li>
		</ul>
	</li>
	<li>Page header content can vary. Use `.fluid-row` classes to space content.</li>
	<li><code>.Page-Header__nav</code> should contain the primary navigation</li>
	<li><code>.Page-Header__subnav`</code> is for all the secondary links we may need to provide</li>
	<li>Both nav and subnav supports lists within a <code>`.popover`</code> as a dropdown</li>
	<li>Responsive:
		<ul class="list list--disc">
			<li>The header was built around the idea of a single breakpoint. Below that breakpoint, the header will show a hamburger menu link with the header taking over the screen when shown. Larger than that breakpoint will display the header inline.</li>
			<li>There are some built-in responsive classes also but they will be inaccurate for most instances of the header. For specific breakpoints, you should use the `Page-Header--responsive()` mixin in the application's sass</li>
		</ul>
	</li>
</ul>

{% highlight html %}
<div class="Page-Header (Page-Header--responsive-[s/m/l])">
	<div class="Page-Header__container">
		<a class="Page-Header__logo" href="//www.dreamhost.com"><img src="https://www.dreamhost.com/assets/images/logo.dreamhost.white.svg" width="157" height="23"></a>
		<ul class="Page-Header__nav Page-Header__only-show-large">
			<li><a class="Page-Header__nav-link is-active" href="#">Link</a></li>
		</ul>
		<ul class="Page-Header__subnav Page-Header__only-show-small t-right">
			<li><button class="Page-Header__subnav-link js-toggle-mobile-menu">
				<svg class="icon icon-hamburger" viewBox="0 0 24 18">
					<path d="M0 5.9L0 7.1C0 7.1 0 7.1 0 7.1L24 7.1C24 7.1 24 7.1 24 7.1L24 5.9C24 5.9 24 5.9 24 5.9L0 5.9C0 5.9 0 5.9 0 5.9ZM0 0.9L0 2.1C0 2.1 0 2.1 0 2.1L24 2.1C24 2.1 24 2.1 24 2.1L24 0.9C24 0.9 24 0.9 24 0.9L0 0.9C0 0.9 0 0.9 0 0.9ZM0 15.9L0 17.1C0 17.1 0 17.1 0 17.1L24 17.1C24 17.1 24 17.1 24 17.1L24 15.9C24 15.9 24 15.9 24 15.9L0 15.9C0 15.9 0 15.9 0 15.9ZM0 12.2C0 12.2 24 12.2 24 12.2L24 10.9C24 10.9 0 10.9 0 10.9L0 12.2Z"></path>
				</svg><!-*remove whitespace
				-->Menu
			</button></li>
		</ul>
	</div>
</div>
{% endhighlight %}


