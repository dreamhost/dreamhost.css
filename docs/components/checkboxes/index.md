---
title: Checkboxes
layout: page
---

<p class="t-4">Checkboxes allow users to easily select one or more of several options.</p>

<hr />

<div class="container-full-width">
	<div class="Form__group g-1_2">
		<label class="Form__label">Checkbox label</label>
		<label class="Form__radio-check">
			<input type="checkbox" name="check1" checked>
			<span class="Form__radio-check-label">Example checkbox label</span>
		</label>
		<label class="Form__radio-check">
			<input type="checkbox" name="check1">
			<span class="Form__radio-check-label">Example checkbox label</span>
		</label>
		<label class="Form__radio-check">
			<input type="checkbox" name="check1">
			<span class="Form__radio-check-label">Example checkbox label</span>
		</label>
		<label class="Form__radio-check">
			<input type="checkbox" name="check1">
			<span class="Form__radio-check-label">Example checkbox label</span>
		</label>
	</div>
</div>

{% highlight html %}
<div class="Form__group g-1_2">
	<label class="Form__label">Checkbox label</label>
	<label class="Form__radio-check">
		<input type="checkbox" name="check1" checked>
		<span class="Form__radio-check-label">Example checkbox label</span>
	</label>
	<label class="Form__radio-check">
		<input type="checkbox" name="check1">
		<span class="Form__radio-check-label">Example checkbox label</span>
	</label>
</div>
{% endhighlight %}

<hr />
## Checkboxes With Descriptions
<div class="container-full-width">
	<div class="Form__group">
		<label class="Form__label">Checkbox label</label>
		<label class="Form__radio-check">
			<input type="checkbox" name="check1" checked>
			<span class="Form__radio-check-label">Example checkbox label that is really long and probably wraps really awkwardly</span>
			<span class="Form__radio-check-description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
		</label>
		<label class="Form__radio-check">
			<input type="checkbox" name="check1">
			<span class="Form__radio-check-label">Example checkbox label that is really long and probably wraps really awkwardly</span>
			<span class="Form__radio-check-description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
		</label>
	</div>
</div>

{% highlight html %}
<div class="Form__group">
	<label class="Form__label">Checkbox label</label>
	<label class="Form__radio-check">
		<input type="checkbox" name="check1" checked>
		<span class="Form__radio-check-label">Example checkbox label that is really long and probably wraps really awkwardly</span>
		<span class="Form__radio-check-description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
	</label>
	<label class="Form__radio-check">
		<input type="checkbox" name="check1">
		<span class="Form__radio-check-label">Example checkbox label that is really long and probably wraps really awkwardly</span>
		<span class="Form__radio-check-description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
	</label>
</div>
{% endhighlight %}