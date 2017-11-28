---
title: Alerts
layout: page
---

<p class="t-l">Alerts! For good things, bad things and neutral things.</p>

<hr />

<div class="Alert">
	<p class="Alert__heading">Neutral alert</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
</div>
<div class="Alert Alert--error">
	<p class="Alert__heading">Scary alert</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
</div>
<div class="Alert Alert--success">
	<p class="Alert__heading">Happy alert</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
</div>

{% highlight html %}
<div class="Alert">
	<p class="Alert__heading">Neutral alert</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
</div>
<div class="Alert Alert--error">
	<p class="Alert__heading">Scary alert</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
</div>
<div class="Alert Alert--success">
	<p class="Alert__heading">Happy alert</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
</div>
{% endhighlight%}

<hr />

<h2>Toaster Alerts</h2>
<p class="t-l">Quick notifications for the user. For good things, bad things and neutral things.</p>

<div class="dh-toaster w-33">
	<div class="dh-toaster__type"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="#837000" fill-rule="evenodd"><path d="M12 23.963C5.393 23.963.037 18.607.037 12 .037 5.393 5.393.037 12 .037 18.607.037 23.963 5.393 23.963 12c0 6.607-5.356 11.963-11.963 11.963zm0-1.772c5.628 0 10.19-4.563 10.19-10.191 0-5.628-4.562-10.19-10.19-10.19C6.372 1.81 1.81 6.371 1.81 12c0 5.628 4.562 10.19 10.19 10.19z" fill-rule="nonzero"/><path d="M12 14.88l-2.5 2.31.248-3.394-3.364-.514 2.808-1.923-1.695-2.95 3.253.996L12 6.24l1.25 3.165 3.253-.996-1.695 2.95 2.808 1.923-3.364.514.247 3.394z"/></g></svg></div>
	<p class="dh-toaster__heading">Toaster notification<span>Click for more details</span></p>
</div>
<div class="dh-toaster dh-toaster--positive w-33">
	<div class="dh-toaster__type"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="#837000" fill-rule="evenodd"><path d="M12 23.963C5.393 23.963.037 18.607.037 12 .037 5.393 5.393.037 12 .037 18.607.037 23.963 5.393 23.963 12c0 6.607-5.356 11.963-11.963 11.963zm0-1.772c5.628 0 10.19-4.563 10.19-10.191 0-5.628-4.562-10.19-10.19-10.19C6.372 1.81 1.81 6.371 1.81 12c0 5.628 4.562 10.19 10.19 10.19z" fill-rule="nonzero"/><path d="M12 14.88l-2.5 2.31.248-3.394-3.364-.514 2.808-1.923-1.695-2.95 3.253.996L12 6.24l1.25 3.165 3.253-.996-1.695 2.95 2.808 1.923-3.364.514.247 3.394z"/></g></svg></div>
	<p class="dh-toaster__heading">Toaster notification<span>Click for more details</span></p>
</div>
<div class="dh-toaster dh-toaster--negative w-33">
	<div class="dh-toaster__type"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="#837000" fill-rule="evenodd"><path d="M12 23.963C5.393 23.963.037 18.607.037 12 .037 5.393 5.393.037 12 .037 18.607.037 23.963 5.393 23.963 12c0 6.607-5.356 11.963-11.963 11.963zm0-1.772c5.628 0 10.19-4.563 10.19-10.191 0-5.628-4.562-10.19-10.19-10.19C6.372 1.81 1.81 6.371 1.81 12c0 5.628 4.562 10.19 10.19 10.19z" fill-rule="nonzero"/><path d="M12 14.88l-2.5 2.31.248-3.394-3.364-.514 2.808-1.923-1.695-2.95 3.253.996L12 6.24l1.25 3.165 3.253-.996-1.695 2.95 2.808 1.923-3.364.514.247 3.394z"/></g></svg></div>
	<p class="dh-toaster__heading">Toaster notification<span>Click for more details</span></p>
</div>

{% highlight html %}
<div class="dh-toaster w-33">
	<div class="dh-toaster__type"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="#837000" fill-rule="evenodd"><path d="M12 23.963C5.393 23.963.037 18.607.037 12 .037 5.393 5.393.037 12 .037 18.607.037 23.963 5.393 23.963 12c0 6.607-5.356 11.963-11.963 11.963zm0-1.772c5.628 0 10.19-4.563 10.19-10.191 0-5.628-4.562-10.19-10.19-10.19C6.372 1.81 1.81 6.371 1.81 12c0 5.628 4.562 10.19 10.19 10.19z" fill-rule="nonzero"/><path d="M12 14.88l-2.5 2.31.248-3.394-3.364-.514 2.808-1.923-1.695-2.95 3.253.996L12 6.24l1.25 3.165 3.253-.996-1.695 2.95 2.808 1.923-3.364.514.247 3.394z"/></g></svg></div>
	<p class="dh-toaster__heading">Toaster notification<span>Click for more details</span></p>
</div>
<div class="dh-toaster dh-toaster--positive w-33">
	<div class="dh-toaster__type"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="#837000" fill-rule="evenodd"><path d="M12 23.963C5.393 23.963.037 18.607.037 12 .037 5.393 5.393.037 12 .037 18.607.037 23.963 5.393 23.963 12c0 6.607-5.356 11.963-11.963 11.963zm0-1.772c5.628 0 10.19-4.563 10.19-10.191 0-5.628-4.562-10.19-10.19-10.19C6.372 1.81 1.81 6.371 1.81 12c0 5.628 4.562 10.19 10.19 10.19z" fill-rule="nonzero"/><path d="M12 14.88l-2.5 2.31.248-3.394-3.364-.514 2.808-1.923-1.695-2.95 3.253.996L12 6.24l1.25 3.165 3.253-.996-1.695 2.95 2.808 1.923-3.364.514.247 3.394z"/></g></svg></div>
	<p class="dh-toaster__heading">Toaster notification<span>Click for more details</span></p>
</div>
<div class="dh-toaster dh-toaster--negative w-33">
	<div class="dh-toaster__type"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="#837000" fill-rule="evenodd"><path d="M12 23.963C5.393 23.963.037 18.607.037 12 .037 5.393 5.393.037 12 .037 18.607.037 23.963 5.393 23.963 12c0 6.607-5.356 11.963-11.963 11.963zm0-1.772c5.628 0 10.19-4.563 10.19-10.191 0-5.628-4.562-10.19-10.19-10.19C6.372 1.81 1.81 6.371 1.81 12c0 5.628 4.562 10.19 10.19 10.19z" fill-rule="nonzero"/><path d="M12 14.88l-2.5 2.31.248-3.394-3.364-.514 2.808-1.923-1.695-2.95 3.253.996L12 6.24l1.25 3.165 3.253-.996-1.695 2.95 2.808 1.923-3.364.514.247 3.394z"/></g></svg></div>
	<p class="dh-toaster__heading">Toaster notification<span>Click for more details</span></p>
</div>
{% endhighlight%}