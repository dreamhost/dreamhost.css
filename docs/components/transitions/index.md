---
title: Transitions
layout: page
---

<p class="bg-white">
  <p class="t-l">
    Transitions are mainly used to provide additional context for the hover states of interactive elements like buttons, links, and inputs.
  </p>
</p>

<hr />

<section class="animations p-bottom-larger">

  <H2>Basic Usage</h2>

  <p>
    Transitions trigger on hover. There are 2 pre-defined transition effects: <code>.scale-up-hover</code> and <code>.scale-down-hover</code>.
  </p>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <a class="btn t-center scale-up-hover p-s g-1_2">Scale up</a>

    <a class="btn t-center scale-down-hover p-s g-1_2">Scale down</a>

  </div>

  {% highlight html %}
  <!-- Transition: scale up -->
  <a class="scale-up-hover">Click here</a>

  <!-- Transition: scale down -->
  <a class="scale-down-hover">Click here</a>
  {% endhighlight %}

</section>

<hr />

<section class="animations-duration p-bottom-larger">

  <H2>Duration</h2>

  <p>
    There are 5 different, t-shirt sized transition durations. <code>.tr-duration-xs</code>, <code>.tr-duration-s</code>, <code>.tr-duration-m</code>, <code>.tr-duration-l</code>, and <code>.tr-duration-xl</code>.
  </p>
  <p>
    Use <code>.tr-duration-0</code> to reset duration to zero.
  </p>
  <p>
    <code>.tr-duration</code> can also be used as shorthand for <code>.tr-duration-m</code>.
  </p>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <a class="btn t-center scale-up-hover tr-duration-xs g-1_3">xs duration</a>

    <a class="btn t-center scale-up-hover tr-duration-s g-1_3">s duration</a>

    <a class="btn t-center scale-up-hover tr-duration g-1_3">m duration</a>

  </div>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <a class="btn t-center scale-up-hover tr-duration-l g-1_3">l duration</a>

    <a class="btn t-center scale-up-hover tr-duration-xl g-1_3">xl duration</a>

    <a class="btn t-center scale-up-hover tr-duration-0 g-1_3">0 duration</a>

  </div>

  {% highlight html %}
  <!-- Transition duration: xs -->
  <a class="btn scale-up-hover tr-duration-xs">Click Here</a>

  <!-- Transition duration: s -->
  <a class="btn scale-up-hover tr-duration-s">Click Here</a>

  <!-- Transition duration: m -->
  <a class="btn scale-up-hover tr-duration-m">Click Here</a>

  <!-- Transition duration: l -->
  <a class="btn scale-up-hover tr-duration-l">Click Here</a>

  <!-- Transition duration: xl -->
  <a class="btn scale-up-hover tr-duration-xl">Click Here</a>

  <!-- No transition duration -->
  <a class="btn scale-up-hover tr-duration-0">Click Here</a>
  {% endhighlight %}

</section>

<hr />

<section class="animations-easing">

  <h2>Easing</h2>

  <p>
    Easing defines the curve on which the transition takes place. Each of the 5 easing options provide a different feel to the transition.
  </p>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <a class="btn t-center scale-up-hover tr-duration-xl tr-easing-linear g-1_3">Linear</a>

    <a class="btn t-center scale-up-hover tr-duration-xl tr-easing-ease g-1_3">Ease</a>

    <a class="btn t-center scale-up-hover tr-duration-xl tr-easing-cb-scale-up g-1_3">Scale Up</a>

  </div>

  <div class="container u-clearfix bg-lighter-grey p-s">

    <a class="btn t-center scale-up-hover tr-duration-xl tr-easing-cb-scale-in g-1_3">Scale In</a>

    <a class="btn t-center scale-up-hover tr-duration-xl tr-easing-cb-scale-out g-1_3">Scale Out</a>

  </div>

  {% highlight html %}
  <!-- Transition easing: linear -->
  <a class="btn scale-up-hover tr-easing-linear">Click Here</a>

  <!-- Transition easing: ease -->
  <a class="btn scale-up-hover tr-easing-ease">Click Here</a>

  <!-- Transition easing: cubic bezier scale-up -->
  <a class="btn scale-up-hover tr-easing-cb-scale-up">Click Here</a>

  <!-- Transition easing: cubic bezier scale-in -->
  <a class="btn scale-up-hover tr-easing-cb-scale-in">Click Here</a>

  <!-- Transition easing: cubic bezier scale-out -->
  <a class="btn scale-up-hover tr-easing-cb-scale-out">Click Here</a>
  {% endhighlight %}

</section>

<script src="http://code.jquery.com/jquery-2.2.4.min.js"></script>
<script src="{{site.baseurl}}/assets/js/scripts.js"></script>
