---
title: Alerts
layout: page
---

<p class="t-4">Banner Notifications. For good things, bad things and neutral things.</p>

<hr />

<div class="m-bottom-7">

<div class="dh-notification">
	<div class="dh-notification__wrapper">
		<h3 class="dh-notification__heading">Neutral notification</h3>
		<span class="dh-notification__time">Jan 5, 2017  4:55pm PST</span>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
		<button role="button" class="dh-button dh-button--text">Primary action</button>
	</div><!--dh-notification__wrapper-->
</div><!--dh-notification-->
<div class="dh-notification dh-notification--positive">
	<div class="dh-notification__wrapper">
		<h3 class="dh-notification__heading">Positive notification</h3>
		<span class="dh-notification__time">Jan 5, 2017  4:55pm PST</span>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
		<button role="button" class="dh-button dh-button--text">Primary action</button>
	</div><!--dh-notification__wrapper-->
</div><!--dh-notification-->
<div class="dh-notification dh-notification--negative">
	<div class="dh-notification__wrapper">
		<h3 class="dh-notification__heading">Warning notification</h3>
		<span class="dh-notification__time">Jan 5, 2017  4:55pm PST</span>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
		<button role="button" class="dh-button dh-button--text">Primary action</button>
	</div><!--dh-notification__wrapper-->
</div><!--dh-notification-->

</div>

{% highlight html %}
<div class="dh-notification">
	<div class="dh-notification__wrapper">
		<h3 class="dh-notification__heading">Neutral notification</h3>
		<span class="dh-notification__time">Jan 5, 2017  4:55pm PST</span>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
		<button role="button" class="dh-button dh-button--text">Primary action</button>
	</div><!--dh-notification__wrapper-->
</div><!--dh-notification-->
<div class="dh-notification dh-notification--positive">
	<div class="dh-notification__wrapper">
		<h3 class="dh-notification__heading">Positive notification</h3>
		<span class="dh-notification__time">Jan 5, 2017  4:55pm PST</span>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
		<button role="button" class="dh-button dh-button--text">Primary action</button>
	</div><!--dh-notification__wrapper-->
</div><!--dh-notification-->
<div class="dh-notification dh-notification--negative">
	<div class="dh-notification__wrapper">
		<h3 class="dh-notification__heading">Warning notification</h3>
		<span class="dh-notification__time">Jan 5, 2017  4:55pm PST</span>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
		<button role="button" class="dh-button dh-button--text">Primary action</button>
	</div><!--dh-notification__wrapper-->
</div><!--dh-notification-->
{% endhighlight%}


<hr />

<h2>Toaster Notifications</h2>
<p class="t-4 m-bottom-7">Quick &amp; contextual notifications for the user, with optional persistence ( add <strong>dh-toaster--persistent</strong> to .dh-toaster div). For good things, bad things and neutral things.</p>

<div class="w-50 m-bottom-7">
<div class="dh-toaster dh-toaster--persistent">
	<div class="dh-toaster__type"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="#837000" fill-rule="evenodd"><path d="M12 23.963C5.393 23.963.037 18.607.037 12 .037 5.393 5.393.037 12 .037 18.607.037 23.963 5.393 23.963 12c0 6.607-5.356 11.963-11.963 11.963zm0-1.772c5.628 0 10.19-4.563 10.19-10.191 0-5.628-4.562-10.19-10.19-10.19C6.372 1.81 1.81 6.371 1.81 12c0 5.628 4.562 10.19 10.19 10.19z" fill-rule="nonzero"/><path d="M12 14.88l-2.5 2.31.248-3.394-3.364-.514 2.808-1.923-1.695-2.95 3.253.996L12 6.24l1.25 3.165 3.253-.996-1.695 2.95 2.808 1.923-3.364.514.247 3.394z"/></g></svg></div>
	<p class="dh-toaster__heading">Neutral toaster notification<span>Click for more details</span></p>
</div><!--dh-toaster-->
<div class="dh-toaster dh-toaster--persistent dh-toaster--positive">
	<div class="dh-toaster__type"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="#E5FEFF" fill-rule="evenodd"><rect transform="rotate(-47 12.861 12.147)" x="6.698" y="10.552" width="12.326" height="3.191" rx="1.595"/><path d="M11.861 21.503a9.503 9.503 0 1 0 0-19.006 9.503 9.503 0 0 0 0 19.006zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" fill-rule="nonzero"/><rect transform="rotate(-135 8.664 14.351)" x="5.473" y="12.756" width="6.382" height="3.191" rx="1.595"/></g></svg></div>
	<p class="dh-toaster__heading">Positive toaster notification<span>Click for more details</span></p>
