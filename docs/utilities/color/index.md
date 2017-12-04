---
title: Colors
layout: page
---

<p class="t-4">Colors are prefixed with <strong>c-</strong>, and can be used directly in Sass with their variable names. In HTML, add <strong>bg-</strong> for backgrounds or <strong>t-</strong> for text color.</p>

{% highlight html %}
<div class="bg-c-b300">Sky Blue background</div>
<div class="t-c-b300">Sky Blue text</div>
{% endhighlight %}

<div class="Alert t-c-g500">
	<p class="Alert__heading">Heads up!</p>
	<p>DreamHost is committed to the <a href="https://www.w3.org/WAI/intro/wcag" target="_blank">WCAG</a> AA standard for contrast ratios, which improves usability for users with low vision. When choosing color combinations, make sure they have at least 4.5:1 contrast ratio. <a href="https://webaim.org/resources/contrastchecker/" target="_blank">This handy contrast checker</a> can help.</p>
</div>

<hr />

<h2 class="m-bottom-1">Web Application Palette</h2>
<p class="m-bottom-4">The DreamHost palette is primarily derived from blue and white. The secondary palette consists of red, green, orange, and yellow. These colors are used across all web apps at DreamHost. Also included are dedicated background and grayscale classes which are derived from blue.</p>

<h3>Primary Palette</h3>
<div class="u-clearfix m-bottom-7">
	<div class="g-1_3 bg-c-b300 p-top-12">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128557;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Sky Blue</strong><br />Sass $c-b300<br />Hex #2BADE9<br />rgb(43,173,233)</p>
	</div><!--SkyBlue-->
	<div class="g-1_3 bg-c-b700 p-top-12">
	<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128557;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128557;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Midnight</strong><br />Sass $c-b700<br />Hex #071C26<br />rgb(7,28,38)</p>
	</div><!--Midnight-->
	<div class="g-1_3 bg-c-w100 p-top-12">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128557;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>White</strong><br />Sass $c-w100<br />Hex #FFFFFF<br />rgb(255,255,255)</p>
	</div><!--White-->
</div><!--Primary-->

<h3>Secondary Palette</h3>
<div class="u-clearfix m-bottom-7">
	<div class="g-1_4 bg-c-r300 p-top-12">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Coral</strong><br />Sass $c-r300<br />Hex #FFA700<br />rgb(255,74,72)</p>
</div><!--Coral-->
<div class="g-1_4 bg-c-t300 p-top-12">
	<ul class="t-center p-2 u-clearfix">
		<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128557;</li>
		<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
		<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
		<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
	</ul>
	<p class="p-3 bg-c-g100 m-0"><strong>Turquoise</strong><br />Sass $c-y300<br />Hex #FFDA00<br />rgb(255,218,0)</p>
</div><!--Turquoise-->
<div class="g-1_4 bg-c-o300 p-top-12">
	<ul class="t-center p-2 u-clearfix">
		<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128557;</li>
		<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
		<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
		<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
	</ul>
	<p class="p-3 bg-c-g100 m-0"><strong>Orange</strong><br />Sass $c-o300<br />Hex #FFA700<br />rgb(255,167,0)</p>
</div><!--Orange-->
<div class="g-1_4 bg-c-y300 p-top-12">
	<ul class="t-center p-2 u-clearfix">
		<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128557;</li>
		<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
		<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
		<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
	</ul>
	<p class="p-3 bg-c-g100 m-0"><strong>Sunflower</strong><br />Sass $c-t300<br />Hex #FFDA00<br />rgb(202,170,100)</p>
</div><!--Sunflower-->
</div><!--Secondary-->

<h3>Backgrounds</h3>
<div class="u-clearfix m-bottom-7">
	<div class="g-1_3 bg-c-b700 p-top-3">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128557;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128557;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Midnight</strong><br />Sass $c-b700<br />Hex #071C26<br />rgb(7,28,38)</p>
	</div><!--Midnight-->
	<div class="g-1_3 bg-c-g100 p-top-3">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128557;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Off White</strong><br />Sass $c-g100<br />Hex #F4F6F9<br />rgb(244,246,249)</p>
	</div><!--Off White-->
	<div class="g-1_3 bg-c-w100 p-top-3">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128557;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>White</strong><br />Sass $c-w100<br />Hex #FFFFFF<br />rgb(255,255,255)</p>
	</div><!--White-->
</div><!--Backgrounds-->

<h3>Grayscale</h3>
<div class="u-clearfix m-bottom-3">
	<div class="g-1_2 bg-c-g500 p-top-3">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128557;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128557;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Metal</strong><br />Sass $c-g500<br />Hex #434F58<br />rgb(67,79,88)</p>
	</div><!--Metal-->

	<div class="g-1_2 bg-c-g400 p-top-3">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Galactic</strong><br />Sass $c-g400<br />Hex #677983<br />rgb(144,158,168)</p>
	</div><!--Galactic-->
</div>

