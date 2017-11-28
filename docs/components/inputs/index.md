---
title: Inputs & Select
layout: page
---

<p class="t-4">Mix and match inputs to create your own Forms.</p>

<hr />
## Block inputs

<div class="dh-form__group">
	<label for="input1" class="dh-form__label">Text label</label>
	<input id="input1" type="text" class="dh-input" placeholder="Example placeholder content">
</div>

{% highlight html %}
<div class="dh-form__group">
	<label for="input1" class="dh-form__label">Text label</label>
	<input id="input1" type="text" class="dh-input" placeholder="Example placeholder content">
</div>
{% endhighlight %}

<hr />
## Inline-block inputs

<div class="dh-form__inline">
	<div class="dh-form__inline-grid">
		<div class="dh-form__inline-row">
			<div class="dh-form__group">
				<label for="input2" class="dh-form__label">Half label</label>
				<input id="input2" type="text" class="dh-input" placeholder="Example placeholder content">
			</div>
			<div class="dh-form__group">
				<label for="input3" class="dh-form__label">Half label</label>
				<input id="input3" type="text" class="dh-input" placeholder="Example placeholder content">
			</div>
		</div>
	</div>
</div>

{% highlight html %}
<div class="dh-form__inline">
	<div class="dh-form__inline-grid">
		<div class="dh-form__inline-row">
			<div class="dh-form__group">
				<label for="input2" class="dh-form__label">Half label</label>
				<input id="input2" type="text" class="dh-input" placeholder="Example placeholder content">
			</div>
			<div class="dh-form__group">
				<label for="input3" class="dh-form__label">Half label</label>
				<input id="input3" type="text" class="dh-input" placeholder="Example placeholder content">
			</div>
		</div>
	</div>
</div>
{% endhighlight %}

<hr />
## Textareas

<div class="dh-form__group">
	<label for="textarea1" class="dh-form__label">Text label</label>
	<p class="dh-form__description">This caption supports a <strong>non-ludicrous</strong> amount of text. <a href="#">Learn more.</a></p>
	<textarea id="textarea1" class="dh-input" placeholder="Example placeholder content"></textarea>
</div>

{% highlight html %}
<div class="dh-form__group">
	<label for="textarea1" class="dh-form__label">Text label</label>
	<p class="dh-form__description">This caption supports a <strong>non-ludicrous</strong> amount of text. <a href="#">Learn more.</a></p>
	<textarea id="textarea1" class="dh-input" placeholder="Example placeholder content"></textarea>
</div>
{% endhighlight %}

<hr />
## Select menus

<div class="dh-form__group dh-form__group--select">
	<label for="select1" class="dh-form__label">Select label</label>
	<select id="select1" class="dh-select">
		<option>Option 1</option>
		<option>Option 2</option>
		<option>Option 3</option>
		<option>Option 4</option>
		<option>Option 5</option>
	</select>
</div>

{% highlight html %}
<div class="dh-form__group dh-form__group--select">
	<label for="select1" class="dh-form__label">Select label</label>
	<select id="select1" class="dh-select">
		<option>Option 1</option>
		<option>Option 2</option>
		<option>Option 3</option>
		<option>Option 4</option>
		<option>Option 5</option>
	</select>
</div>
{% endhighlight %}
