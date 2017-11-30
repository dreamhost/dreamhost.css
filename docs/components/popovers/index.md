---
title: Popovers
layout: page
---

<p class="bg-c-w100">
  <p class="t-l">
    Popovers are used for any contextual content that shouldn't block the the user. Some common uses are dropdown link menus, hovercards, complex tooltips, etc. Below are some guidelines for usage and structure.
  </p>
</p>

<hr />

<section class="dh-popover-position p-bottom-7">

  <h2>Basic Usage</h2>
  <p>
    A popover, in its most basic form, looks like this.
  </p>

  {% highlight html %}
  <!-- A basic popover -->
  <div class="dh-popover-container on-click">
    <div class="dh-popover">
      <div class="dh-popover__wrapper">
        <div class="p-2">...</div>
      </div>
    </div>
    <a class="js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

  <p>
    Broken down; the first line creates the popover container. This is where the triggering method must also be declared: <code>click</code> or <code>hover</code>. In this example, it is declared as <code>click</code>.
  </p>

{% highlight html %}
  <div class="dh-popover-container on-click">
{% endhighlight %}

  <p>
    The next line creates the popover. This is where any optional popover paramaters can be declared. Details on the available popover parameters are provided in the sections below.
  </p>

{% highlight html %}
  <div class="dh-popover">
{% endhighlight %}

  <p>
    Next, the popover wrapper is created. This wrapper class allows optional max-height to be set on popovers. This is especially useful for popovers that function as dropdown menus.
  </p>

{% highlight html %}
  <div class="dh-popover__wrapper">
{% endhighlight %}

  <p>
    Popovers don't have any padding by default, however padding can be set by nesting a divider inside of the <code>dh-popover__wrapper</code>. The contents of the popover are contained within the divider as well.
  </p>

{% highlight html %}
  <div class="p-2">...</div>
{% endhighlight %}

  <p>
    The <code>js-toggle-popover</code> class must be included on the element that will trigger the popover. In this case, it is an anchor tag.
  </p>

{% highlight html %}
  <a class="js-toggle-popover">Click here</a>
{% endhighlight %}

</section>

<hr />

<section class="dh-popover-hover p-bottom-7">

  <H2>Triggering</h2>

  <p>
    Popovers can be triggered two ways: on click or hover. Click events require JavaScript. To enable click popovers, append <code>.on-click</code> to the <code>.dh-popover-container</code>. For hover popovers, append <code>.on-hover</code> instead.
  </p>

  <div class="container u-clearfix bg-c-g100 p-2">

    <div class="dh-popover-container on-click g-1_2">
      <div class="dh-popover has-caret">
        <div class="p-2">
          This popover only activates on click.
        </div>
      </div>
      <a class="dh-button js-toggle-popover t-center w-100">Click popover</a>
      <p class="m-top-1 m-bottom-0 l-pos-absolute w-100"><code class="t-1 w-100 t-center bg-lighter-grey t-darker-grey">.on-click</code></p>
    </div>

    <div class="dh-popover-container on-hover g-1_2">
      <div class="dh-popover has-caret">
        <div class="p-2">
          This popover only activates on hover.
        </div>
      </div>
      <a class="dh-button t-center w-100">Hover popover</a>
      <p class="m-top-1 m-bottom-0 l-pos-absolute w-100"><code class="t-1 w-100 t-center bg-lighter-grey t-darker-grey">.on-hover</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Click popover -->
  <div class="dh-popover-container on-click">
    <div class="dh-popover">
      <div class="dh-popover__wrapper">
        <div class="p-2">...</div>
      </div>
    </div>
    <a class="dh-button js-toggle-popover">Click here</a>
  </div>

  <!-- Hover popover -->
  <div class="dh-popover-container on-hover">
    <div class="dh-popover">
      <div class="dh-popover__wrapper">
        <div class="p-2">...</div>
      </div>
    </div>
    <a class="dh-button js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

</section>

<hr />

