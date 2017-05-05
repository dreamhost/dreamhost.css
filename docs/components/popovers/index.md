---
title: Popovers
layout: page
---

<p class="bg-white">
  <p class="t-l">
    Popovers are used for any contextual content that shouldn't block the the user. Some common uses are dropdown link menus, hovercards, complex tooltips, etc. Below are some guidelines for usage and structure.
  </p>
</p>

<hr />

<section class="popover-position p-bottom-larger">

  <h2>Basic Usage</h2>
  <p>
    A popover, in its most basic form, looks like this.
  </p>

  {% highlight html %}
  <!-- A basic popover -->
  <div class="popover-container on-click">
    <div class="popover">
      <div class="popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

  <p>
    Broken down; the first line creates the popover container. This is where the triggering method must also be declared: <code>click</code> or <code>hover</code>. In this example, it is declared as <code>click</code>.
  </p>

{% highlight html %}
  <div class="popover-container on-click">
{% endhighlight %}

  <p>
    The next line creates the popover. This is where any optional popover paramaters can be declared. Details on the available popover parameters are provided in the sections below.
  </p>

{% highlight html %}
  <div class="popover">
{% endhighlight %}

  <p>
    Next, the popover wrapper is created. This wrapper class allows optional max-height to be set on popovers. This is especially useful for popovers that function as dropdown menus.
  </p>

{% highlight html %}
  <div class="popover__wrapper">
{% endhighlight %}

  <p>
    Popovers don't have any padding by default, however padding can be set by nesting a divider inside of the <code>popover__wrapper</code>. The contents of the popover are contained within the divider as well.
  </p>

{% highlight html %}
  <div class="p-s">...</div>
{% endhighlight %}

  <p>
    The <code>js-toggle-popover</code> class must be included on the element that will trigger the popover. In this case, it is an anchor tag.
  </p>

{% highlight html %}
  <a class="js-toggle-popover">Click here</a>
{% endhighlight %}

</section>

<hr />

<section class="popover-hover p-bottom-larger">

  <H2>Triggering</h2>

  <p>
    Popovers can be triggered two ways: on click or hover. Click events require JavaScript. To enable click popovers, append <code>.on-click</code> to the <code>.popover-container</code>. For hover popovers, append <code>.on-hover</code> instead.
  </p>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <div class="popover-container on-click g-1_2">
      <div class="popover has-caret">
        <div class="p-s">
          This popover only activates on click.
        </div>
      </div>
      <a class="btn js-toggle-popover t-center w-100">Click Popover</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.on-click</code></p>
    </div>

    <div class="popover-container on-hover g-1_2">
      <div class="popover has-caret">
        <div class="p-s">
          This popover only activates on hover.
        </div>
      </div>
      <a class="btn t-center w-100">Hover Popover</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.on-hover</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Click popover -->
  <div class="popover-container on-click">
    <div class="popover">
      <div class="popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="btn js-toggle-popover">Click here</a>
  </div>

  <!-- Hover popover -->
  <div class="popover-container on-hover">
    <div class="popover">
      <div class="popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="btn js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

</section>

<hr />

<section class="popover-caret">

  <h2>Caret</h2>

  <p>
    The popover caret it optional. Append <code>.has-caret</code> accordingly.
  </p>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <div class="popover-container on-click g-1_2">
      <div class="popover">
        <div class="p-s">
          This popover does not have a caret.
        </div>
      </div>
      <a class="btn js-toggle-popover w-100 t-center">Popover Without Caret</a>
    </div>

    <div class="popover-container on-click g-1_2">
      <div class="popover has-caret">
        <div class="p-s">
          This popover has a caret.
        </div>
      </div>
      <a class="btn js-toggle-popover w-100 t-center">Popover With Caret</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.has-caret</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Popover with caret -->
  <div class="popover-container on-click">
    <div class="popover has-caret">
      <div class="popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="btn js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

</section>

<hr />

<section class="popover-position p-bottom-larger">

  <h2>Alignment &amp; Positioning</h2>
  <p>
    Popovers can be aligned top, right, bottom, or left. By default, they are top aligned.
  </p>

  <p class="t-salmon t-bold m-bottom-0">Popover Alignment</p>

  <div class="container u-clearfix bg-lighter-grey p-s">
    <div class="popover-container on-click g-1_4">
      <div class="popover has-caret">
        <div class="p-xs">
          This is a top aligned popover with a caret.
        </div>
      </div>
      <a class="btn js-toggle-popover w-100 t-center">Top Aligned</a>
    </div>

    <div class="popover-container on-click g-1_4">
      <div class="popover popover--right has-caret">
        <div class="p-xs">
          This is a right aligned popover with a caret.
        </div>
      </div>
      <a class="btn js-toggle-popover w-100 t-center">Right Aligned</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.popover--right</code></p>
    </div>

    <div class="popover-container on-click g-1_4">
      <div class="popover popover--bottom has-caret">
        <div class="p-xs">
          This is a bottom aligned popover with a caret.
        </div>
      </div>
      <a class="btn js-toggle-popover w-100 t-center">Bottom Aligned</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.popover--bottom</code></p>
    </div>

    <div class="popover-container on-click g-1_4">
      <div class="popover popover--left has-caret">
        <div class="p-xs">
          This is a left aligned popover with a caret.
        </div>
      </div>
      <a class="btn js-toggle-popover w-100 t-center">Left Aligned</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.popover--left</code></p>
    </div>
  </div>

  {% highlight html %}
  <!-- Right aligned popover -->
  <div class="popover-container on-click">
    <div class="popover popover--right">
      <div class="popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="btn js-toggle-popover">Click here</a>
  </div>

  <!-- Bottom aligned popover -->
  <div class="popover-container on-click">
    <div class="popover popover--bottom">
      <div class="popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="btn js-toggle-popover">Click here</a>
  </div>

  <!-- Left aligned popover -->
  <div class="popover-container on-click">
    <div class="popover popover--left">
      <div class="popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="btn js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

