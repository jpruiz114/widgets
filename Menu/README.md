# Menu

By Jean Paul Ruiz :smiley_cat: <jpruiz114@gmail.com>

Live links:

:link: http://jeanpaulruizvallejo.com/frontend-test/Menu/

## Shots

### Desktop

![Original image](https://raw.githubusercontent.com/jpruiz114/widgets/master/Menu/assets/shots/desktop.png)

### Responsive

![Original image](https://raw.githubusercontent.com/jpruiz114/widgets/master/Menu/assets/shots/responsive.png)

### Mobile

![Original image](https://raw.githubusercontent.com/jpruiz114/widgets/master/Menu/assets/shots/mobile.jpg)

## Dependency Handling

* [Bower](http://bower.io/) for the frontend libraries

### Some considerations for Bower

To install Bower, if you don't have it
`tasks\bower\install.sh`

#### Instructions with Bower

To list the project frontend dependencies
`tasks\bower\list-dependencies.sh`

To install the frontend dependencies
`tasks\bower\update-dependencies.sh`

With the .bowerrc file we setup the folder where you want to hold the frontend dependencies.

* The folder **components** had to be added to the repo so the deployment on the server side could have the dependencies.

## Build & Validation Automation with Grunt

:bulb: Install the command line interface for Grunt
`npm install -g grunt-cli`

:bulb: Install the latest version of Grunt in your project folder
`npm install grunt --save-dev`

:bulb: Install the **grunt-contrib-sass** package
`npm install grunt-contrib-sass --save-dev`

:bulb: Install the **grunt-jsonlint** package
`npm install grunt-jsonlint --save-dev`

:bulb: Install the **grunt-jsvalidate** package
`npm install grunt-jsvalidate --save-dev`

:bulb: Install the **grunt-remove-logging** packkage
`npm install grunt-remove-logging --save-dev`

:bulb: Install the **load-grunt-tasks** package
`npm install load-grunt-tasks --save-dev`

* Notice that the **node_modules** folder (Created for Grunt) was excluded from the repository in the **.gitignore** file.

## Styles Considerations

For the styles [SMACSS](https://smacss.com/book/type-layout) guideline is used.

BEM could have been used but SMACSS has proven (In my case) to facilitate modularity and re - usability.

## Automation

In order to save time, a shell script named **push-and-deploy.sh** was created.

This script calls **Grunt** and pushes the changes to the GitHub repo.

The repo was setup so after every push to the master branch, a web hook is called that performs an automatic deployment on the server side.

**Grunt**, as listed above, uses several tasks to automate:

* Validating the json files.
* Validating the JavaScript files.
* Removing the logging from JavaScript (console.log() calls that developers use).
* Compiling the sass files into css files.

Inside the **tasks** folder other shell scripts can be found.

There are several shell scripts for:

* Bower
* git

The shell scripts for **Bower** allow to:

* Install Bower
* List the current dependencies
* Install & update dependencies

The shell scripts for **git** allow to:

* Push the current changes to the repo with a custom or generic comment.

## Accessibility Evaluation

### Color Blindness Simulation

Tool used

http://www.vischeck.com/vischeck/

Image processor

http://www.vischeck.com/vischeck/vischeckImage.php

#### Scenarios Covered

* Deuteranope (a form of red/green color deficit)
* Protanope (another form of red/green color deficit)
* Tritanope (a blue/yellow deficit - very rare)

#### Color Blind Simulation for Menu

**Original image**

![Original image](https://github.com/jpruiz114/widgets/blob/master/Menu/assets/images/color-blindness-analysis/color-blindness-analysis/original.jpg)

**Deuteranope**

![Original image](https://github.com/jpruiz114/widgets/blob/master/Menu/assets/images/color-blindness-analysis/color-blindness-analysis/deuteranope.jpg)

**Protanope**

![Original image](https://github.com/jpruiz114/widgets/blob/master/Menu/assets/images/color-blindness-analysis/color-blindness-analysis/protanope.jpg)

**Tritanope**

![Original image](https://github.com/jpruiz114/widgets/blob/master/Menu/assets/images/color-blindness-analysis/color-blindness-analysis/tritanope.jpg)