<section class="dh-popover-caret">

  <h2>Caret</h2>

  <p>
    The popover caret it optional. Append <code>.has-caret</code> accordingly. Generally, carets should only be used when the triggering element (ex: the yellow button below) does not also use a caret. That will protect against potential caret alignment issues.
  </p>

  <div class="container u-clearfix bg-c-g100 p-2">

    <div class="dh-popover-container on-click g-1_2">
      <div class="dh-popover">
        <div class="p-2">
          This popover does not have a caret.
        </div>
      </div>
      <a class="dh-button js-toggle-popover w-100 t-center">Popover Without Caret</a>
    </div>

    <div class="dh-popover-container on-click g-1_2">
      <div class="dh-popover has-caret">
        <div class="p-2">
          This popover has a caret.
        </div>
      </div>
      <a class="dh-button js-toggle-popover w-100 t-center">Popover With Caret</a>
      <p class="m-top-1 m-bottom-0 l-pos-absolute w-100"><code class="t-1 w-100 t-center bg-lighter-grey t-darker-grey">.has-caret</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Popover with caret -->
  <div class="dh-popover-container on-click">
    <div class="dh-popover has-caret">
      <div class="dh-popover__wrapper">
        <div class="p-2">...</div>
      </div>
    </div>
    <a class="dh-button js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

</section>

<hr />

<section class="dh-popover-position p-bottom-7">

  <h2>Alignment &amp; Positioning</h2>
  <p>
    Popovers can be aligned top, right, bottom, or left. By default, they are top aligned.
  </p>

  <p class="t-c-r300 t-bold m-bottom-0">Popover Alignment</p>

  <div class="container u-clearfix bg-c-g100 p-2">
    <div class="dh-popover-container on-click g-1_4">
      <div class="dh-popover has-caret">
        <div class="p-1">
          This is a top aligned popover with a caret.
        </div>
      </div>
      <a class="dh-button js-toggle-popover w-100 t-center">Top Aligned</a>
    </div>

    <div class="dh-popover-container on-click g-1_4">
      <div class="dh-popover dh-popover--right has-caret">
        <div class="p-1">
          This is a right aligned popover with a caret.
        </div>
      </div>
      <a class="dh-button js-toggle-popover w-100 t-center">Right Aligned</a>
      <p class="m-top-1 m-bottom-0 l-pos-absolute w-100"><code class="t-1 w-100 t-center bg-lighter-grey t-darker-grey">.dh-popover--right</code></p>
    </div>

    <div class="dh-popover-container on-click g-1_4">
      <div class="dh-popover dh-popover--bottom has-caret">
        <div class="p-1">
          This is a bottom aligned popover with a caret.
        </div>
      </div>
      <a class="dh-button js-toggle-popover w-100 t-center">Bottom Aligned</a>
      <p class="m-top-1 m-bottom-0 l-pos-absolute w-100"><code class="t-1 w-100 t-center bg-lighter-grey t-darker-grey">.dh-popover--bottom</code></p>
    </div>

    <div class="dh-popover-container on-click g-1_4">
      <div class="dh-popover dh-popover--left has-caret">
        <div class="p-1">
          This is a left aligned popover with a caret.
        </div>
      </div>
      <a class="dh-button js-toggle-popover w-100 t-center">Left Aligned</a>
      <p class="m-top-1 m-bottom-0 l-pos-absolute w-100"><code class="t-1 w-100 t-center bg-lighter-grey t-darker-grey">.dh-popover--left</code></p>
    </div>
  </div>

  {% highlight html %}
  <!-- Right aligned popover -->
  <div class="dh-popover-container on-click">
    <div class="dh-popover dh-popover--right">
      <div class="dh-popover__wrapper">
        <div class="p-2">...</div>
      </div>
    </div>
    <a class="dh-button js-toggle-popover">Click here</a>
  </div>

  <!-- Bottom aligned popover -->
  <div class="dh-popover-container on-click">
    <div class="dh-popover dh-popover--bottom">
      <div class="dh-popover__wrapper">
        <div class="p-2">...</div>
      </div>
    </div>
    <a class="dh-button js-toggle-popover">Click here</a>
  </div>

  <!-- Left aligned popover -->
  <div class="dh-popover-container on-click">
    <div class="dh-popover dh-popover--left">
      <div class="dh-popover__wrapper">
        <div class="p-2">...</div>
      </div>
    </div>
    <a class="dh-button js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

</section>