</section>

<section class="popover-alignment p-bottom-larger">

  <p class="t-salmon t-bold m-bottom-0">Popover Positioning</p>

  <p>
    There are left and right positioning classes for popovers that are top and bottom aligned. Adding a class <code>popover--flush-left</code> or <code>popover--flush-right</code> will adjust the popover's positioning and transform origin accordingly. By default, popovers are center positioned.
  </p>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <div class="popover-container on-click g-1_2">
      <div class="popover popover--flush-left has-caret">
        <div class="p-s">
          This is a top aligned popover that is flushed left with the clicked element.
        </div>
      </div>
      <a class="btn js-toggle-popover w-100 t-center">Flush Left</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.popover--flush-left</code></p>
    </div>

    <div class="popover-container on-click g-1_2 p-bottom-large">
      <div class="popover popover--flush-right has-caret">
        <div class="p-s">
          This is a top aligned popover that is flushed right with the clicked element.
        </div>
      </div>
      <a class="btn js-toggle-popover w-100 t-center">Flush Right</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.popover--flush-right</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Flushed left popover -->
  <div class="popover-container on-click">
    <div class="popover popover--flush-left">
      <div class="popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="btn js-toggle-popover">Click here</a>
  </div>

  <!-- Flushed right popover -->
  <div class="popover-container on-click">
    <div class="popover popover--flush-right">
      <div class="popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="btn js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

  <p>
    There are also top and bottom positioning classes for popover that are left or right aligned. Adding classes <code>popover--flush-top</code> or <code>popover--flush-bottom</code> will adjust the popover's positioning and transform origin accordingly. By default, popovers are middle positioned.
  </p>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <div class="popover-container on-click g-1_2">
      <div class="popover popover--left popover--flush-top has-caret">
        <div class="p-s">
          This is a left aligned popover that is flushed top with the clicked element.
        </div>
      </div>
      <a class="btn js-toggle-popover w-100 t-center">Flush Top</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.popover--flush-top</code></p>
    </div>

    <div class="popover-container on-click g-1_2">
      <div class="popover popover--left popover--flush-bottom has-caret">
        <div class="p-s">
          This is a left aligned popover that is flushed bottom with the clicked element.
        </div>
      </div>
      <a class="btn js-toggle-popover w-100 t-center">Flush Bottom</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.popover--flush-bottom</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Flushed top popover -->
  <div class="popover-container on-click">
    <div class="popover popover--left popover--flush-top">
      <div class="popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="btn js-toggle-popover">Click here</a>
  </div>

  <!-- Flushed bottom popover -->
  <div class="popover-container on-click">
    <div class="popover popover--left popover--flush-bottom">
      <div class="popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="btn js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

</section>

<hr />

<section class="popover-themes p-bottom-larger">

  <h2>Themes</h2>

  <p>
    There are 4 popover themes: default (light), dark, error, and success. Apply <code>.popover--dark</code>, <code>.popover--error</code>, or <code>.popover--success</code> accordingly. Omit all of the above to use the default theme.
  </p>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <div class="popover-container on-click g-1_4">
      <div class="popover has-caret">
        <div class="p-s">
          This is a popover using the default theme.
        </div>
      </div>
      <a class="btn js-toggle-popover w-100 t-center">Default</a>
    </div>

    <div class="popover-container on-click g-1_4">
      <div class="popover popover--dark has-caret">
        <div class="p-s">
          This is a popover using the dark theme.
        </div>
      </div>
      <a class="btn js-toggle-popover w-100 t-center">Dark</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.popover--dark</code></p>
    </div>

    <div class="popover-container on-click g-1_4">
      <div class="popover popover--error has-caret">
        <div class="p-s">
          This is a popover using the error theme.
        </div>
      </div>
      <a class="btn js-toggle-popover w-100 t-center">Error</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.popover--error</code></p>
    </div>

    <div class="popover-container on-click g-1_4">
      <div class="popover popover--success has-caret">
        <div class="p-s">
          This is a popover using the success theme.
        </div>
      </div>
      <a class="btn js-toggle-popover w-100 t-center">Success</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.popover--success</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Dark theme popover -->
  <div class="popover-container on-click">
    <div class="popover popover--dark">
      <div class="popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="btn js-toggle-popover">Click here</a>
  </div>

  <!-- Error theme popover -->
  <div class="popover-container on-click">
    <div class="popover popover--error">
      <div class="popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="btn js-toggle-popover">Click here</a>
  </div>

  <!-- Success theme popover -->
  <div class="popover-container on-click">
    <div class="popover popover--success">
      <div class="popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="btn js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

