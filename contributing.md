Thanks for contributing to DreamHost.css. Please start by [reading the documentation](http://dreamhost.github.io/dreamhost.css).

## HTML Guidelines
[@mdo HTML Guidelines](http://codeguide.co/#html)

## CSS Guidelines
* No unsetting css
* No !important except in _utilities.scss
* No numbers or colours  outside of _variables.scss
* No margin-top [(read more)](http://csswizardry.com/2012/06/single-direction-margin-declarations/)
* The framework is for repeatable elements and sass functionality, not one-off styles
* Components should be truly repeatable and built exclusively using @extends
* Mobile first: (min-width), not (max-width)

Certain exceptions may apply to all rules of course but please check with the entire team before adding any and document heavily.

### Sass Comments

	/*

	Name of component

	This is the comment block that should start every component or utility
	class. It starts with the title, followed by a line break and then this
	description, which should be written in comfortable spoken english and
	limited to 80chars per line, like any other comment. Afterwards, show
	example usage including any languages that the component can be
	implemented with.

	Usage [html]:
		<div class="margin-bottom"></div>

*/

## General
If code is unfinished, indicate with a TODO comment and any relevant JIRA tickets and expected completion dates.

Code review to existing guidelines. If you disagree with a guideline, create a ticket to deal with that separately and follow the guidelines in the mean time.

We currently use JIRA for tickets. Please reference any relevant tickets in your pull request.

## Distributing
We will be using [SemVer](http://semver.org) for versioning.