<section class="dh-popover-alignment p-bottom-7">

  <p class="t-c-r300 t-bold m-bottom-0">Popover Positioning</p>

  <p>
    There are left and right positioning classes for popovers that are top and bottom aligned. Adding a class <code>dh-popover--flush-left</code> or <code>dh-popover--flush-right</code> will adjust the popover's positioning and transform origin accordingly. By default, popovers are center positioned.
  </p>

  <div class="container u-clearfix bg-c-g100 p-2">

    <div class="dh-popover-container on-click g-1_2">
      <div class="dh-popover dh-popover--flush-left has-caret">
        <div class="p-2">
          This is a top aligned popover that is flushed left with the clicked element.
        </div>
      </div>
      <a class="dh-button js-toggle-popover w-100 t-center">Flush Left</a>
      <p class="m-top-1 m-bottom-0 l-pos-absolute w-100"><code class="t-1 w-100 t-center bg-lighter-grey t-darker-grey">.dh-popover--flush-left</code></p>
    </div>

    <div class="dh-popover-container on-click g-1_2 p-bottom-large">
      <div class="dh-popover dh-popover--flush-right has-caret">
        <div class="p-2">
          This is a top aligned popover that is flushed right with the clicked element.
        </div>
      </div>
      <a class="dh-button js-toggle-popover w-100 t-center">Flush Right</a>
      <p class="m-top-1 m-bottom-0 l-pos-absolute w-100"><code class="t-1 w-100 t-center bg-lighter-grey t-darker-grey">.dh-popover--flush-right</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Flushed left popover -->
  <div class="dh-popover-container on-click">
    <div class="dh-popover dh-popover--flush-left">
      <div class="dh-popover__wrapper">
        <div class="p-2">...</div>
      </div>
    </div>
    <a class="dh-button js-toggle-popover">Click here</a>
  </div>

  <!-- Flushed right popover -->
  <div class="dh-popover-container on-click">
    <div class="dh-popover dh-popover--flush-right">
      <div class="dh-popover__wrapper">
        <div class="p-2">...</div>
      </div>
    </div>
    <a class="dh-button js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

  <p>
    There are also top and bottom positioning classes for popover that are left or right aligned. Adding classes <code>dh-popover--flush-top</code> or <code>dh-popover--flush-bottom</code> will adjust the popover's positioning and transform origin accordingly. By default, popovers are middle positioned.
  </p>

  <div class="container u-clearfix bg-c-g100 p-2">

    <div class="dh-popover-container on-click g-1_2">
      <div class="dh-popover dh-popover--left dh-popover--flush-top has-caret">
        <div class="p-2">
          This is a left aligned popover that is flushed top with the clicked element.
        </div>
      </div>
      <a class="dh-button js-toggle-popover w-100 t-center">Flush Top</a>
      <p class="m-top-1 m-bottom-0 l-pos-absolute w-100"><code class="t-1 w-100 t-center bg-lighter-grey t-darker-grey">.dh-popover--flush-top</code></p>
    </div>

    <div class="dh-popover-container on-click g-1_2">
      <div class="dh-popover dh-popover--left dh-popover--flush-bottom has-caret">
        <div class="p-2">
          This is a left aligned popover that is flushed bottom with the clicked element.
        </div>
      </div>
      <a class="dh-button js-toggle-popover w-100 t-center">Flush Bottom</a>
      <p class="m-top-1 m-bottom-0 l-pos-absolute w-100"><code class="t-1 w-100 t-center bg-lighter-grey t-darker-grey">.dh-popover--flush-bottom</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Flushed top popover -->
  <div class="dh-popover-container on-click">
    <div class="dh-popover dh-popover--left dh-popover--flush-top">
      <div class="dh-popover__wrapper">
        <div class="p-2">...</div>
      </div>
    </div>
    <a class="dh-button js-toggle-popover">Click here</a>
  </div>

  <!-- Flushed bottom popover -->
  <div class="dh-popover-container on-click">
    <div class="dh-popover dh-popover--left dh-popover--flush-bottom">
      <div class="dh-popover__wrapper">
        <div class="p-2">...</div>
      </div>
    </div>
    <a class="dh-button js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

</section>

<hr />

