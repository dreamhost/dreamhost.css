---
title: Radio Buttons
layout: page
---

<p class="t-4">Radio Buttons allow users to easily select one of several options.</p>

<hr />

<div class="container-full-width">
	<div class="Form__group g-1_2">
		<label class="Form__label">Radio label</label>
		<label class="Form__radio-check">
			<input type="radio" name="radio1" checked>
			<span class="Form__radio-check-label">Example radio label</span>
		</label>
		<label class="Form__radio-check">
			<input type="radio" name="radio1">
			<span class="Form__radio-check-label">Example radio label</span>
		</label>
		<label class="Form__radio-check">
			<input type="radio" name="radio1">
			<span class="Form__radio-check-label">Example radio label</span>
		</label>
		<label class="Form__radio-check">
			<input type="radio" name="radio1">
			<span class="Form__radio-check-label">Example radio label</span>
		</label>
	</div>
</div>

{% highlight html %}
<div class="Form__group g-1_2">
	<label class="Form__label">Radio label</label>
	<label class="Form__radio-check">
		<input type="radio" name="radio1" checked>
		<span class="Form__radio-check-label">Example radio label</span>
	</label>
	<label class="Form__radio-check">
		<input type="radio" name="radio1">
		<span class="Form__radio-check-label">Example radio label</span>
	</label>
</div>
{% endhighlight %}

<hr />
## Radio Buttons With Descriptions

<div class="container-full-width">
	<div class="Form__group">
		<label class="Form__label">Radio label</label>
		<label class="Form__radio-check">
			<input type="radio" name="radio1" checked>
			<span class="Form__radio-check-label">Example radio label</span>
			<span class="Form__radio-check-description">Help explain what this choice is</span>
		</label>
		<label class="Form__radio-check">
			<input type="radio" name="radio1" checked>
			<span class="Form__radio-check-label">Example radio label that is really long and probably wraps really awkwardly</span>
			<span class="Form__radio-check-description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
		</label>
	</div>
</div>

{% highlight html %}
<div class="Form__group">
	<label class="Form__label">Radio label</label>
	<label class="Form__radio-check">
		<input type="radio" name="radio1" checked>
		<span class="Form__radio-check-label">Example radio label</span>
		<span class="Form__radio-check-description">Help explain what this choice is</span>
	</label>
	<label class="Form__radio-check">
		<input type="radio" name="radio1" checked>
		<span class="Form__radio-check-label">Example radio label that is really long and probably wraps really awkwardly</span>
		<span class="Form__radio-check-description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
	</label>
</div>
{% endhighlight %}
