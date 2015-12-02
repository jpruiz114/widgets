# Contact Form

By Jean Paul Ruiz :smiley_cat: <jpruiz114@gmail.com>

Live demo can be seen here:

:link: http://jeanpaulruizvallejo.com/frontend-test/ContactForm/

English and Spanish links:

:us: http://jeanpaulruizvallejo.com/frontend-test/ContactForm/en

:es: http://jeanpaulruizvallejo.com/frontend-test/ContactForm/es

## Dependency Handling

* [Composer](https://getcomposer.org/) for the backend libraries
* [Bower](http://bower.io/) for the frontend libraries

### Some considerations for Composer

To download Composer, if you don't have it:
`tasks\composer\download-phar.sh`

#### Clarification for the Mandrill library

:email: The Mandrill dependency was declared in the composer.json file.

It will allow to actually send email messages with this form through the Mandrill API.

For more info regarding the Mandrill library:
https://mandrillapp.com/api/docs/index.php.html

#### Instructions with Composer

To download the libraries:
`tasks\composer\install-dependencies.sh`

To update the libraries
`tasks\composer\update-dependencies.sh`

* The folder **library** had to be added to the repo so the deployment on the server side could have the dependencies.

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
`npm install grunt-remove-logging`

:bulb: Install the **load-grunt-tasks** package
`npm install load-grunt-tasks --save-dev`

* Notice that the **node_modules** folder (Created for Grunt) was excluded from the repository in the **.gitignore** file.

## SEO Considerations

About multi-regional and multilingual sites:

https://support.google.com/webmasters/answer/182192?hl=en

The trick here was achieved in part by using the htaccess file under the Apache server.

Google advices not to have a unique URL with several languages but to have different urls.

If possible, Google also advices not only to have different urls but different domain names.

For this case, a default URL was provided (See the demo URL).

When a user opens this default URL, the preferred language will be asked and the page will load with that language.

The two possible options are **english** or **spanish**. More languages could be added if needed.

The default language for this base URL will be **english**.

Other two urls are provided and setup with the help of the htaccess from Apache (See above).

The same page will be opened but a GET param will differentiate which language has to be loaded.

A robots.txt file was added to hide some folders from the web spiders.

The meta tags **author**, **description**, **keywords**, **robots** and **revisit-after** were added.

* A Google Analytics script was added but that has to do more with tracking than anything else.

## Styles Considerations

For the styles [SMACSS](https://smacss.com/book/type-layout) guideline is used.

### Packages Used

For the tokenizer, this package was used:

http://miguelfonseca.com/bootstrap-tokenizer/

:octocat: https://github.com/fmmfonseca/bootstrap-tokenizer

For the checkbox, this package was used:

http://fronteed.com/iCheck/

:octocat: https://github.com/fronteed/iCheck/

For the button, this UI pack was used:

http://lab.hakim.se/ladda/

:octocat: https://github.com/hakimel/Ladda

## Languages Considerations

navigator.language value should be found in the ISO 639-1:

https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

## Automation ##

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
* Composer
* git
* recess

The shell scripts for **Bower** allow to:

* Install Bower
* List the current dependencies
* Install & update dependencies

The shell scripts for **Composer** allow to:

* Download the phar file
* Install the dependencies
* Update the dependencies

The shell scripts for git allow to:

* Push the current changes to the repo with a custom or generic comment.

The shell scripts for recess allow to:

* Compile the less files for the bootstrap tokenizer
* See the current less compiler version

