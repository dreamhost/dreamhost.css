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

<section class="Popover-position p-bottom-larger">

  <h2>Basic Usage</h2>
  <p>
    A Popover, in its most basic form, looks like this.
  </p>

  {% highlight html %}
  <!-- A basic Popover -->
  <div class="Popover-container on-click">
    <div class="Popover">
      <div class="Popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

  <p>
    Broken down; the first line creates the Popover container. This is where the triggering method must also be declared: <code>click</code> or <code>hover</code>. In this example, it is declared as <code>click</code>.
  </p>

{% highlight html %}
  <div class="Popover-container on-click">
{% endhighlight %}

  <p>
    The next line creates the Popover. This is where any optional Popover paramaters can be declared. Details on the available Popover parameters are provided in the sections below.
  </p>

{% highlight html %}
  <div class="Popover">
{% endhighlight %}

  <p>
    Next, the Popover wrapper is created. This wrapper class allows optional max-height to be set on Popovers. This is especially useful for Popovers that function as dropdown menus.
  </p>

{% highlight html %}
  <div class="Popover__wrapper">
{% endhighlight %}

  <p>
    Popovers don't have any padding by default, however padding can be set by nesting a divider inside of the <code>Popover__wrapper</code>. The contents of the Popover are contained within the divider as well.
  </p>

{% highlight html %}
  <div class="p-s">...</div>
{% endhighlight %}

  <p>
    The <code>js-toggle-popover</code> class must be included on the element that will trigger the Popover. In this case, it is an anchor tag.
  </p>

{% highlight html %}
  <a class="js-toggle-popover">Click here</a>
{% endhighlight %}

</section>

<hr />

<section class="Popover-hover p-bottom-larger">

  <H2>Triggering</h2>

  <p>
    Popovers can be triggered two ways: on click or hover. Click events require JavaScript. To enable click Popovers, append <code>.on-click</code> to the <code>.Popover-container</code>. For hover Popovers, append <code>.on-hover</code> instead.
  </p>

  <div class="container u-clearfix bg-c-g100 p-s">

    <div class="Popover-container on-click g-1_2">
      <div class="Popover has-caret">
        <div class="p-s">
          This Popover only activates on click.
        </div>
      </div>
      <a class="Button js-toggle-popover t-center w-100">Click Popover</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-c-g100 t-c-g500">.on-click</code></p>
    </div>

    <div class="Popover-container on-hover g-1_2">
      <div class="Popover has-caret">
        <div class="p-s">
          This Popover only activates on hover.
        </div>
      </div>
      <a class="Button t-center w-100">Hover Popover</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-c-g100 t-c-g500">.on-hover</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Click Popover -->
  <div class="Popover-container on-click">
    <div class="Popover">
      <div class="Popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="Button js-toggle-popover">Click here</a>
  </div>

  <!-- Hover Popover -->
  <div class="Popover-container on-hover">
    <div class="Popover">
      <div class="Popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="Button js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

</section>

<hr />

<section class="Popover-caret">

  <h2>Caret</h2>

  <p>
    The Popover caret it optional. Append <code>.has-caret</code> accordingly. Generally, carets should only be used when the triggering element (ex: the yellow button below) does not also use a caret. That will protect against potential caret alignment issues.
  </p>

  <div class="container u-clearfix bg-c-g100 p-s">

    <div class="Popover-container on-click g-1_2">
      <div class="Popover">
        <div class="p-s">
          This Popover does not have a caret.
        </div>
      </div>
      <a class="Button js-toggle-popover w-100 t-center">Popover Without Caret</a>
    </div>

    <div class="Popover-container on-click g-1_2">
      <div class="Popover has-caret">
        <div class="p-s">
          This Popover has a caret.
        </div>
      </div>
      <a class="Button js-toggle-popover w-100 t-center">Popover With Caret</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-c-g100 t-c-g500">.has-caret</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Popover with caret -->
  <div class="Popover-container on-click">
    <div class="Popover has-caret">
      <div class="Popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="Button js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

</section>

<hr />

