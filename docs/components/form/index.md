---
title: Form
layout: page
---

## Block inputs

<div class="form__group">
	<label class="form__label">Text label
		<input type="text" class="form__input" placeholder="Example placeholder content">
	</label>
</div>

{% highlight html %}
<div class="form__group">
	<label class="form__label">Text label
		<input type="text" class="form__input" placeholder="Example placeholder content">
	</label>
</div>
{% endhighlight %}

## Inline-block inputs

<div class="inline-input-container">
	<div class="inline-input-grid">
		<div class="inline-input-row">
			<div class="form__group form__group--inline">
				<label class="form__label">Half label
					<input type="text" class="form__input" placeholder="Example placeholder content">
				</label>
			</div>
			<div class="form__group form__group--inline">
				<label class="form__label">Half label
					<input type="text" class="form__input" placeholder="Example placeholder content">
				</label>
			</div>
		</div>
	</div>
</div>

{% highlight html %}
<div class="inline-input-container">
	<div class="inline-input-grid">
		<div class="inline-input-row">
			<div class="form__group form__group--inline">
				<label class="form__label">Half label
					<input type="text" class="form__input" placeholder="Example placeholder content">
				</label>
			</div>
			<div class="form__group form__group--inline">
				<label class="form__label">Half label
					<input type="text" class="form__input" placeholder="Example placeholder content">
				</label>
			</div>
		</div>
	</div>
</div>
{% endhighlight %}

## Textareas

<div class="form__group">
	<label class="form__label">Text label
		<p class="form__description">This caption supports a <strong>non-ludicrous</strong> amount of text. <a href="#">Learn more.</a></p>
		<textarea class="form__input" placeholder="Example placeholder content"></textarea>
	</label>
</div>

{% highlight html %}
<div class="form__group">
	<label class="form__label">Text label
		<p class="form__description">This caption supports a <strong>non-ludicrous</strong> amount of text. <a href="#">Learn more.</a></p>
		<textarea class="form__input" placeholder="Example placeholder content"></textarea>
	</label>
</div>
{% endhighlight %}

## Simple radios and check boxes

<div class="container-full-width">
	<div class="form__group g-1_2">
		<label class="form__label">Radio label</label>
		<label class="form__radio-check">
			<input type="radio" name="radio1" checked>
			<span class="form__radio-check-label">Example radio label</span>
		</label>
		<label class="form__radio-check">
			<input type="radio" name="radio1">
			<span class="form__radio-check-label">Example radio label</span>
		</label>
		<label class="form__radio-check">
			<input type="radio" name="radio1">
			<span class="form__radio-check-label">Example radio label</span>
		</label>
		<label class="form__radio-check">
			<input type="radio" name="radio1">
			<span class="form__radio-check-label">Example radio label</span>
		</label>
	</div>

	<div class="form__group g-1_2">
		<label class="form__label">Checkbox label</label>
		<label class="form__radio-check">
			<input type="checkbox" name="check1" checked>
			<span class="form__radio-check-label">Example checkbox label</span>
		</label>
		<label class="form__radio-check">
			<input type="checkbox" name="check1">
			<span class="form__radio-check-label">Example checkbox label</span>
		</label>
		<label class="form__radio-check">
			<input type="checkbox" name="check1">
			<span class="form__radio-check-label">Example checkbox label</span>
		</label>
		<label class="form__radio-check">
			<input type="checkbox" name="check1">
			<span class="form__radio-check-label">Example checkbox label</span>
		</label>
	</div>
</div>

{% highlight html %}
<div class="form__group g-1_2">
	<label class="form__label">Radio label</label>
	<label class="form__radio-check">
		<input type="radio" name="radio1" checked>
		<span class="form__radio-check-label">Example radio label</span>
	</label>
	<label class="form__radio-check">
		<input type="radio" name="radio1">
		<span class="form__radio-check-label">Example radio label</span>
	</label>
</div>
{% endhighlight %}

{% highlight html %}
<div class="form__group g-1_2">
	<label class="form__label">Checkbox label</label>
	<label class="form__radio-check">
		<input type="checkbox" name="check1" checked>
		<span class="form__radio-check-label">Example checkbox label</span>
	</label>
	<label class="form__radio-check">
		<input type="checkbox" name="check1">
		<span class="form__radio-check-label">Example checkbox label</span>
	</label>
</div>
{% endhighlight %}

## Complex radios and checkboxes

<div class="container-full-width">
	<div class="form__group">
		<label class="form__label">Radio label</label>
		<label class="form__radio-check">
			<input type="radio" name="radio1" checked>
			<span class="form__radio-check-label">Example radio label</span>
			<span class="form__radio-check-description">Help explain what this choice is</span>
		</label>
		<label class="form__radio-check">
			<input type="radio" name="radio1" checked>
			<span class="form__radio-check-label">Example radio label that is really long and probably wraps really awkwardly</span>
			<span class="form__radio-check-description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
		</label>
	</div>

	<div class="form__group">
		<label class="form__label">Checkbox label</label>
		<label class="form__radio-check">
			<input type="checkbox" name="check1" checked>
			<span class="form__radio-check-label">Example checkbox label that is really long and probably wraps really awkwardly</span>
			<span class="form__radio-check-description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
		</label>
		<label class="form__radio-check">
			<input type="checkbox" name="check1">
			<span class="form__radio-check-label">Example checkbox label that is really long and probably wraps really awkwardly</span>
			<span class="form__radio-check-description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
		</label>
	</div>
</div>

{% highlight html %}
<div class="form__group">
	<label class="form__label">Radio label</label>
	<label class="form__radio-check">
		<input type="radio" name="radio1" checked>
		<span class="form__radio-check-label">Example radio label</span>
		<span class="form__radio-check-description">Help explain what this choice is</span>
	</label>
	<label class="form__radio-check">
		<input type="radio" name="radio1" checked>
		<span class="form__radio-check-label">Example radio label that is really long and probably wraps really awkwardly</span>
		<span class="form__radio-check-description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
	</label>
</div>
{% endhighlight %}

{% highlight html %}
<div class="form__group">
	<label class="form__label">Checkbox label</label>
	<label class="form__radio-check">
		<input type="checkbox" name="check1" checked>
		<span class="form__radio-check-label">Example checkbox label that is really long and probably wraps really awkwardly</span>
		<span class="form__radio-check-description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
	</label>
	<label class="form__radio-check">
		<input type="checkbox" name="check1">
		<span class="form__radio-check-label">Example checkbox label that is really long and probably wraps really awkwardly</span>
		<span class="form__radio-check-description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
	</label>
</div>
{% endhighlight %}

## Select menus

<div class="form__group">
	<label class="form__label select">Select label
		<select class="form__select">
			<option>Option 1</option>
			<option>Option 2</option>
			<option>Option 3</option>
			<option>Option 4</option>
			<option>Option 5</option>
		</select>
	</label>
</div>

{% highlight html %}
<div class="form__group">
	<label class="form__label select">Select label
		<select class="form__select">
			<option>Option 1</option>
			<option>Option 2</option>
			<option>Option 3</option>
			<option>Option 4</option>
			<option>Option 5</option>
		</select>
	</label>
</div>
{% endhighlight %}

## Submit and cancel buttons

<div class="form__group form__group--actions">
	<input type="submit" class="btn" value="Submit">
	<input type="button" class="btn btn--outline" value="Cancel">
</div>

{% highlight html %}
<div class="form__group form__group--actions">
	<input type="submit" class="btn" value="Submit">
	<input type="button" class="btn btn--outline" value="Cancel">
</div>
{% endhighlight %}
