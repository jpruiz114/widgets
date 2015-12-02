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

~~Notice that the **library** folder (Setup in composer.json) was excluded from the repository in the **.gitignore** file.~~

This folder had to be added again so the deployment on the server side could have the dependencies.

### Some considerations for Bower

To install Bower, if you don't have it
`tasks\bower\install.sh`

#### Clarification for the tag component

For the tag component, forked this repo:
https://github.com/xoxco/jQuery-Tags-Input

...and changed the library here:
https://github.com/jpruiz114/jQuery-Tags-Input-Custom

The custom repo from above was added to the bower.json file as a dependency for the contact form project.

#### Instructions with Bower

To list the project frontend dependencies
`tasks\bower\list-dependencies.sh`

To install the frontend dependencies
`tasks\bower\update-dependencies.sh`

With the .bowerrc file we setup the folder where you want to hold the frontend dependencies.

~~Notice that the **components** folder (Setup in .bowerrc) was excluded from the repository in the **.gitignore** file.~~

This folder had to be added again so the deployment on the server side could have the dependencies.

## Build & Validation Automation with Grunt

Install the command line interface for Grunt
`npm install -g grunt-cli`

Install the latest version of Grunt in your project folder
`npm install grunt --save-dev`

Install the **grunt-contrib-sass** package
`npm install grunt-contrib-sass --save-dev`

Install the **grunt-jsonlint** package
`npm install grunt-jsonlint --save-dev`

Install the **grunt-jsvalidate** package
`npm install grunt-jsvalidate --save-dev`

Install the **load-grunt-tasks** package
`npm install load-grunt-tasks --save-dev`

* Notice that the **node_modules** folder (Created for Grunt) was excluded from the repository in the **.gitignore** file.

## SEO Considerations

Multi-regional and multilingual sites:

https://support.google.com/webmasters/answer/182192?hl=en

## Styles Considerations

For the styles [SMACSS](https://smacss.com/book/type-layout) guideline is used.

## Languages Considerations

navigator.language list of all languages should match the ISO 639-1:

https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

For the flags, the following project was added with bower:

flag-icon-css

https://github.com/lipis/flag-icon-css

The country codes are the ones from the ISO 3166-1 that can be seen here:

http://www.iso.org/iso/country_names_and_code_elements

For spanish, the flag for the country Spain (ES) will be used.

For english, the flag for the country USA (US) will be used.