<section class="dh-popover-themes p-bottom-7">

  <h2>Themes</h2>

  <p>
    There are 4 popover themes: default (light), dark, error, and success. Apply <code>.dh-popover--dark</code>, <code>.dh-popover--error</code>, or <code>.dh-popover--success</code> accordingly. Omit all of the above to use the default theme.
  </p>

  <div class="container u-clearfix bg-c-g100 p-2">

    <div class="dh-popover-container on-click g-1_4">
      <div class="dh-popover has-caret">
        <div class="p-2">
          This is a popover using the default theme.
        </div>
      </div>
      <a class="dh-button js-toggle-popover w-100 t-center">Default</a>
    </div>

    <div class="dh-popover-container on-click g-1_4">
      <div class="dh-popover dh-popover--dark has-caret">
        <div class="p-2">
          This is a popover using the dark theme.
        </div>
      </div>
      <a class="dh-button js-toggle-popover w-100 t-center">Dark</a>
      <p class="m-top-1 m-bottom-0 l-pos-absolute w-100"><code class="t-1 w-100 t-center bg-lighter-grey t-darker-grey">.dh-popover--dark</code></p>
    </div>

    <div class="dh-popover-container on-click g-1_4">
      <div class="dh-popover dh-popover--error has-caret">
        <div class="p-2">
          This is a popover using the error theme.
        </div>
      </div>
      <a class="dh-button js-toggle-popover w-100 t-center">Error</a>
      <p class="m-top-1 m-bottom-0 l-pos-absolute w-100"><code class="t-1 w-100 t-center bg-lighter-grey t-darker-grey">.dh-popover--error</code></p>
    </div>

    <div class="dh-popover-container on-click g-1_4">
      <div class="dh-popover dh-popover--success has-caret">
        <div class="p-2">
          This is a popover using the success theme.
        </div>
      </div>
      <a class="dh-button js-toggle-popover w-100 t-center">Success</a>
      <p class="m-top-1 m-bottom-0 l-pos-absolute w-100"><code class="t-1 w-100 t-center bg-lighter-grey t-darker-grey">.dh-popover--success</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Dark theme popover -->
  <div class="dh-popover-container on-click">
    <div class="dh-popover dh-popover--dark">
      <div class="dh-popover__wrapper">
        <div class="p-2">...</div>
      </div>
    </div>
    <a class="dh-button js-toggle-popover">Click here</a>
  </div>

  <!-- Error theme popover -->
  <div class="dh-popover-container on-click">
    <div class="dh-popover dh-popover--error">
      <div class="dh-popover__wrapper">
        <div class="p-2">...</div>
      </div>
    </div>
    <a class="dh-button js-toggle-popover">Click here</a>
  </div>

  <!-- Success theme popover -->
  <div class="dh-popover-container on-click">
    <div class="dh-popover dh-popover--success">
      <div class="dh-popover__wrapper">
        <div class="p-2">...</div>
      </div>
    </div>
    <a class="dh-button js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

</section>

<hr />

