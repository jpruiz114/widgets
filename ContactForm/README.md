# Contact Form #

## Dependency Handling ##

* [Composer](https://getcomposer.org/) for the backend libraries
* [Bower](http://bower.io/) for the frontend libraries

### Some considerations for Composer ###

To download composer:
`tasks\composer\download-phar.sh`

The Mandrill dependency was declared in the composer.json file.

For more info regarding the Mandrill library:
https://mandrillapp.com/api/docs/index.php.html

To download the libraries:
`tasks\composer\install-dependencies.sh`

To update the libraries
`tasks\composer\update-dependencies.sh`

### Some considerations for Bower ###

To install bower if you don't have it
`tasks\bower\install.sh`

#### Clarification for the tag component #### 

For the tag component, forked this repo:
https://github.com/xoxco/jQuery-Tags-Input

... and changed the library here:
https://github.com/jpruiz114/jQuery-Tags-Input-Custom

To list the project frontend dependencies
`tasks\bower\list-dependencies.sh`

To install the frontend dependencies
`tasks\bower\update-dependencies.sh`

With the .bowerrc file we setup the folder where you want to hold the frontend dependencies.

Install the command line interface for grunt
`npm install -g grunt-cli`

Install the grunt plugins
`npm install grunt --save-dev`

Install the grunt-jsonlint plugin
`npm install grunt-jsonlint --save-dev`

Install the load-grunt-tasks plugin
`npm install load-grunt-tasks --save-dev`

