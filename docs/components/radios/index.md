---
title: Radio Buttons
layout: page
---

<p class="t-4">Radio Buttons allow users to easily select one of several options.</p>

<hr />

<div class="container-full-width">
	<div class="dh-form__group g-1_2">
		<label class="dh-form__label">Radio label</label>
		<label class="dh-choice">
			<input type="radio" name="radio1" checked>
			<span class="dh-choice__label">Example radio label</span>
		</label>
		<label class="dh-choice">
			<input type="radio" name="radio1">
			<span class="dh-choice__label">Example radio label</span>
		</label>
		<label class="dh-choice">
			<input type="radio" name="radio1">
			<span class="dh-choice__label">Example radio label</span>
		</label>
		<label class="dh-choice">
			<input type="radio" name="radio1">
			<span class="dh-choice__label">Example radio label</span>
		</label>
	</div>
</div>

{% highlight html %}
<div class="dh-form__group g-1_2">
	<label class="dh-form__label">Radio label</label>
	<label class="dh-choice">
		<input type="radio" name="radio1" checked>
		<span class="dh-choice__label">Example radio label</span>
	</label>
	<label class="dh-choice">
		<input type="radio" name="radio1">
		<span class="dh-choice__label">Example radio label</span>
	</label>
</div>
{% endhighlight %}

<hr />
## Radio Buttons With Descriptions

<div class="container-full-width">
	<div class="dh-form__group">
		<label class="dh-form__label">Radio label</label>
		<label class="dh-choice">
			<input type="radio" name="radio1" checked>
			<span class="dh-choice__label">Example radio label</span>
			<span class="dh-choice__description">Help explain what this choice is</span>
		</label>
		<label class="dh-choice">
			<input type="radio" name="radio1" checked>
			<span class="dh-choice__label">Example radio label that is really long and probably wraps really awkwardly</span>
			<span class="dh-choice__description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
		</label>
	</div>
</div>

{% highlight html %}
<div class="dh-form__group">
	<label class="dh-form__label">Radio label</label>
	<label class="dh-choice">
		<input type="radio" name="radio1" checked>
		<span class="dh-choice__label">Example radio label</span>
		<span class="dh-choice__description">Help explain what this choice is</span>
	</label>
	<label class="dh-choice">
		<input type="radio" name="radio1" checked>
		<span class="dh-choice__label">Example radio label that is really long and probably wraps really awkwardly</span>
		<span class="dh-choice__description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
	</label>
</div>
{% endhighlight %}