<section class="dh-popover-sizes p-bottom-7">

  <h2>Sizes</h2>

  <p>
    There are 5 popover sizes, numbered 1 - 5 in order of smallest to largest. They don't apply inner padding, but instead change the width of the overall popover. Apply <code>.dh-popover--1</code>, <code>.dh-popover--2</code>, etc.
  </p>

  <div class="container u-clearfix bg-c-g100 p-5">

    <div class="dh-popover-container on-click g-1_3">
      <div class="dh-popover dh-popover--1 has-caret">
        <div class="p-2">
          This is a size 1 popover.
        </div>
      </div>
      <a class="dh-button js-toggle-popover w-100 t-center">Size 1</a>
      <p class="m-top-1 m-bottom-0 l-pos-absolute w-100"><code class="t-1 w-100 t-center bg-lighter-grey t-darker-grey">.dh-popover--1</code></p>
    </div>

    <div class="dh-popover-container on-click g-1_3">
      <div class="dh-popover dh-popover--2 has-caret">
        <div class="p-2">
          This is a size 2 (default) popover.
        </div>
      </div>
      <a class="dh-button js-toggle-popover w-100 t-center">Size 2</a>
      <p class="m-top-1 m-bottom-0 l-pos-absolute w-100"><code class="t-1 w-100 t-center bg-lighter-grey t-darker-grey">.dh-popover--2</code></p>
    </div>

    <div class="dh-popover-container on-click g-1_3">
      <div class="dh-popover has-caret">
        <div class="p-2">
          This is a size 3 popover.
        </div>
      </div>
      <a class="dh-button js-toggle-popover w-100 t-center">Size 3</a>
      <p class="m-top-1 m-bottom-0 l-pos-absolute w-100"><code class="t-1 w-100 t-center bg-lighter-grey t-darker-grey">.dh-popover--3</code></p>
    </div>
  </div>

  <div class="container u-clearfix bg-c-g100 p-5">
    <div class="dh-popover-container on-click g-1_2">
      <div class="dh-popover dh-popover--4 has-caret">
        <div class="p-2">
          This is a size 4 popover.
        </div>
      </div>
      <a class="dh-button js-toggle-popover w-100 t-center">Size 4</a>
      <p class="m-top-1 m-bottom-0 l-pos-absolute w-100"><code class="t-1 w-100 t-center bg-lighter-grey t-darker-grey">.dh-popover--4</code></p>
    </div>

    <div class="dh-popover-container on-click g-1_2">
      <div class="dh-popover dh-popover--5 has-caret">
        <div class="p-2">
          This is a size 5 popover.
        </div>
      </div>
      <a class="dh-button js-toggle-popover w-100 t-center">Size 5</a>
      <p class="m-top-1 m-bottom-0 l-pos-absolute w-100"><code class="t-1 w-100 t-center bg-lighter-grey t-darker-grey">.dh-popover--5</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Size 1 popover -->
  <div class="dh-popover-container on-click">
    <div class="dh-popover dh-popover--1">
      <div class="dh-popover__wrapper">
        <div class="p-2">...</div>
      </div>
    </div>
    <a class="dh-button js-toggle-popover">Click here</a>
  </div>

  <!-- Size 2 popover -->
  <div class="dh-popover-container on-click">
    <div class="dh-popover dh-popover--2">
      <div class="dh-popover__wrapper">
        <div class="p-2">...</div>
      </div>
    </div>
    <a class="dh-button js-toggle-popover">Click here</a>
  </div>

  <!-- Size 3 popover -->
  <div class="dh-popover-container on-click">
    <div class="dh-popover dh-popover--3">
      <div class="dh-popover__wrapper">
        <div class="p-2">...</div>
      </div>
    </div>
    <a class="dh-button js-toggle-popover">Click here</a>
  </div>

  <!-- Size 4 popover -->
  <div class="dh-popover-container on-click">
    <div class="dh-popover dh-popover--4">
      <div class="dh-popover__wrapper">
        <div class="p-2">...</div>
      </div>
    </div>
    <a class="dh-button js-toggle-popover">Click here</a>
  </div>

  <!-- Size 5 popover -->
  <div class="dh-popover-container on-click">
    <div class="dh-popover dh-popover--5">
      <div class="dh-popover__wrapper">
        <div class="p-2">...</div>
      </div>
    </div>
    <a class="dh-button js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

</section>

<hr />