</section>

<hr />

<section class="popover-sizes p-bottom-larger">

  <h2>Sizes</h2>

  <p>
    There are 3 popover widths: small, medium, and large. Those don't apply inner padding, but instead change the width of the overall popover. Apply <code>.popover--small</code> or <code>.popover--large</code> accordingly. For medium width popoovers, omit all of the above.
  </p>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <div class="popover-container on-click g-1_3">
      <div class="popover popover--small has-caret">
        <div class="p-s">
          This is a small width popover.
        </div>
      </div>
      <a class="btn js-toggle-popover w-100 t-center">Small Width</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.popover--small</code></p>
    </div>

    <div class="popover-container on-click g-1_3">
      <div class="popover has-caret">
        <div class="p-s">
          This is a medium width popover.
        </div>
      </div>
      <a class="btn js-toggle-popover w-100 t-center">Medium Width</a>
    </div>

    <div class="popover-container on-click g-1_3">
      <div class="popover popover--large has-caret">
        <div class="p-s">
          This is a large width popover.
        </div>
      </div>
      <a class="btn js-toggle-popover w-100 t-center">Large Width</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.popover--large</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Small width popover -->
  <div class="popover-container on-click">
    <div class="popover popover--small">
      <div class="popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="btn js-toggle-popover">Click here</a>
  </div>

  <!-- Large width popover -->
  <div class="popover-container on-click">
    <div class="popover popover--large">
      <div class="popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="btn js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

</section>

<hr />

<section class="popover-dropdowns p-bottom-larger">

  <h2>Dropdown Menus</h2>

  <p>
    Dropdown menus leverage the <a href="{{site.baseurl}}/components/lists">lists component</a> to create a simple menu with links, possibly used for header nav menus, filters, etc. Horizontal rules can be created within dropdowns by distributing links between multiple <code>popover__section</code> dividers.
  </p>

  <p>
    Note that <code>popover__section</code> dividers are only required for dropdown menu popovers.
  </p>

  <p class="t-salmon t-bold m-bottom-0">Basic Dropdown Menu</p>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <div class="popover-container on-click w-100">
      <div class="popover popover--bottom has-caret">
        <div class="popover__wrapper">
          <div class="popover__section">
            <ul class="list list--padding">
							<li><a href="#">Twitter</a></li>
							<li><a href="#">Facebook</a></li>
							<li><a href="#">Google</a></li>
							<li><a href="#">Dedicated Hosting</a></li>
              <li><a href="#">Contact us</a></li>
						</ul>
  				</div>
        </div>
      </div>
      <a class="btn js-toggle-popover w-100 t-center">Basic Dropdown</a>
    </div>

  </div>

  {% highlight html %}
  <!-- Basic dropdown menu popover -->
  <div class="popover-container on-click">
    <div class="popover popover--bottom">
      <div class="popover__wrapper">
        <div class="popover__section">
          <ul class="list list--padding">
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Google</a></li>
            <li><a href="#">Dedicated Hosting</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
      </div>
    </div>
    <a class="btn js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

  <p class="t-salmon t-bold m-bottom-0">Dropdown Menu With Separator</p>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <div class="popover-container on-click w-100">
      <div class="popover popover--bottom has-caret">
        <div class="popover__wrapper">
          <div class="popover__section">
            <ul class="list list--padding">
							<li><a href="#">Twitter</a></li>
							<li><a href="#">Facebook</a></li>
							<li><a href="#">Google</a></li>
							<li><a href="#">Dedicated Hosting</a></li>
						</ul>
  				</div>
          <div class="popover__section popover__section--separator">
  					<ul class="list list--padding">
  						<li><a href="#">Contact us</a></li>
  					</ul>
  				</div>
        </div>
      </div>
      <a class="btn js-toggle-popover w-100 t-center">Dropdown with Separator</a>
    </div>

  </div>

  {% highlight html %}
  <!-- Dropdown menu popover with a separator -->
  <div class="popover-container on-click">
    <div class="popover popover--bottom">
      <div class="popover__wrapper">
        <div class="popover__section">
          <ul class="list list--padding">
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Google</a></li>
            <li><a href="#">Dedicated Hosting</a></li>
          </ul>
        </div>
        <div class="popover__section popover__section--separator">
          <ul class="list list--padding">
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
      </div>
    </div>
    <a class="btn js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

</section>