<div class="u-clearfix m-bottom-7">
	<div class="g-1_3 bg-c-g300 p-top-3">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128557;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Cloudy</strong><br />Sass $c-g300<br />Hex #AFBFC9<br />rgb(175,191,201)</p>
	</div><!--Cloudy-->

	<div class="g-1_3 bg-c-g200 p-top-3">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128557;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Smoke</strong><br />Sass $c-g200<br />Hex #E0E4E8<br />rgb(224,228,232)</p>
	</div><!--Smoke-->

	<div class="g-1_3 bg-c-g100 p-top-3">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128557;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Off White</strong><br />Sass $c-g100<br />Hex #F4F6F9<br />rgb(244,246,249)</p>
	</div><!--Off White-->
</div><!--Delineators-->

<hr />

<h2 class="m-bottom-1">Extended Palette</h2>
<p class="m-bottom-7">Our extended palette consists of a light and dark shade for each primary color. For convenience, different shades are numbered similarly to font weights, with 100 being lightest. Usage is also indicated by the headings below.</p>

<h3>Default</h3>
<div class="u-clearfix m-bottom-7">
	<div class="g-1_3 bg-c-b500 p-top-3">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128557;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Royal Blue</strong><br />Sass $c-b500<br />Hex #1176A5<br />rgb(17,118,165)</p>
	</div><!--Royal Blue-->
	<div class="g-1_3 bg-c-b300 p-top-3">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128557;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Sky Blue</strong><br />Sass $c-b300<br />Hex #2BADE9<br />rgb(43,173,233)</p>
	</div><!--Sky Blue-->
	<div class="g-1_3 bg-c-b100 p-top-3">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128557;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Baby Blue</strong><br />Sass $c-b100<br />Hex #CCEFFF<br />rgb(204,239,255)</p>
	</div><!--Baby Blue-->
</div><!--Primary Accents-->

<h3>Transactional</h3>
<div class="u-clearfix m-bottom-7">
	<div class="g-1_3 bg-c-o500 p-top-3">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Autumn</strong><br />Sass $c-o500<br />Hex #C97400<br />rgb(201,116,0)</p>
	</div><!--Autumn-->
	<div class="g-1_3 bg-c-o300 p-top-3">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128557;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Orange</strong><br />Sass $c-o300<br />Hex #FFA700<br />rgb(255,167,0)</p>
	</div><!--Orange-->
	<div class="g-1_3 bg-c-o100 p-top-3">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128557;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Peach</strong><br />Sass $c-o100<br />Hex #FFE0A6<br />rgb(255,224,166)</p>
	</div><!--Peach-->
</div><!--Transaction Accents-->

<h3>Positive</h3>
<div class="u-clearfix m-bottom-7">
	<div class="g-1_3 bg-c-t500 p-top-3">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Marina</strong><br />Sass $c-t500<br />Hex #0D8288<br />rgb(13,130,136)</p>
	</div><!--Marina-->
	<div class="g-1_3 bg-c-t300 p-top-3">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128557;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Turquoise</strong><br />Sass $c-t300<br />Hex #00CAAA<br />rgb(0,202,170)</p>
	</div><!--Turquoise-->
	<div class="g-1_3 bg-c-t100 p-top-3">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128557;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Ice</strong><br />Sass $c-t100<br />Hex #E5FEFF<br />rgb(229,254,255)</p>
	</div><!--Ice-->
</div><!--Positive Accents-->

<h3>Neutral</h3>
<div class="u-clearfix m-bottom-7">
	<div class="g-1_3 bg-c-y500 p-top-3">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128557;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Leather</strong><br />Sass $c-y500<br />Hex #AC942A<br />rgb(172,148,42)</p>
	</div><!--Leather-->
	<div class="g-1_3 bg-c-y300 p-top-3">
			<ul class="t-center p-2 u-clearfix">
				<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128557;</li>
				<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
				<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
				<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
			</ul>
			<p class="p-3 bg-c-g100 m-0"><strong>Sunflower</strong><br />Sass $c-y300<br />Hex #FFDA00<br />rgb(255,218,0)</p>
	</div><!--Sunflower-->
	<div class="g-1_3 bg-c-y100 p-top-3">
			<ul class="t-center p-2 u-clearfix">
				<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128557;</li>
				<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
				<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
				<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
			</ul>
			<p class="p-3 bg-c-g100 m-0"><strong>Magnolia</strong><br />Sass $c-y100<br />Hex #FFF4B6<br />rgb(255,244,182)</p>
	</div><!--Magnolia-->
</div><!--Neutral Accents-->

<h3>Negative</h3>
<div class="u-clearfix m-bottom-7">
	<div class="g-1_3 bg-c-r500 p-top-3">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128557;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Rust</strong><br />Sass $c-r500<br />Hex #C97400<br />rgb(184,12,3)</p>
	</div><!--Rust-->
	<div class="g-1_3 bg-c-r300 p-top-3">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Coral</strong><br />Sass $c-r300<br />Hex #FFA700<br />rgb(255,74,72)</p>
	</div><!--Coral-->
	<div class="g-1_3 bg-c-r100 p-top-3">
		<ul class="t-center p-2 u-clearfix">
			<li class="t-center t-c-w100 g-1_4"><span class="t-3">A</span><br />&#128557;</li>
			<li class="t-center t-c-w100 g-1_4"><span class="t-1">A</span><br />&#128557;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-3">A</span><br />&#128515;</li>
			<li class="t-center g-1_4 t-c-b700"><span class="t-1">A</span><br />&#128515;</li>
		</ul>
		<p class="p-3 bg-c-g100 m-0"><strong>Rose</strong><br />Sass $c-r100<br />Hex #FFE0A6<br />rgb(255,204,206)</p>
	</div><!--Coral-->