</div><!--dh-toaster-->
<div class="dh-toaster dh-toaster--persistent dh-toaster--negative">
	<div class="dh-toaster__type"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="#FFCCCE" fill-rule="evenodd"><path d="M13.219 8.898c0 .862-.038 1.652-.113 2.368a44.352 44.352 0 0 1-.281 2.166h-1.612a32.878 32.878 0 0 1-.3-2.174 22.933 22.933 0 0 1-.113-2.36V6h2.419v2.898zm.281 6.871c0 .364-.144.66-.431.888-.288.229-.644.343-1.069.343-.413 0-.766-.114-1.06-.343a1.074 1.074 0 0 1-.44-.888c0-.363.147-.662.44-.896.294-.233.647-.35 1.06-.35.425 0 .781.117 1.069.35.287.234.431.533.431.896z"/><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" fill-rule="nonzero"/></g></svg></div>
	<p class="dh-toaster__heading">Negative toaster notification<span>Click for more details</span></p>
</div><!--dh-toaster-->
</div><!--example-->
{% highlight html %}
<div class="dh-toaster-container w-25">
	<div class="dh-toaster">
		<div class="dh-toaster__type"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="#837000" fill-rule="evenodd"><path d="M12 23.963C5.393 23.963.037 18.607.037 12 .037 5.393 5.393.037 12 .037 18.607.037 23.963 5.393 23.963 12c0 6.607-5.356 11.963-11.963 11.963zm0-1.772c5.628 0 10.19-4.563 10.19-10.191 0-5.628-4.562-10.19-10.19-10.19C6.372 1.81 1.81 6.371 1.81 12c0 5.628 4.562 10.19 10.19 10.19z" fill-rule="nonzero"/><path d="M12 14.88l-2.5 2.31.248-3.394-3.364-.514 2.808-1.923-1.695-2.95 3.253.996L12 6.24l1.25 3.165 3.253-.996-1.695 2.95 2.808 1.923-3.364.514.247 3.394z"/></g></svg></div>
		<p class="dh-toaster__heading">Neutral toaster notification<span>Click for more details</span></p>
	</div><!--dh-toaster-->
	<div class="dh-toaster dh-toaster--positive">
		<div class="dh-toaster__type"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="#E5FEFF" fill-rule="evenodd"><rect transform="rotate(-47 12.861 12.147)" x="6.698" y="10.552" width="12.326" height="3.191" rx="1.595"/><path d="M11.861 21.503a9.503 9.503 0 1 0 0-19.006 9.503 9.503 0 0 0 0 19.006zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" fill-rule="nonzero"/><rect transform="rotate(-135 8.664 14.351)" x="5.473" y="12.756" width="6.382" height="3.191" rx="1.595"/></g></svg></div>
		<p class="dh-toaster__heading">Positive toaster notification<span>Click for more details</span></p>
	</div><!--dh-toaster-->
	<div class="dh-toaster dh-toaster--negative">
		<div class="dh-toaster__type"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="#FFCCCE" fill-rule="evenodd"><path d="M13.219 8.898c0 .862-.038 1.652-.113 2.368a44.352 44.352 0 0 1-.281 2.166h-1.612a32.878 32.878 0 0 1-.3-2.174 22.933 22.933 0 0 1-.113-2.36V6h2.419v2.898zm.281 6.871c0 .364-.144.66-.431.888-.288.229-.644.343-1.069.343-.413 0-.766-.114-1.06-.343a1.074 1.074 0 0 1-.44-.888c0-.363.147-.662.44-.896.294-.233.647-.35 1.06-.35.425 0 .781.117 1.069.35.287.234.431.533.431.896z"/><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" fill-rule="nonzero"/></g></svg></div>
		<p class="dh-toaster__heading">Negative toaster notification<span>Click for more details</span></p>
	</div><!--dh-toaster-->
</div><!--dh-toaster-container-->
{% endhighlight%}

<p class="t-4">Alerts! For good things, bad things and neutral things.</p>

<hr />

<div class="Alert">
	<p class="Alert__heading">Neutral alert</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
</div>
<div class="Alert Alert--success">
	<p class="Alert__heading">Happy alert</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
</div>
<div class="Alert Alert--error">
	<p class="Alert__heading">Scary alert</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
</div>

{% highlight html %}
<div class="Alert">
	<p class="Alert__heading">Neutral alert</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
</div>
<div class="Alert Alert--success">
	<p class="Alert__heading">Happy alert</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
</div>
<div class="Alert Alert--error">
	<p class="Alert__heading">Scary alert</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
</div>
{% endhighlight%}