<section class="Popover-position p-bottom-larger">

  <h2>Alignment &amp; Positioning</h2>
  <p>
    Popovers can be aligned top, right, bottom, or left. By default, they are top aligned.
  </p>

  <p class="t-c-r300 t-bold m-bottom-0">Popover Alignment</p>

  <div class="container u-clearfix bg-c-g100 p-s">
    <div class="Popover-container on-click g-1_4">
      <div class="Popover has-caret">
        <div class="p-xs">
          This is a top aligned Popover with a caret.
        </div>
      </div>
      <a class="Button js-toggle-popover w-100 t-center">Top Aligned</a>
    </div>

    <div class="Popover-container on-click g-1_4">
      <div class="Popover Popover--right has-caret">
        <div class="p-xs">
          This is a right aligned Popover with a caret.
        </div>
      </div>
      <a class="Button js-toggle-popover w-100 t-center">Right Aligned</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-c-g100 t-c-g500">.Popover--right</code></p>
    </div>

    <div class="Popover-container on-click g-1_4">
      <div class="Popover Popover--bottom has-caret">
        <div class="p-xs">
          This is a bottom aligned Popover with a caret.
        </div>
      </div>
      <a class="Button js-toggle-popover w-100 t-center">Bottom Aligned</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-c-g100 t-c-g500">.Popover--bottom</code></p>
    </div>

    <div class="Popover-container on-click g-1_4">
      <div class="Popover Popover--left has-caret">
        <div class="p-xs">
          This is a left aligned Popover with a caret.
        </div>
      </div>
      <a class="Button js-toggle-popover w-100 t-center">Left Aligned</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-c-g100 t-c-g500">.Popover--left</code></p>
    </div>
  </div>

  {% highlight html %}
  <!-- Right aligned Popover -->
  <div class="Popover-container on-click">
    <div class="Popover Popover--right">
      <div class="Popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="Button js-toggle-popover">Click here</a>
  </div>

  <!-- Bottom aligned Popover -->
  <div class="Popover-container on-click">
    <div class="Popover Popover--bottom">
      <div class="Popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="Button js-toggle-popover">Click here</a>
  </div>

  <!-- Left aligned Popover -->
  <div class="Popover-container on-click">
    <div class="Popover Popover--left">
      <div class="Popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="Button js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

</section>

<section class="Popover-alignment p-bottom-larger">

  <p class="t-c-r300 t-bold m-bottom-0">Popover Positioning</p>

  <p>
    There are left and right positioning classes for Popovers that are top and bottom aligned. Adding a class <code>Popover--flush-left</code> or <code>Popover--flush-right</code> will adjust the Popover's positioning and transform origin accordingly. By default, Popovers are center positioned.
  </p>

  <div class="container u-clearfix bg-c-g100 p-s">

    <div class="Popover-container on-click g-1_2">
      <div class="Popover Popover--flush-left has-caret">
        <div class="p-s">
          This is a top aligned Popover that is flushed left with the clicked element.
        </div>
      </div>
      <a class="Button js-toggle-popover w-100 t-center">Flush Left</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-c-g100 t-c-g500">.Popover--flush-left</code></p>
    </div>

    <div class="Popover-container on-click g-1_2 p-bottom-large">
      <div class="Popover Popover--flush-right has-caret">
        <div class="p-s">
          This is a top aligned Popover that is flushed right with the clicked element.
        </div>
      </div>
      <a class="Button js-toggle-popover w-100 t-center">Flush Right</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-c-g100 t-c-g500">.Popover--flush-right</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Flushed left Popover -->
  <div class="Popover-container on-click">
    <div class="Popover Popover--flush-left">
      <div class="Popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="Button js-toggle-popover">Click here</a>
  </div>

  <!-- Flushed right Popover -->
  <div class="Popover-container on-click">
    <div class="Popover Popover--flush-right">
      <div class="Popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="Button js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

  <p>
    There are also top and bottom positioning classes for Popover that are left or right aligned. Adding classes <code>Popover--flush-top</code> or <code>Popover--flush-bottom</code> will adjust the Popover's positioning and transform origin accordingly. By default, Popovers are middle positioned.
  </p>

  <div class="container u-clearfix bg-c-g100 p-s">

    <div class="Popover-container on-click g-1_2">
      <div class="Popover Popover--left Popover--flush-top has-caret">
        <div class="p-s">
          This is a left aligned Popover that is flushed top with the clicked element.
        </div>
      </div>
      <a class="Button js-toggle-popover w-100 t-center">Flush Top</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-c-g100 t-c-g500">.Popover--flush-top</code></p>
    </div>

    <div class="Popover-container on-click g-1_2">
      <div class="Popover Popover--left Popover--flush-bottom has-caret">
        <div class="p-s">
          This is a left aligned Popover that is flushed bottom with the clicked element.
        </div>
      </div>
      <a class="Button js-toggle-popover w-100 t-center">Flush Bottom</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-c-g100 t-c-g500">.Popover--flush-bottom</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Flushed top Popover -->
  <div class="Popover-container on-click">
    <div class="Popover Popover--left Popover--flush-top">
      <div class="Popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="Button js-toggle-popover">Click here</a>
  </div>

  <!-- Flushed bottom Popover -->
  <div class="Popover-container on-click">
    <div class="Popover Popover--left Popover--flush-bottom">
      <div class="Popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="Button js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