</div><!--Negative Accents-->

<hr />

<h2 class="m-bottom-1">Brand Palette</h2>
<p class="m-bottom-7">This is the full brand palette used at DreamHost.</p>

<div class="u-clearfix t-bold">
	<div class="g-1_4 c-lightest-blue l-block p-3 m-bottom-3">$lightest-blue</div>
	<div class="g-1_4 c-lighter-blue l-block p-3 m-bottom-3">$lighter-blue</div>
	<div class="g-1_4 c-light-blue l-block p-3 m-bottom-3">$light-blue</div>
	<div class="g-1_4 c-blue l-block p-3">$blue</div>
	<div class="g-1_4 c-dark-blue l-block p-3 m-bottom-3">$dark-blue</div>
	<div class="g-1_4 c-darker-blue l-block p-3 m-bottom-3">$darker-blue</div>
	<div class="g-1_4 c-darkest-blue l-block p-3 m-bottom-3">$darkest-blue</div>
</div>

<div class="u-clearfix t-bold m-bottom-4">
	<div class="g-1_3">
		<div class="c-lighter-teal p-1 m-right-0">$lighter-teal</div>
		<div class="c-light-teal p-1 m-right-0">$light-teal</div>
		<div class="c-teal p-1 m-right-0">$teal</div>
		<div class="c-dark-teal p-1 m-right-0">$dark-teal</div>
		<div class="c-darker-teal p-1 m-right-0">$darker-teal</div>
	</div>

	<div class="g-1_3">
		<div class="c-lighter-green p-1 m-right-0">$lighter-green</div>
		<div class="c-light-green p-1 m-right-0">$light-green</div>
		<div class="c-green p-1 m-right-0">$green</div>
		<div class="c-dark-green p-1 m-right-0">$dark-green</div>
		<div class="c-darker-green p-1 m-right-0">$darker-green</div>
	</div>

	<div class="g-1_3">
		<div class="c-lighter-salmon p-1 m-right-0">$lighter-salmon</div>
		<div class="c-light-salmon p-1 m-right-0">$light-salmon</div>
		<div class="c-salmon p-1 m-right-0">$salmon</div>
		<div class="c-dark-salmon p-1 m-right-0">$dark-salmon</div>
		<div class="c-darker-salmon p-1 m-right-0">$darker-salmon</div>
	</div>
</div>

<div class="u-clearfix t-bold m-bottom-4">
	<div class="g-1_3">
		<div class="c-lighter-orange p-1 m-right-0">$lighter-orange</div>
		<div class="c-light-orange p-1 m-right-0">$light-orange</div>
		<div class="c-orange p-1 m-right-0">$teal</div>
		<div class="c-dark-orange p-1 m-right-0">$dark-orange</div>
		<div class="c-darker-orange p-1 m-right-0">$darker-orange</div>
	</div>

	<div class="g-1_3">
		<div class="c-lighter-yellow p-1 m-right-0">$lighter-yellow</div>
		<div class="c-light-yellow p-1 m-right-0">$light-yellow</div>
		<div class="c-yellow p-1 m-right-0">$yellow</div>
		<div class="c-dark-yellow p-1 m-right-0">$dark-yellow</div>
		<div class="c-darker-yellow p-1 m-right-0">$darker-yellow</div>
	</div>

	<div class="g-1_3">
		<div class="c-lighter-red p-1 m-right-0">$lighter-red</div>
		<div class="c-light-red p-1 m-right-0">$light-red</div>
		<div class="c-red p-1 m-right-0">$red</div>
		<div class="c-dark-red p-1 m-right-0">$dark-red</div>
		<div class="c-darker-red p-1 m-right-0">$darker-red</div>
	</div>
</div>

<div class="u-clearfix t-bold m-bottom-4">
	<div class="g-1_6 c-lighter-grey p-2 m-bottom-3">$lighter-grey</div>
	<div class="g-1_6 c-light-grey p-2 m-bottom-3">$light-grey</div>
	<div class="g-1_6 c-grey p-2 m-bottom-3">$grey</div>
	<div class="g-1_6 c-dark-grey p-2 m-bottom-3">$dark-grey</div>
	<div class="g-1_6 c-darker-grey p-2 m-bottom-3">$darker-grey</div>
	<div class="g-1_6 c-black p-2 m-bottom-3">$black</div>
</div>

{% highlight html %}
<div class="bg-blue">Blue background</div>
<div class="t-blue">Blue text</div>
{% endhighlight %}
