# Contact Form

By Jean Paul Ruiz <jpruiz114@gmail.com>

## Dependency Handling

* [Composer](https://getcomposer.org/) for the backend libraries
* [Bower](http://bower.io/) for the frontend libraries

### Some considerations for Composer

To download composer, if you don't have it:
`tasks\composer\download-phar.sh`

#### Clarification for the Mandrill library

The Mandrill dependency was declared in the composer.json file.

It will allow to actually send email messages with this form through the Mandrill API.

For more info regarding the Mandrill library:
https://mandrillapp.com/api/docs/index.php.html

#### Instructions with Composer

To download the libraries:
`tasks\composer\install-dependencies.sh`

To update the libraries
`tasks\composer\update-dependencies.sh`

* Notice that the **library** folder (Setup in composer.json) was excluded from the repository in the **.gitignore** file.

### Some considerations for Bower

To install Bower, if you don't have it
`tasks\bower\install.sh`

#### Clarification for the tag component

For the tag component, forked this repo:
https://github.com/xoxco/jQuery-Tags-Input

...and changed the library here:
https://github.com/jpruiz114/jQuery-Tags-Input-Custom

The custom repo from above was added to the bower.json file as a dependency for the project.

#### Instructions with Bower

To list the project frontend dependencies
`tasks\bower\list-dependencies.sh`

To install the frontend dependencies
`tasks\bower\update-dependencies.sh`

With the .bowerrc file we setup the folder where you want to hold the frontend dependencies.

* Notice that the **components** folder (Setup in .bowerrc) was excluded from the repository in the **.gitignore** file.

## Build & Validation Automation with Grunt

Install the command line interface for Grunt
`npm install -g grunt-cli`

Install the latest version of Grunt in your project folder
`npm install grunt --save-dev`

Install the **grunt-contrib-sass** package
`npm install grunt-contrib-sass --save-dev`

Install the **grunt-jsonlint** package
`npm install grunt-jsonlint --save-dev`

Install the **load-grunt-tasks** package
`npm install load-grunt-tasks --save-dev`

* Notice that the **node_modules** folder (Created for Grunt) was excluded from the repository in the **.gitignore** file.

