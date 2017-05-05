---
title: Animations
layout: page
---

<p class="bg-white">
  <p class="t-l">
    Animations provide additional context between states. They enhance things like loading content, process paths, microinteractions, etc.
  </p>
</p>

<hr />

<section class="animations p-bottom-larger">

  <H2>Basic Usage</h2>

  <p>
    Adding animations to an element is simple. Here is a small collection of predefined and reusable animations, useful for loading spinners, carousels, validation states, notices, etc.
  </p>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <div class="g-1_6">
      <div class="bg-yellow spin-right a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.spin-right</code></p>
    </div>

    <div class="g-1_6">
      <div class="bg-yellow spin-left a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.spin-left</code></p>
    </div>

    <div class="g-1_6">
      <div class="bg-yellow bounce a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.bounce</code></p>
    </div>

    <div class="g-1_6">
      <div class="bg-yellow shake a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.shake</code></p>
    </div>

    <div class="g-1_6">
      <div class="bg-yellow fade-in a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.fade-in</code></p>
    </div>

    <div class="g-1_6">
      <div class="bg-yellow fade-out a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.fade-out</code></p>
    </div>

  </div>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <div class="g-1_6">
      <div class="bg-yellow slide-in a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.slide-in</code></p>
    </div>

    <div class="g-1_6">
      <div class="bg-yellow slide-out a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.slide-out</code></p>
    </div>

    <div class="g-1_6">
      <div class="bg-yellow slide-up a-duration a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.slide-up</code></p>
    </div>

    <div class="g-1_6">
      <div class="bg-yellow slide-right a-duration a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.slide-right</code></p>
    </div>

    <div class="g-1_6">
      <div class="bg-yellow slide-down a-duration a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.slide-down</code></p>
    </div>

    <div class="g-1_6">
      <div class="bg-yellow slide-left a-duration a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.slide-left</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Animation: spin right -->
  <div class="spin-right"></div>

  <!-- Animation: spin left -->
  <div class="spin-left"></div>

  <!-- Animation: bounce -->
  <div class="bounce"></div>

  <!-- Animation: shake -->
  <div class="shake"></div>

  <!-- Animation: fade-in -->
  <div class="fade-in"></div>

  <!-- Animation: fade-out -->
  <div class="fade-out"></div>

  <!-- Animation: slide-in -->
  <div class="slide-in"></div>

  <!-- Animation: slide-out -->
  <div class="slide-out"></div>

  <!-- Animation: slide-up -->
  <div class="slide-up"></div>

  <!-- Animation: slide-right -->
  <div class="slide-right"></div>

  <!-- Animation: slide-down -->
  <div class="slide-down"></div>

  <!-- Animation: slide-left -->
  <div class="slide-left"></div>

  {% endhighlight %}

</section>

<hr />

<section class="animations p-bottom-larger">

  <H2>Hover Animations</h2>

  <p>
    Animations trigger on page load, but can be set to trigger on hover by appending <code>-hover</code> to the class name. For example, <code>.bounce</code> will trigger on page load, whereas <code>.bounce-hover</code> will trigger on hover.
  </p>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <div class="g-1_6">
      <div class="bg-yellow spin-right-hover a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.spin-right-hover</code></p>
    </div>

    <div class="g-1_6">
      <div class="bg-yellow spin-left-hover a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.spin-left-hover</code></p>
    </div>

    <div class="g-1_6">
      <div class="bg-yellow bounce-hover a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.bounce-hover</code></p>
    </div>

    <div class="g-1_6">
      <div class="bg-yellow shake-hover a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.shake-hover</code></p>
    </div>

    <div class="g-1_6">
      <div class="bg-yellow fade-in-hover a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.fade-in-hover</code></p>
    </div>

    <div class="g-1_6">
      <div class="bg-yellow fade-out-hover a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.fade-out-hover</code></p>
    </div>

  </div>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <div class="g-1_6">
      <div class="bg-yellow slide-in-hover a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.slide-in-hover</code></p>
    </div>

    <div class="g-1_6">
      <div class="bg-yellow slide-out-hover a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.slide-out-hover</code></p>
    </div>

    <div class="g-1_6">
      <div class="bg-yellow slide-up-hover a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.slide-up-hover</code></p>
    </div>

    <div class="g-1_6">
      <div class="bg-yellow slide-right-hover a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.slide-right-hover</code></p>
    </div>

    <div class="g-1_6">
      <div class="bg-yellow slide-down-hover a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.slide-down-hover</code></p>
    </div>

    <div class="g-1_6">
      <div class="bg-yellow slide-left-hover a-repeat p-s p-y-xs m-s h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.slide-left-hover</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Hover animation: spin right -->
  <div class="spin-right-hover"></div>

  <!-- Hover animation: spin left -->
  <div class="spin-left-hover"></div>

  <!-- Hover animation: bounce -->
  <div class="bounce-hover"></div>

  <!-- Hover animation: shake -->
  <div class="shake-hover"></div>

  <!-- Hover animation: fade-in -->
  <div class="fade-in-hover"></div>

  <!-- Hover animation: fade-out -->
  <div class="fade-out-hover"></div>

  <!-- Hover animation: slide-in -->
  <div class="slide-in-hover"></div>

  <!-- Hover animation: slide-out -->
  <div class="slide-out-hover"></div>

  <!-- Hover animation: slide-up -->
  <div class="slide-up-hover"></div>

  <!-- Hover animation: slide-right -->
  <div class="slide-right-hover"></div>

  <!-- Hover animation: slide-down -->
  <div class="slide-down-hover"></div>

  <!-- Hover animation: slide-left -->
  <div class="slide-left-hover"></div>

  {% endhighlight %}

