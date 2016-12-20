DreamHost.css

Thanks for contributing to DreamHost.css. Please start by [reading the documentation](http://dreamhost.github.io/dreamhost.css).

## Building DreamHost.css

Make sure you have [NPM](http://blog.npmjs.org/post/85484771375/how-to-install-npm) and [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) installed and then:

1. `npm install`
2. `gulp`

The BrowserSync server will be running at `http://localhost:9999`. See gulpfile.js for more details.

## HTML Guidelines

[@mdo HTML Guidelines](http://codeguide.co/#html)

## Framework CSS Guidelines

We follow aggressive guidelines for adding new code into the framework.

* No unsetting css
* !important in _utilities.scss only
* No numbers (0) or colours (#fff, #000) outside of _variables.scss
* Push things down with margin-bottom
* CSS is for repeatable elements and sass functionality
* Components should be truly repeatable
* Mobile first: (min-width), not (max-width)

Certain exceptions may apply to all rules of course but please check with the entire team before adding any and document heavily.

## Jira
We currently use JIRA for tickets. Please reference any relevant tickets in your pull request.
