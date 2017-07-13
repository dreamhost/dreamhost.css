---
title: Sass variables
layout: page
---

<p class="t-l">Most interfaces can be created using css, but there are sass variables available for building custom elements or the framework itself.</p>

<hr />

## Colors

{% highlight css %}
// Blues
$lightest-blue
$lighter-blue
$light-blue
$blue
$dark-blue
$darker-blue
$darkest-blue

// Teal
$lighter-teal
$light-teal
$teal
$dark-teal
$darker-teal

// Green
$lighter-green: #EEFDF1;
$light-green: #B0DBB9;
$green: #027F1B;
$dark-green: #074C15;
$darker-green: #072C0E;

// Yellow
$lighter-yellow: #FFF9CC;
$light-yellow: #F4E171;
$yellow: #FFDA00;
$dark-yellow: #C7A900;
$darker-yellow: #837000;

// Orange
$lighter-orange: #FFEECC;
$light-orange: #FFCA63;
$orange: #FFA700;
$dark-orange: #D78B00;
$darker-orange: #8A5900;

// Red
$lighter-red: #FFD6D4;
$light-red: #D45F59;
$red: #B80C03;
$dark-red: #8C0700;
$darker-red: #590400;

// Salmon
$lighter-salmon: #FFCCCE;
$light-salmon: #FC9A95;
$salmon: #F36058;
$dark-salmon: #C04740;
$darker-salmon: #853834;

// Greys
$white: #fff;
$lighter-grey: #F4F6F9;
$light-grey: #E0E4E8;
$grey: #AFBFCA;
$dark-grey: #5E6D78;
$darker-grey: #434F58;
$black: $darkest-blue;

{% endhighlight %}

{% highlight css %}
div {color: $black}
{% endhighlight %}

## Spacing

Use the baseScale with convertScaleToRem() to ensure consistent margins.

{% highlight css %}
$baseScale: 8;
$maxSize: 16;
{% endhighlight %}

{% highlight css %}
div {margin-bottom: convertScaleToRem(2);}
{% endhighlight %}

## Typography

### Fonts

{% highlight css %}
$body: 'Proxima Nova', sans-serif;
$heading: 'Ubuntu', sans-serif;
{% endhighlight %}

{% highlight css %}
div {font-family: $heading}
{% endhighlight %}

### Sizes

{% highlight css %}
$t-6: 2.5rem; // 40px
$t-5: 2rem; // 32px
$t-4: 1.5rem; // 24px
$t-3: 1rem; // 16px
$t-2: .875rem; // 14px. legibility at small sizes > adhering to scales
$t-1: .75em; // 12px
{% endhighlight %}

{% highlight css %}
div {font-size: $t-l}
{% endhighlight %}

### Weights

{% highlight css %}
$t-lighter: 100;
$t-light: 300;
$t-regular: 500;
$t-bold: 600;
$t-extrabold: 900;
{% endhighlight %}

{% highlight css %}
div {font-weight: $t-light}
{% endhighlight %}

## Borders

{% highlight css %}
$border-size: 1px;
$border-radius: 3px;
$border-radius-large: 5px;
{% endhighlight %}

{% highlight css %}
div {border-radius: $border-radius}
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
div {transition-duration: $a-smaller;}
{% endhighlight %}


## Z-Index

{% highlight css %}
$z-0: -1;
$z-1: 1;
$z-2: 10;
$z-3: 100;
$z-4: 1000;
$z-5: 10000;
{% endhighlight %}

{% highlight css %}
div {position: relative; z-index: $z-4;}
{% endhighlight %}

## Responsive

{% highlight css %}
$medium-breakpoint: 800px;
$large-breakpoint: 1040px;
{% endhighlight %}


{% highlight css %}
@media screen and (min-width: $large-breakpoint){};
{% endhighlight %}