</section>

<hr />

<section class="Popover-themes p-bottom-larger">

  <h2>Themes</h2>

  <p>
    There are 4 Popover themes: default (light), dark, error, and success. Apply <code>.Popover--dark</code>, <code>.Popover--error</code>, or <code>.Popover--success</code> accordingly. Omit all of the above to use the default theme.
  </p>

  <div class="container u-clearfix bg-c-g100 p-s">

    <div class="Popover-container on-click g-1_4">
      <div class="Popover has-caret">
        <div class="p-s">
          This is a Popover using the default theme.
        </div>
      </div>
      <a class="Button js-toggle-popover w-100 t-center">Default</a>
    </div>

    <div class="Popover-container on-click g-1_4">
      <div class="Popover Popover--dark has-caret">
        <div class="p-s">
          This is a Popover using the dark theme.
        </div>
      </div>
      <a class="Button js-toggle-popover w-100 t-center">Dark</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-c-g100 t-c-g500">.Popover--dark</code></p>
    </div>

    <div class="Popover-container on-click g-1_4">
      <div class="Popover Popover--error has-caret">
        <div class="p-s">
          This is a Popover using the error theme.
        </div>
      </div>
      <a class="Button js-toggle-popover w-100 t-center">Error</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-c-g100 t-c-g500">.Popover--error</code></p>
    </div>

    <div class="Popover-container on-click g-1_4">
      <div class="Popover Popover--success has-caret">
        <div class="p-s">
          This is a Popover using the success theme.
        </div>
      </div>
      <a class="Button js-toggle-popover w-100 t-center">Success</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-c-g100 t-c-g500">.Popover--success</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Dark theme Popover -->
  <div class="Popover-container on-click">
    <div class="Popover Popover--dark">
      <div class="Popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="Button js-toggle-popover">Click here</a>
  </div>

  <!-- Error theme Popover -->
  <div class="Popover-container on-click">
    <div class="Popover Popover--error">
      <div class="Popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="Button js-toggle-popover">Click here</a>
  </div>

  <!-- Success theme Popover -->
  <div class="Popover-container on-click">
    <div class="Popover Popover--success">
      <div class="Popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="Button js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

</section>

<hr />

