---
title: Checkboxes
layout: page
---

<p class="t-4">Checkboxes allow users to easily select one or more of several options.</p>

<hr />

<div class="container-full-width">
	<div class="dh-form__group g-1_2">
		<label class="dh-form__label">Checkbox label</label>
		<label class="dh-choice">
			<input type="checkbox" name="check1" checked>
			<span class="dh-choice__label">Example checkbox label</span>
		</label>
		<label class="dh-choice">
			<input type="checkbox" name="check1">
			<span class="dh-choice__label">Example checkbox label</span>
		</label>
		<label class="dh-choice">
			<input type="checkbox" name="check1">
			<span class="dh-choice__label">Example checkbox label</span>
		</label>
		<label class="dh-choice">
			<input type="checkbox" name="check1">
			<span class="dh-choice__label">Example checkbox label</span>
		</label>
	</div>
</div>

{% highlight html %}
<div class="dh-form__group g-1_2">
	<label class="dh-form__label">Checkbox label</label>
	<label class="dh-choice">
		<input type="checkbox" name="check1" checked>
		<span class="dh-choice__label">Example checkbox label</span>
	</label>
	<label class="dh-choice">
		<input type="checkbox" name="check1">
		<span class="dh-choice__label">Example checkbox label</span>
	</label>
</div>
{% endhighlight %}

<hr />
## Checkboxes With Descriptions
<div class="container-full-width">
	<div class="dh-form__group">
		<label class="dh-form__label">Checkbox label</label>
		<label class="dh-choice">
			<input type="checkbox" name="check1" checked>
			<span class="dh-choice__label">Example checkbox label that is really long and probably wraps really awkwardly</span>
			<span class="dh-choice__description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
		</label>
		<label class="dh-choice">
			<input type="checkbox" name="check1">
			<span class="dh-choice__label">Example checkbox label that is really long and probably wraps really awkwardly</span>
			<span class="dh-choice__description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
		</label>
	</div>
</div>

{% highlight html %}
<div class="dh-form__group">
	<label class="dh-form__label">Checkbox label</label>
	<label class="dh-choice">
		<input type="checkbox" name="check1" checked>
		<span class="dh-choice__label">Example checkbox label that is really long and probably wraps really awkwardly</span>
		<span class="dh-choice__description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
	</label>
	<label class="dh-choice">
		<input type="checkbox" name="check1">
		<span class="dh-choice__label">Example checkbox label that is really long and probably wraps really awkwardly</span>
		<span class="dh-choice__description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
	</label>
</div>
{% endhighlight %}

<hr />

## Checkbox as a toggle

<div class="dh-toggle">
    <input class="dh-toggle__input" type="checkbox" id="toggle" />
    <label for="toggle" class="dh-toggle__label">
        <span class="dh-toggle__visible"></span>
        <span class="dh-toggle__description">
            <span class="dh-toggle__checked">On</span>
            <span class="dh-toggle__unchecked">Off</span>
        </span>
    </label>
</div>

{% highlight html %}
<div class="dh-toggle">
    <input class="dh-toggle__input" type="checkbox" id="toggle" />
    <label for="toggle" class="dh-toggle__label">
        <span class="dh-toggle__visible"></span>
        <span class="dh-toggle__description">
            <span class="dh-toggle__checked">On</span>
            <span class="dh-toggle__unchecked">Off</span>
        </span>
    </label>
</div>
{% endhighlight %}
