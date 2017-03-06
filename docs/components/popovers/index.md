---
title: Popovers
layout: page
---

<p class="bg-white">
  Popovers are used for any contextual content that shouldn't block the the user. Some common uses are dropdown link menus, hovercards, complex tooltips etc. Below are some guidelines for usage and structure:

  <ul class="list--bullets p-bottom-larger">
    <li>
      Popover content can vary, there are no strict dos and don'ts.
    </li>
    <li>
      Padding size can vary.
    </li>
    <li>
      The caret is optional.
    </li>
  </ul>
</p>

<section class="popover-position p-bottom-larger">

  <p><strong>Popover Positioning:</strong></p>

  <div class="container">
    <div class="popover-container js-popover-container--click g-1_4">
      <div class="popover has-caret">
        <div class="p-s">
          This is a top popover with a caret.
        </div>
      </div>
      <a class="btn js-btn-popover w-100 t-center">Top Popover</a>
    </div>

    <div class="popover-container js-popover-container--click g-1_4">
      <div class="popover popover--right has-caret">
        <div class="p-s">
          This is a right popover with a caret.
        </div>
      </div>
      <a class="btn js-btn-popover w-100 t-center">Right Popover</a>
    </div>

    <div class="popover-container js-popover-container--click g-1_4">
      <div class="popover popover--bottom has-caret">
        <div class="p-s">
          This is a bottom popover with a caret.
        </div>
      </div>
      <a class="btn js-btn-popover w-100 t-center">Bottom Popover</a>
    </div>

    <div class="popover-container js-popover-container--click g-1_4">
      <div class="popover popover--left has-caret">
        <div class="p-s">
          This is a left popover with a caret.
        </div>
      </div>
      <a class="btn js-btn-popover w-100 t-center">Left Popover</a>
    </div>
  </div>

</section>

<section class="popover-alignment p-bottom-larger">

  <p><strong>Popover Alignment</strong></p>

  <p>
    There are left and right alignment classes for popovers which are top and bottom positioned. Adding a class <code>popover--flush-left</code> or <code>popover--flush-right</code> will adjust the popover's positioning and transform origin accordingly. By default, popovers are center aligned.
  </p>

  <div class="container">

    <div class="popover-container js-popover-container--click g-1_2">
      <div class="popover popover--flush-left has-caret">
        <div class="p-s">
          This is a top positioned popover that is flushed left with the clicked element.
        </div>
      </div>
      <a class="btn js-btn-popover w-100 t-center">Flush Left</a>
    </div>

    <div class="popover-container js-popover-container--click g-1_2 p-bottom-large">
      <div class="popover popover--flush-right has-caret">
        <div class="p-s">
          This is a top positioned popover that is flushed right with the clicked element.
        </div>
      </div>
      <a class="btn js-btn-popover w-100 t-center">Flush Right</a>
    </div>

  </div>

  <p>
    There are also top and bottom alignment classes for popover which are left or right positioned. Adding classes <code>popover--flush-top</code> or <code>popover--flush-bottom</code> will adjust the popover's positioning and transform origin accordingly. By default, popovers are middle aligned.
  </p>

  <div class="container">

    <div class="popover-container js-popover-container--click g-1_2">
      <div class="popover popover--left popover--flush-top has-caret">
        <div class="p-s">
          This is a left positioned popover that is flushed top with the clicked element.
        </div>
      </div>
      <a class="btn js-btn-popover w-100 t-center">Flush Top</a>
    </div>

    <div class="popover-container js-popover-container--click g-1_2">
      <div class="popover popover--left popover--flush-bottom has-caret">
        <div class="p-s">
          This is a left positioned popover that is flushed bottom with the clicked element.
        </div>
      </div>
      <a class="btn js-btn-popover w-100 t-center">Flush Bottom</a>
    </div>

  </div>

</section>

<section class="popover-themes p-bottom-larger">

  <p><strong>Popover Themes</strong></p>

  <p>
    There are 4 popover themes: default (light), dark, error, and success. Apply <code>.popover--dark</code>, <code>.popover--error</code>, or <code>.popover--success</code> accordingly. Omit all of the above to use the default theme.
  </p>

  <div class="container">

    <div class="popover-container js-popover-container--click g-1_4">
      <div class="popover has-caret">
        <div class="p-s">
          This is a popover using the default theme.
        </div>
      </div>
      <a class="btn js-btn-popover w-100 t-center">Default</a>
    </div>

    <div class="popover-container js-popover-container--click g-1_4">
      <div class="popover popover--dark has-caret">
        <div class="p-s">
          This is a popover using the dark theme.
        </div>
      </div>
      <a class="btn js-btn-popover w-100 t-center">Dark</a>
    </div>

    <div class="popover-container js-popover-container--click g-1_4">
      <div class="popover popover--error has-caret">
        <div class="p-s">
          This is a popover using the error theme.
        </div>
      </div>
      <a class="btn js-btn-popover w-100 t-center">Error</a>
    </div>

    <div class="popover-container js-popover-container--click g-1_4">
      <div class="popover popover--success has-caret">
        <div class="p-s">
          This is a popover using the success theme.
        </div>
      </div>
      <a class="btn js-btn-popover w-100 t-center">Success</a>
    </div>

  </div>

