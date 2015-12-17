# Datatecnics Static Site

[Live](https://tecknoworks.github.io/datatecnics)

This website uses

* angular
* angular-bootstrap
* bootstrap
* sass
* coffee-script

## Install

NOTE: Make sure you have node.js installed.

Will install bower, npm packages and install sass as a ruby gem.

For windows users: You can run all these commands from git bash. Just *cd*
to the cloned repo location. With the exception of *npm install*, all commands
need to run in different terminals because they are blocking (meaning you can't
type commands after unless you cancel with Ctrl+C or Ctrl+D)

```
npm install
```

Compile and watch coffee-script

```
npm run coffee
```

Compile and watch sass

```
npm run sass
```

To start the webserver

```
npm run server
```

You can now open [http://localhost:8080/](http://localhost:8080/).

## Gotchas

Js files from *bower_components* have been added to git with *git add -f*
because they need to be served from gh-pages. If you add more bower
packages, don't forget to add the required files to the repo as well.

Please don't commit the entire folders, just the JS files you need.

## Deployment

To deploy, just commit the compiled files (they should be visible with
*git status*) and push to master.

After a while, the content on https://tecknoworks.github.io/datatecnics
should refresh.

## TODO

* fonts size, weight, colors adjustments
* menu style
* add links to twitter, fb, etc
* hover over menu should open it
* add links to readme more buttons
* text on some slides is too long
* responsive fixes
