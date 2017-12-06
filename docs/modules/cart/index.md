---
title: Shopping Cart Module
layout: page
---

<p class="t-4">The cart module consists of a <strong>header</strong> <code>Cart__header</code> <strong>footer</strong> <code>Cart__footer</code> &amp; <strong>steps</strong> <code>Cart__step</code> with various states <code>Cart__step--active</code> <code>Cart__step--next</code> <code>Cart__step--additional</code>.</p>

<hr />

<div class="w-50 m-bottom-7">

<div class="Cart__wrapper">
    <div class="Cart__header">
        <h3>CART HEADER</h3>
        <p>Cart Description</p>
    </div><!--Cart__header-->
    <div class="Cart__step">
        <p class="Cart__heading">Cart step title</p>
        <a href"/">Step Button</a>
    </div><!--Cart__step-->
    <div class="Cart__step Cart__step--active">
        <p class="Cart__heading">Cart step title (Active)</p>
        <a href"/">Step Button</a>
        <a href"/">Step Button</a>
    </div><!--Cart__step-->
    <div class="Cart__step Cart__step--next">
            <p class="Cart__heading">Cart step title (Next)</p>
            <span>Description</span>
    </div><!--Cart__step-->
    <div class="Cart__step Cart__step--additional">
            <p class="Cart__heading">Cart step title (Additional)</p>
    </div><!--Cart__step-->
    <div class="Cart__footer">
        <div class="Cart__price"><p>Total amount due</p><span>$0.00</span></div>
    </div><!--Cart__footer-->
</div><!--Cart__wrapper-->

</div>

{% highlight html %}
<div class="Cart__wrapper">
    <div class="Cart__header">
        <h3>CART HEADER</h3>
        <p>Cart Description</p>
    </div><!--Cart__header-->
    <div class="Cart__step">
        <p class="Cart__heading">Cart step title</p>
        <a href"/">Step Button</a>
    </div><!--Cart__step-->
    <div class="Cart__step Cart__step--active">
        <p class="Cart__heading">Cart step title (Active)</p>
        <a href"/">Step Button</a>
        <a href"/">Step Button</a>
    </div><!--Cart__step-->
    <div class="Cart__step Cart__step--next">
            <p class="Cart__heading">Cart step title (Next)</p>
            <span>Description</span>
    </div><!--Cart__step-->
    <div class="Cart__step Cart__step--additional">
            <p class="Cart__heading">Cart step title (Additional)</p>
    </div><!--Cart__step-->
    <div class="Cart__footer">
        <div class="Cart__price"><p>Total amount due</p><span>$0.00</span></div>
    </div><!--Cart__footer-->
</div><!--Cart__wrapper-->
{% endhighlight%}