</section>

<section class="popover-sizes p-bottom-larger">

  <p><strong>Popover Widths</strong></p>

  <p>
    There are 3 popover widths: small, medium, and large. Those don't apply inner padding, but instead change the width of the overall popover. Apply <code>.popover--small</code> or <code>.popover--large</code> accordingly. For medium width popoovers, omit all of the above.
  </p>

  <div class="container">

    <div class="popover-container js-popover-container--click g-1_3">
      <div class="popover popover--small has-caret">
        <div class="p-s">
          This is a small width popover.
        </div>
      </div>
      <a class="btn js-btn-popover w-100 t-center">Small Width</a>
    </div>

    <div class="popover-container js-popover-container--click g-1_3">
      <div class="popover has-caret">
        <div class="p-s">
          This is a medium width popover.
        </div>
      </div>
      <a class="btn js-btn-popover w-100 t-center">Medium Width</a>
    </div>

    <div class="popover-container js-popover-container--click g-1_3">
      <div class="popover popover--large has-caret">
        <div class="p-s">
          This is a large width popover.
        </div>
      </div>
      <a class="btn js-btn-popover w-100 t-center">Large Width</a>
    </div>

  </div>

</section>

<section class="popover-dropdowns p-bottom-larger">

  <p><strong>Popover Dropdowns</strong></p>

  <p>
    A simple popover menu with links, possibly used for header nav menus, filters, etc. Add an optional <code>.popover-separator</code> as a separator between popover list elements.
  </p>

  <div class="container">

    <div class="popover-container js-popover-container--click g-1_2">
      <div class="popover popover--bottom has-caret">
        <div class="popover-dropdown">
					<a href="#">Twitter</a>
					<a href="#">Facebook</a>
					<a href="#">Google</a>
					<a href="#">Contact us</a>
				</div>
      </div>
      <a class="btn js-btn-popover w-100 t-center">Basic Dropdown</a>
    </div>

    <div class="popover-container js-popover-container--click g-1_2">
      <div class="popover popover--bottom has-caret">
        <div class="popover-dropdown">
					<a href="#">Twitter</a>
					<a href="#">Facebook</a>
					<a href="#">Google</a>
          <div class="popover-separator"></div>
					<a href="#">Contact us</a>
				</div>
      </div>
      <a class="btn js-btn-popover w-100 t-center">Dropdown with Separator</a>
    </div>

  </div>

</section>

<section class="popover-hover p-bottom-larger">

  <p><strong>Popover Activation</strong></p>

  <p>
    Popovers can be activated two ways: on click or hover. Click events require JavaScript. To enable click popovers, append <code>.js-popover-container--click</code> to the <code>.popover-container</code>, and also append <code>.js-btn-popover</code> to the triggering element.
  </p>

  <div class="popover-container js-popover-container--click p-bottom-larger">
    <div class="popover has-caret">
      <div class="p-s">
        This popover only activates on click.
      </div>
    </div>
    <a class="btn js-btn-popover t-center">Click Popover</a>
  </div>

  <p>
    To enable hover popovers, append <code>.popover-container--hover</code> to the <code>.popover-container</code>.
  </p>

  <div class="popover-container popover-container--hover">
    <div class="popover has-caret">
      <div class="p-s">
        This popover only activates on hover.
      </div>
    </div>
    <a class="btn t-center">Hover Popover</a>
  </div>

</section>

<section class="popover-caret">

  <p><strong>Popover Caret</strong></p>

  <p>
    The popover caret it optional. Append <code>.has-caret</code> accordingly.
  </p>

  <div class="container">

    <div class="popover-container js-popover-container--click g-1_2">
      <div class="popover has-caret">
        <div class="p-s">
          This popover has a caret.
        </div>
      </div>
      <a class="btn js-btn-popover w-100 t-center">Popover With Caret</a>
    </div>

    <div class="popover-container js-popover-container--click g-1_2">
      <div class="popover">
        <div class="p-s">
          This popover does not have a caret.
        </div>
      </div>
      <a class="btn js-btn-popover w-100 t-center">Popover Without Caret</a>
    </div>

  </div>

</section>
