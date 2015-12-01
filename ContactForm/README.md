var language = window.navigator.userLanguage || window.navigator.language;

Composer for the libraries

Bower for the frontend libraries

To download composer:
tasks\composer\download-phar.sh

The Mandrill dependency was declared in the composer.json file.

To download the libraries:
tasks\composer\install-dependencies.sh

To update the libraries
tasks\composer\update-dependencies.sh

For the Mandrill API:
https://mandrillapp.com/api/docs/index.php.html

Frontend dependencies with bower

To install bower if you don't have it
tasks\bower\install.sh

Clarification for the tag component:

For the tag component, forked this repo:
https://github.com/xoxco/jQuery-Tags-Input

... and changed the library here:
https://github.com/jpruiz114/jQuery-Tags-Input-Custom

To list the project frontend dependencies
tasks\bower\list-dependencies.sh

To install the frontend dependencies
tasks\bower\update-dependencies.sh

With the .bowerrc file we setup the folder where you want to hold the frontend dependencies.

Install the command line interface for grunt
npm install -g grunt-cli

Install the grunt plugins
npm install grunt --save-dev