</section>

<hr />

<section class="animations-duration p-bottom-larger">

  <H2>Duration</h2>

  <p>
    There are 5 different, t-shirt sized animation durations. <code>.a-duration-xs</code>, <code>.a-duration-s</code>, <code>.a-duration-m</code>, <code>.a-duration-l</code>, and <code>.a-duration-xl</code>.
  </p>
  <p>
    Use <code>.a-duration-0</code> to reset duration to zero.
  </p>
  <p>
    <code>.a-duration</code> can also be used as shorthand for <code>.a-duration-m</code>.
  </p>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <div class="g-1_3">
      <div class="bg-yellow spin-right a-repeat a-duration-xs p-s p-y-xs m-s m-x-auto h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.a-duration-xs</code></p>
    </div>

    <div class="g-1_3">
      <div class="bg-yellow spin-right a-repeat a-duration-s p-s p-y-xs m-s m-x-auto h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.a-duration-s</code></p>
    </div>

    <div class="g-1_3">
      <div class="bg-yellow spin-right a-repeat a-duration p-s p-y-xs m-s m-x-auto h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.a-duration-m</code></p>
    </div>

  </div>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <div class="g-1_3">
      <div class="bg-yellow spin-right a-repeat a-duration-l p-s p-y-xs m-s m-x-auto h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.a-duration-l</code></p>
    </div>

    <div class="g-1_3">
      <div class="bg-yellow spin-right a-repeat a-duration-xl p-s p-y-xs m-s m-x-auto h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.a-duration-xl</code></p>
    </div>

    <div class="g-1_3">
      <div class="bg-yellow spin-right a-repeat a-duration-0 p-s p-y-xs m-s m-x-auto h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.a-duration-0</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Animation duration: xs -->
  <div class="spin-right a-duration-xs"></div>

  <!-- Animation duration: s -->
  <div class="spin-right a-duration-s"></div>

  <!-- Animation duration: m -->
  <div class="spin-right a-duration-m"></div>

  <!-- Animation duration: l -->
  <div class="spin-right a-duration-l"></div>

  <!-- Animation duration: xl -->
  <div class="spin-right a-duration-xl"></div>

  <!-- No animation duration -->
  <div class="spin-right a-duration-0"></div>
  {% endhighlight %}

</section>

<hr />

<section class="animations-easing">

  <h2>Easing</h2>

  <p>
    Easing defines the curve on which the animation takes place. Each of the 5 easing options provide a different feel to the animation.
  </p>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <div class="g-1_3">
      <div class="bg-yellow spin-right a-repeat a-easing-linear p-s p-y-xs m-s m-x-auto h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.a-easing-linear</code></p>
    </div>

    <div class="g-1_3">
      <div class="bg-yellow spin-right a-repeat a-easing-ease p-s p-y-xs m-s m-x-auto h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.a-easing-ease</code></p>
    </div>

    <div class="g-1_3">
      <div class="bg-yellow spin-right a-repeat a-easing-cb-scale-up p-s p-y-xs m-s m-x-auto h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.a-easing-cb-scale-up</code></p>
    </div>

  </div>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <div class="g-1_3">
      <div class="bg-yellow spin-right a-repeat a-easing-cb-scale-in p-s p-y-xs m-s m-x-auto h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.a-easing-cb-scale-in</code></p>
    </div>

    <div class="g-1_3">
      <div class="bg-yellow spin-right a-repeat a-easing-cb-scale-out p-s p-y-xs m-s m-x-auto h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.a-easing-cb-scale-out</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Animation easing: linear -->
  <div class="spin-right a-easing-linear"></div>

  <!-- Animation easing: ease -->
  <div class="spin-right a-easing-ease"></div>

  <!-- Animation easing: cubic bezier scale-up -->
  <div class="spin-right a-easing-cb-scale-up"></div>

  <!-- Animation easing: cubic bezier scale-in -->
  <div class="spin-right a-easing-cb-scale-in"></div>

  <!-- Animation easing: cubic bezier scale-out -->
  <div class="spin-right a-easing-cb-scale-out"></div>
  {% endhighlight %}

</section>

<hr />

<section class="animations-repeat">

  <h2>Repeat</h2>
  <p>
    By default, animations run only once. Animations can also be set to repeat once <code>.a-repeat-once</code>, or repeat indefinitely <code>.a-repeat</code>.
  </p>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <div class="g-1_3">
      <div class="bg-yellow spin-right p-s p-y-xs m-s m-x-auto h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
    </div>

    <div class="g-1_3">
      <div class="bg-yellow spin-right a-repeat-once p-s p-y-xs m-s m-x-auto h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.a-repeat-once</code></p>
    </div>

    <div class="g-1_3">
      <div class="bg-yellow spin-right a-repeat p-s p-y-xs m-s m-x-auto h-0 w-0 u-border-radius-l">
        &nbsp;
      </div>
      <p class="m-top-xs m-bottom-0 l-pos-relative w-100"><code class="t-xs w-100 t-center bg-lighter-grey t-darker-grey">.a-repeat</code></p>
    </div>

  </div>

  {% highlight html %}
  <!-- Animation repeat once -->
  <div class="spin-right a-repeat-once"></div>

  <!-- Animation repeat indefinitely -->
  <div class="spin-right a-repeat"></div>
  {% endhighlight %}

</section>

<script src="http://code.jquery.com/jquery-2.2.4.min.js"></script>
<script src="{{site.baseurl}}/assets/js/scripts.js"></script>