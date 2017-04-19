---
title: Sass variables
layout: page
---

<p class="t-l">Most interfaces can be created using css, but there are sass varaibles available for building custom elements or the framework itself.</p>

<hr />

## Colors

{% highlight css %}
$blue
$light-blue
$dark-blue
$teal
$light-teal
$dark-teal
$green
$light-green
$dark-green
$red
$light-red
$dark-red
$salmon
$light-salmon
$dark-salmon
$orange
$light-orange
$dark-orange
$yellow
$light-yellow
$dark-yellow
$lighter-grey
$light-grey
$grey
$dark-grey
$darker-grey
$black
$white
{% endhighlight %}

{% highlight css %}
.whatever {color: $black}
{% endhighlight %}

## Spacing

{% highlight css %}
$s-smaller: .5rem; // 8px
$s-small: 1.5rem; // 24px
$s: 2rem; // 32px
$s-large: 2.5rem; // 40px
$s-larger: 3rem; // 48px
{% endhighlight %}

{% highlight css %}
.whatever {margin-bottom: $s}
{% endhighlight %}

## Typography

### Fonts

{% highlight css %}
$body: 'Proxima Nova', sans-serif;
$heading: 'Ubuntu', sans-serif;
{% endhighlight %}

{% highlight css %}
.whatever {font-family: $heading}
{% endhighlight %}

### Sizes

{% highlight css %}
$t-h1: 2.5rem;
$t-xl: 2rem;
$t-l: 1.5rem;
$t-size: 1rem;
$t-s: .875rem;
$t-xs: .75em;
{% endhighlight %}

{% highlight css %}
.whatever {font-size: $t-l}
{% endhighlight %}

## Borders

{% highlight css %}
$border-size: 1px;
$border-radius: 3px;
$border-radius-large: 5px;
{% endhighlight %}

{% highlight css %}
.whatever {font-size: $t-l}
{% endhighlight %}

## Durations

{% highlight css %}
$a-larger: 2s;
$a-large: 1.5s;
$a-size: 1s;
$a-small: .5s;
$a-smaller: .3s;
{% endhighlight %}

{% highlight css %}
a {transition-duration: $a-smaller;}
{% endhighlight %}
