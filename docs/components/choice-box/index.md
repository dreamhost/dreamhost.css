---
title: Choice Boxes
layout: page
---

<p class="t-5">Choice Boxes can add visual emphasis to radio buttons and checkboxes. Use along with the <a href="{{site.baseurl}}/utilities/grid/">grid</a> for positioning.</p>

<hr />

<h2>Choice Boxes As Radio Buttons</h2>
<div class="container-full-width">
    <ul class="u-clearfix">
        <li class="dh-choice-box g-1_2__m">
            <input type="radio" class="dh-choice-box__radio hidden" name="example" id="example" value="example">
            <label for="example" class="dh-choice-box__label">
                <div class="dh-choice-box__title">
                    Example Title
                </div>
                <div class="dh-choice-box__content">
                    Example Content
                </div>
            </label>
        </li>
        <li class="dh-choice-box g-1_2__m">
            <input type="radio" class="dh-choice-box__radio hidden" name="example" id="example2" value="example2">
            <label for="example2" class="dh-choice-box__label">
                <div class="dh-choice-box__title">
                    Example Title 2
                </div>
                <div class="dh-choice-box__content">
                    Example Content 2
                </div>
            </label>
        </li>
    </ul>
</div>

{% highlight html %}
<div class="container-full-width">
    <ul class="u-clearfix">
        <li class="dh-choice-box g-1_2__m">
            <input type="radio" class="dh-choice-box__radio hidden" name="example" id="example" value="example">
            <label for="example" class="dh-choice-box__label">
                <div class="dh-choice-box__title">
                    Example Title
                </div>
                <div class="dh-choice-box__content">
                    Example Content
                </div>
            </label>
        </li>
        <li class="dh-choice-box g-1_2__m">
            <input type="radio" class="dh-choice-box__radio hidden" name="example" id="example2" value="example2">
            <label for="example2" class="dh-choice-box__label">
                <div class="dh-choice-box__title">
                    Example Title 2
                </div>
                <div class="dh-choice-box__content">
                    Example Content 2
                </div>
            </label>
        </li>
    </ul>
</div>
{% endhighlight %}

<hr />

<h2>Choice Boxes As Checkboxes</h2>
<div class="container-full-width">
    <ul class="u-clearfix">
        <li class="dh-choice-box g-1_2__m">
            <input type="checkbox" class="dh-choice-box__radio hidden" name="example" id="example3" value="example">
            <label for="example3" class="dh-choice-box__label">
                <div class="dh-choice-box__title">
                    Example Title
                </div>
                <div class="dh-choice-box__content">
                    Example Content
                </div>
            </label>
        </li>
        <li class="dh-choice-box g-1_2__m">
            <input type="checkbox" class="dh-choice-box__radio hidden" name="example" id="example4" value="example2">
            <label for="example4" class="dh-choice-box__label">
                <div class="dh-choice-box__title">
                    Example Title 2
                </div>
                <div class="dh-choice-box__content">
                    Example Content 2
                </div>
            </label>
        </li>
    </ul>
</div>

{% highlight html %}
<div class="container-full-width">
    <ul class="u-clearfix">
        <li class="dh-choice-box g-1_2__m">
            <input type="checkbox" class="dh-choice-box__radio hidden" name="example" id="example3" value="example">
            <label for="example3" class="dh-choice-box__label">
                <div class="dh-choice-box__title">
                    Example Title
                </div>
                <div class="dh-choice-box__content">
                    Example Content
                </div>
            </label>
        </li>
        <li class="dh-choice-box g-1_2__m">
            <input type="checkbox" class="dh-choice-box__radio hidden" name="example" id="example4" value="example2">
            <label for="example4" class="dh-choice-box__label">
                <div class="dh-choice-box__title">
                    Example Title 2
                </div>
                <div class="dh-choice-box__content">
                    Example Content 2
                </div>
            </label>
        </li>
    </ul>
</div>
{% endhighlight %}