<section class="Popover-sizes p-bottom-larger">

  <h2>Sizes</h2>

  <p>
    There are 3 Popover widths: small, medium, and large. Those don't apply inner padding, but instead change the width of the overall Popover. Apply <code>.Popover--small</code> or <code>.Popover--large</code> accordingly. For medium width popoovers, omit all of the above.
  </p>

  <div class="container u-clearfix bg-c-g100 p-s">

    <div class="Popover-container on-click g-1_3">
      <div class="Popover Popover--small has-caret">
        <div class="p-s">
          This is a small width Popover.
        </div>
      </div>
      <a class="Button js-toggle-popover w-100 t-center">Small Width</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-c-g100 t-c-g500">.Popover--small</code></p>
    </div>

    <div class="Popover-container on-click g-1_3">
      <div class="Popover has-caret">
        <div class="p-s">
          This is a medium width Popover.
        </div>
      </div>
      <a class="Button js-toggle-popover w-100 t-center">Medium Width</a>
    </div>

    <div class="Popover-container on-click g-1_3">
      <div class="Popover Popover--large has-caret">
        <div class="p-s">
          This is a large width Popover.
        </div>
      </div>
      <a class="Button js-toggle-popover w-100 t-center">Large Width</a>
      <p class="m-top-xs m-bottom-0 l-pos-absolute w-100"><code class="t-xs w-100 t-center bg-c-g100 t-c-g500">.Popover--large</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Small width Popover -->
  <div class="Popover-container on-click">
    <div class="Popover Popover--small">
      <div class="Popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="Button js-toggle-popover">Click here</a>
  </div>

  <!-- Large width Popover -->
  <div class="Popover-container on-click">
    <div class="Popover Popover--large">
      <div class="Popover__wrapper">
        <div class="p-s">...</div>
      </div>
    </div>
    <a class="Button js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

</section>

<hr />

<section class="Popover-dropdowns p-bottom-larger">

  <h2>Dropdown Menus</h2>

  <p>
    Dropdown menus leverage the <a href="{{site.baseurl}}/components/lists">lists component</a> to create a simple menu with links, possibly used for header nav menus, filters, etc. Horizontal rules can be created within dropdowns by distributing links between multiple <code>Popover__section</code> dividers.
  </p>

  <p>
    Note that <code>Popover__section</code> dividers are only required for dropdown menu Popovers.
  </p>

  <p class="t-c-r300 t-bold m-bottom-0">Basic Dropdown Menu</p>

  <div class="container u-clearfix bg-c-g100 p-s">

    <div class="Popover-container on-click w-100">
      <div class="Popover Popover--bottom has-caret">
        <div class="Popover__wrapper">
          <div class="Popover__section">
            <ul class="List List--padding">
							<li><a href="#">Twitter</a></li>
							<li><a href="#">Facebook</a></li>
							<li><a href="#">Google</a></li>
							<li><a href="#">Dedicated Hosting</a></li>
              <li><a href="#">Contact us</a></li>
						</ul>
  				</div>
        </div>
      </div>
      <a class="Button js-toggle-popover w-100 t-center">Basic Dropdown</a>
    </div>

  </div>

  {% highlight html %}
  <!-- Basic dropdown menu Popover -->
  <div class="Popover-container on-click">
    <div class="Popover Popover--bottom">
      <div class="Popover__wrapper">
        <div class="Popover__section">
          <ul class="List List--padding">
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Google</a></li>
            <li><a href="#">Dedicated Hosting</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
      </div>
    </div>
    <a class="Button js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

  <p class="t-c-r300 t-bold m-bottom-0">Dropdown Menu With Separator</p>

  <div class="container u-clearfix bg-c-g100 p-s">

    <div class="Popover-container on-click w-100">
      <div class="Popover Popover--bottom has-caret">
        <div class="Popover__wrapper">
          <div class="Popover__section">
            <ul class="List List--padding">
							<li><a href="#">Twitter</a></li>
							<li><a href="#">Facebook</a></li>
							<li><a href="#">Google</a></li>
							<li><a href="#">Dedicated Hosting</a></li>
						</ul>
  				</div>
          <div class="Popover__section Popover__section--separator">
  					<ul class="List List--padding">
  						<li><a href="#">Contact us</a></li>
  					</ul>
  				</div>
        </div>
      </div>
      <a class="Button js-toggle-popover w-100 t-center">Dropdown with Separator</a>
    </div>

  </div>

  {% highlight html %}
  <!-- Dropdown menu Popover with a separator -->
  <div class="Popover-container on-click">
    <div class="Popover Popover--bottom">
      <div class="Popover__wrapper">
        <div class="Popover__section">
          <ul class="List List--padding">
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Google</a></li>
            <li><a href="#">Dedicated Hosting</a></li>
          </ul>
        </div>
        <div class="Popover__section Popover__section--separator">
          <ul class="List List--padding">
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
      </div>
    </div>
    <a class="Button js-toggle-popover">Click here</a>
  </div>
  {% endhighlight %}

</section>
