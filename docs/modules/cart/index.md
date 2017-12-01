---
title: Shopping Cart Module
layout: page
---

<p class="t-4">The cart module consists of a <strong>header</strong> <code>dh-cart__header</code> <strong>footer</strong> <code>dh-cart__footer</code> &amp; <strong>steps</strong> <code>dh-cart__step</code> with various states <code>dh-cart__step--active</code> <code>dh-cart__step--next</code> <code>dh-cart__step--additional</code>.</p>

<hr />

<div class="w-50 m-bottom-7">

<div class="dh-cart__wrapper">
    <div class="dh-cart__header">
        <h3>CART HEADER</h3>
        <p>Cart Description</p>
    </div><!--dh-cart__header-->
    <div class="dh-cart__step">
        <p class="dh-cart__heading">Cart step title</p>
        <a href"/">Step Button</a>
    </div><!--dh-cart__step-->
    <div class="dh-cart__step dh-cart__step--active">
        <p class="dh-cart__heading">Cart step title (Active)</p>
        <a href"/">Step Button</a>
        <a href"/">Step Button</a>
    </div><!--dh-cart__step-->
    <div class="dh-cart__step dh-cart__step--next">
            <p class="dh-cart__heading">Cart step title (Next)</p>
            <span>Description</span>
    </div><!--dh-cart__step-->
    <div class="dh-cart__step dh-cart__step--additional">
            <p class="dh-cart__heading">Cart step title (Additional)</p>
    </div><!--dh-cart__step-->
    <div class="dh-cart__footer">
        <div class="dh-cart__price"><p>Total amount due</p><span>$0.00</span></div>
    </div><!--dh-cart__footer-->
</div><!--dh-cart__wrapper-->

</div>

{% highlight html %}
<div class="dh-cart__wrapper">
    <div class="dh-cart__header">
        <h3>CART HEADER</h3>
        <p>Cart Description</p>
    </div><!--dh-cart__header-->
    <div class="dh-cart__step">
        <p class="dh-cart__heading">Cart step title</p>
        <a href"/">Step Button</a>
    </div><!--dh-cart__step-->
    <div class="dh-cart__step dh-cart__step--active">
        <p class="dh-cart__heading">Cart step title (Active)</p>
        <a href"/">Step Button</a>
        <a href"/">Step Button</a>
    </div><!--dh-cart__step-->
    <div class="dh-cart__step dh-cart__step--next">
            <p class="dh-cart__heading">Cart step title (Next)</p>
            <span>Description</span>
    </div><!--dh-cart__step-->
    <div class="dh-cart__step dh-cart__step--additional">
            <p class="dh-cart__heading">Cart step title (Additional)</p>
    </div><!--dh-cart__step-->
    <div class="dh-cart__footer">
        <div class="dh-cart__price"><p>Total amount due</p><span>$0.00</span></div>
    </div><!--dh-cart__footer-->
</div><!--dh-cart__wrapper-->
{% endhighlight%}