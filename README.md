# Frontend Widgets Collection

A collection of four responsive, interactive web widgets built with modern web technologies.

**By Jean Paul Ruiz** <jpruiz114@gmail.com>

## Overview

This repository contains the source code for four distinct widgets, each designed to be modular, responsive, and easily integrable into web applications. Each widget includes comprehensive styling, internationalization support, and build tools.

## Widgets

### Blog Post
Interactive blog post display widget with profile pictures and social sharing capabilities.
- **Location**: `./BlogPost/`
- **GitHub**: https://github.com/jpruiz114/widgets/tree/master/BlogPost
- **Features**: Responsive layout, image gallery, profile integration

### Contact Form
Full-featured contact form with validation, styling, and email integration.
- **Location**: `./ContactForm/`
- **GitHub**: https://github.com/jpruiz114/widgets/tree/master/ContactForm
- **Features**: Form validation, Mandrill email integration, custom styling, accessibility support

### Menu
Responsive navigation menu component with customizable styling.
- **Location**: `./Menu/`
- **GitHub**: https://github.com/jpruiz114/widgets/tree/master/Menu
- **Features**: Mobile-responsive, FontAwesome icons, customizable themes

### Profile
User profile display widget with social links and information cards.
- **Location**: `./Profile/`
- **GitHub**: https://github.com/jpruiz114/widgets/tree/master/Profile
- **Features**: Avatar support, social media integration, responsive design

## Technology Stack

- **Frontend**: HTML5, CSS3/Sass, JavaScript, jQuery
- **Build Tools**: Grunt, Bower
- **Testing**: Karma, Jasmine
- **Styling**: Bootstrap, FontAwesome
- **Internationalization**: i18next
- **Backend**: PHP (for contact form)

## Development Setup

### Prerequisites
- Node.js and npm
- Bower
- Grunt CLI
- PHP (for contact form widget)

### Installation
1. Clone the repository
2. For each widget directory, run:
   ```bash
   npm install
   bower install
   grunt
   ```

### Build Process
Run the automated build script:
```bash
./push-and-deploy.sh
```

This script:
- Builds all widget assets with Grunt
- Validates code quality
- Commits changes
- Pushes to repository

## Deployment

### Live Demo
The widgets are deployed and accessible at:
- Blog Post: http://frontend-widgets.herokuapp.com/widgets/blog-post/
- Contact Form: http://frontend-widgets.herokuapp.com/widgets/contact-form/
- Menu: http://frontend-widgets.herokuapp.com/widgets/menu/
- Profile: http://frontend-widgets.herokuapp.com/widgets/profile/

### Local Development
Each widget includes:
- `index.php` - Main entry point
- `sass/` - Sass stylesheets
- `js/` - JavaScript source and compiled files
- `assets/` - Images and static resources
- `locales/` - Internationalization files
- `test/` - Unit tests

## Project Structure

```
widgets/
├── assets/               # Shared widget assets
├── BlogPost/            # Blog post widget
├── ContactForm/         # Contact form widget  
├── Menu/                # Navigation menu widget
├── Profile/             # Profile display widget
├── Deploy.php           # Deployment helper
├── ga-tracking.php      # Analytics tracking
├── pull-changes.sh      # Pull script
├── push-and-deploy.sh   # Build and deploy script
└── tests/               # Shared tests
```

## Features

- **Responsive Design**: All widgets adapt to different screen sizes
- **Internationalization**: Multi-language support with i18next
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Cross-browser Compatibility**: Tested on modern browsers
- **Modular Architecture**: Each widget is self-contained
- **Build Automation**: Grunt-based build pipeline
- **Testing**: Karma/Jasmine test suite

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `grunt test`
5. Build assets: `grunt`
6. Submit a pull request

## License

This project is open source. Please check individual widget directories for specific licensing information.