<section class="dh-popover-dropdowns p-bottom-7">

  <h2>Dropdown Menus</h2>

  <p>
    Dropdown menus leverage the <a href="{{site.baseurl}}/components/lists">lists component</a> to create a simple menu with links, possibly used for header nav menus, filters, etc. Horizontal rules can be created within dropdowns by distributing links between multiple <code>dh-popover__section</code> dividers.
  </p>

  <p class="m-bottom-7">
    Note that <code>dh-popover__section</code> dividers are only required for dropdown menu dh-popovers.
  </p>

  <h3>Basic Dropdown Menu</h3>

  <div class="container u-clearfix bg-c-g100 p-2">
    <div class="dh-popover-container on-click w-100">
      <div class="dh-popover dh-popover--bottom has-caret">
        <div class="dh-popover__wrapper">
          <div class="dh-popover__section">
            <ul class="dh-list dh-list--padding">
							<li><a href="#">Twitter</a></li>
							<li><a href="#">Facebook</a></li>
							<li><a href="#">Google</a></li>
							<li><a href="#">Dedicated Hosting</a></li>
              <li><a href="#">Contact us</a></li>
						</ul>
  				</div>
        </div>
      </div>
      <a class="dh-button js-toggle-popover w-100 t-center">Basic Dropdown</a>
    </div>
  </div>

  {% highlight html %}
  <!-- Basic dropdown menu popover -->
  <div class="dh-popover-container on-click">
    <div class="dh-popover dh-popover--bottom">
      <div class="dh-popover__wrapper">
        <div class="dh-popover__section">
          <ul class="dh-list dh-list--padding">
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Google</a></li>
            <li><a href="#">Dedicated Hosting</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
      </div>
    </div>
    <a class="dh-button js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

  <h3 class="m-top">Dropdown Menu With Separator</h3>
  <div class="container u-clearfix bg-c-g100 p-2">
    <div class="g-1_2">
      <div class="dh-popover-container on-click w-100">
        <div class="dh-popover dh-popover--bottom dh-popover--max-height has-caret">
          <div class="dh-popover__wrapper">
            <div class="dh-popover__section">
              <ul class="dh-list dh-list--padding">
                <li><a href="/dreamhost.css/components/animations">Animations</a></li>
                <li><a href="/dreamhost.css/components/alerts">Alerts</a></li>
                <li><a href="/dreamhost.css/components/buttons">Buttons</a></li>
                <li><a href="/dreamhost.css/components/form">Forms</a></li>
                <li><a href="/dreamhost.css/components/table">Table</a></li>
                <li><a href="/dreamhost.css/components/header">Header</a></li>
                <li><a href="/dreamhost.css/components/lists">dh-lists</a></li>
                <li><a href="/dreamhost.css/components/modals">Modals</a></li>
                <li><a href="/dreamhost.css/components/popovers">dh-popovers</a></li>
                <li><a href="/dreamhost.css/components/transitions">Transitions</a></li>
                <li><a href="/dreamhost.css/components/animations">Animations</a></li>
                <li><a href="/dreamhost.css/components/alerts">Alerts</a></li>
                <li><a href="/dreamhost.css/components/buttons">Buttons</a></li>
                <li><a href="/dreamhost.css/components/form">Forms</a></li>
                <li><a href="/dreamhost.css/components/table">Table</a></li>
                <li><a href="/dreamhost.css/components/header">Header</a></li>
                <li><a href="/dreamhost.css/components/lists">dh-lists</a></li>
                <li><a href="/dreamhost.css/components/modals">Modals</a></li>
                <li><a href="/dreamhost.css/components/popovers">dh-popovers</a></li>
                <li><a href="/dreamhost.css/components/transitions">Transitions</a></li>
              </ul>
            </div>
            <div class="dh-popover__section dh-popover__section--separator">
              <ul class="dh-list dh-list--padding">
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <a class="dh-button js-toggle-popover w-100 t-center">Dropdown with Separator</a>
      </div>
    </div>

    <div class="g-1_2">
      <div class="dh-popover-container on-click w-100">
        <div class="dh-popover dh-popover--bottom dh-popover--max-height has-caret">
          <div class="dh-popover__wrapper">
            <div class="dh-popover__section">
              <ul class="dh-list dh-list--padding">
                <li><a href="/dreamhost.css/components/animations">Animations</a></li>
                <li><a href="/dreamhost.css/components/alerts">Alerts</a></li>
                <li><a href="/dreamhost.css/components/buttons">Buttons</a></li>
                <li><a href="/dreamhost.css/components/form">Forms</a></li>
                <li><a href="/dreamhost.css/components/table">Table</a></li>
                <li><a href="/dreamhost.css/components/header">Header</a></li>
                <li><a href="/dreamhost.css/components/lists">dh-lists</a></li>
                <li><a href="/dreamhost.css/components/modals">Modals</a></li>
                <li><a href="/dreamhost.css/components/popovers">dh-popovers</a></li>
                <li><a href="/dreamhost.css/components/transitions">Transitions</a></li>
                <li><a href="/dreamhost.css/components/animations">Animations</a></li>
                <li><a href="/dreamhost.css/components/alerts">Alerts</a></li>
                <li><a href="/dreamhost.css/components/buttons">Buttons</a></li>
                <li><a href="/dreamhost.css/components/form">Forms</a></li>
                <li><a href="/dreamhost.css/components/table">Table</a></li>
                <li><a href="/dreamhost.css/components/header">Header</a></li>
                <li><a href="/dreamhost.css/components/lists">dh-lists</a></li>
                <li><a href="/dreamhost.css/components/modals">Modals</a></li>
                <li><a href="/dreamhost.css/components/popovers">dh-popovers</a></li>
                <li><a href="/dreamhost.css/components/transitions">Transitions</a></li>
              </ul>
            </div>
          </div>
          <div class="dh-popover__section dh-popover__section--separator">
            <ul class="dh-list dh-list--padding">
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
        </div>
        <a class="dh-button js-toggle-popover w-100">Dropdown with fixed separator</a>
      </div>
    </div>
  </div>

  {% highlight html %}
  <!-- Dropdown menu popover with a separator -->
  <div class="dh-popover-container on-click">
    <div class="dh-popover dh-popover--bottom">
      <div class="dh-popover__wrapper">
        <div class="dh-popover__section">
          <ul class="dh-list dh-list--padding">
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Google</a></li>
            <li><a href="#">Dedicated Hosting</a></li>
          </ul>
        </div>
        <div class="dh-popover__section dh-popover__section--separator">
          <ul class="dh-list dh-list--padding">
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
      </div>
    </div>
    <a class="dh-button js-toggle-popover">Click here</a>
  </div>

  <!-- Dropdown menu popover with a fixed separator -->
  <div class="dh-popover-container on-click">
    <div class="dh-popover dh-popover--bottom">
      <div class="dh-popover__wrapper">
        <div class="dh-popover__section">
          <ul class="dh-list dh-list--padding">
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Google</a></li>
            <li><a href="#">Dedicated Hosting</a></li>
          </ul>
        </div>
      </div>
      <div class="dh-popover__section dh-popover__section--separator">
        <ul class="dh-list dh-list--padding">
          <li><a href="#">Contact us</a></li>
        </ul>
      </div>
    </div>
    <a class="dh-button js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

  <h3 class="m-top">Product Menu</h3>

  <div class="container u-clearfix bg-c-g100 p-2">
    <div class="dh-popover-container on-click w-100">
      <div class="dh-popover dh-popover--max-height dh-popover--bottom dh-popover--5 dh-popover--flush-right">
        <div class="dh-popover__wrapper">
          <div class="dh-popover__section">
            <ul class="dh-list dh-list__menu dh-list--50 dh-list--padding">
              <li>
                <a href="#">
                  <p class="dh-list__menu--title">Register Domains</p>
                  <p class="dh-list__menu--description">Register one or more domains.</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="dh-list__menu--title">Malware Remover</p>
                  <p class="dh-list__menu--description">Scrubs your website for malware.</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="dh-list__menu--title">Add Hosting</p>
                  <p class="dh-list__menu--description">Shared, VPS, Dedicated, Cloud, etc.</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="dh-list__menu--title">Add Security With SSL</p>
                  <p class="dh-list__menu--description">Protect your website from nasties.</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="dh-list__menu--title">Transfer Domains</p>
                  <p class="dh-list__menu--description">Transfer domains to DreamHost.</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="dh-list__menu--title">Add MySQL</p>
                  <p class="dh-list__menu--description">Need a database? Sure you do.</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="dh-list__menu--title">Install WordPress</p>
                  <p class="dh-list__menu--description">Quick, easy, 1-click WordPress.</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="dh-list__menu--title">Add Remixer</p>
                  <p class="dh-list__menu--description">This won't play your MP3s.</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a class="dh-button js-toggle-popover has-text-caret w-100">Product Menu</a>
    </div>
  </div>

  {% highlight html %}
  <!-- Product menu -->
  <div class="dh-popover-container on-click">
      <div class="dh-popover dh-popover--bottom dh-popover--5 dh-popover--flush-right">
        <div class="dh-popover__wrapper">
          <div class="dh-popover__section">
            <ul class="dh-list dh-list__menu dh-list--50 dh-list--padding">
              <li>
                <a href="#">
                  <p class="dh-list__menu--title">Product</p>
                  <p class="dh-list__menu--description">Product description.</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="dh-list__menu--title">Product</p>
                  <p class="dh-list__menu--description">Product description.</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a class="dh-button js-toggle-popover has-text-caret">Product Menu</a>
    </div>
  </div>
  {% endhighlight %}

</section>
