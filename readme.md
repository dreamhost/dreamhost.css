# DreamHost.css

## Development

Make sure you have [NPM](http://blog.npmjs.org/post/85484771375/how-to-install-npm) and [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) installed and then:

1. Use Node >= 8.
1. `npm install -g npm`
1. `npm install`
1. `gulp`

The BrowserSync server will be running at `http://localhost:9999`.

## Contributing

1. Create a feature branch. `git checkout -b my-branch`
1. Add, commit, and push your code. `git add file.css; git commit; git push`
   - Please refer to our codestyle guide for CSS and JS in [contributing.md](contributing.md).
1. Create a Merge Request in GitLab.
   - A link to create an MR will show up in the output of `git push`.

## Releasing new version

A new release is automatically built and published every time a tag is created.
All automation is run by GitLab CI and defined in [.gitlab-ci.yml](.gitlab-ci.yml).

Before picking a new version number, please make sure it's in line with
[Semantic Versioning](http://semver.org/) guidelines.

### Option 1 - via CLI

1. `git checkout master`
1. `git tag <version>`
   - Example: `git tag 1.2.3`
1. `git push --tags`
1. Follow the build result in [GitLab](https://git.dreamhost.com/dreamhost/design/dreamhost.css/pipelines).

### Optoon 2 - via GUI

1. Create a tag in [GitLab](https://git.dreamhost.com/dreamhost/design/dreamhost.css/-/tags/new)
1. Follow the build result in [GitLab](https://git.dreamhost.com/dreamhost/design/dreamhost.css/pipelines).

## Updating each app

Some DreamHost apps use the framework either as a dependency, or as a devDependency in their `package.json`.

Execute the below to update the `package.json` to the newest version of the framework that has been published to NPM:

- `npm install dreamhost-css@latest --save` if dependency
- `npm install dreamhost-css@latest --save-dev` if devDependency

Until the framework is stable, once the package has been installed and updated,
we need to compile CSS and check the app to see if anything has changed and should be fixed.
Once we get to a stable version, we should only need to take this safety precaution on major releases.
