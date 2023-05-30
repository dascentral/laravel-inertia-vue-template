# Laravel + Inertia.js Template

This repository contains a template for a brand new [Laravel 10](https://laravel.com/docs/10.x) application.

## Technical Stack

In addition to Laravel, this application makes use of the following stack of technologies.

### Application Stack

* [Inertia.js](https://inertiajs.com)
* [Vue.js](https://vuejs.org/)
* [Tailwind CSS](https://tailwindcss.com/docs/guides/laravel)

### First-party Laravel Packages

* [Laravel Nova](https://nova.laravel.com/docs/4.0)

### Third-party Composer Packages

* [Laravel Backup](https://spatie.be/docs/laravel-backup)
* [Laravel Data](https://spatie.be/docs/laravel-data)
* [Laravel View Models](https://github.com/spatie/laravel-view-models)
* [Ray](https://spatie.be/docs/ray/v1/installation-in-your-project/laravel)
* [Faker Plugin for Pest PHP](https://pestphp.com/docs/plugins)
* [Larastan](https://github.com/nunomaduro/larastan)

## Script

Are you starting from scratch? Want to see the commands that got us here?

```bash
# Install a new Laravel application with Pest PHP within a Git repository
laravel new laravel-inertia-template --git --pest

# Install Inertia.js - Server-side
composer require inertiajs/inertia-laravel

# Set up the Inertia middleware
php artisan inertia:middleware

# Install Vue.js
yarn add -D vue

# Install Inertia.js - Client-side
yarn add -D @inertiajs/vue3

# Install Laravel Nova
composer config repositories.nova '{"type": "composer", "url": "https://nova.laravel.com"}' --file composer.json
# Manually add the following to your composer.json:
# "laravel/nova": "~4.0"
# Ensure you have a valid auth.json configured for installation before issuing a "composer update."
composer update --prefer-dist

# Add third-party composer packages
composer require spatie/laravel-backup
composer require spatie/laravel-data
composer require spatie/laravel-view-models
composer require spatie/laravel-ray
composer require pestphp/pest-plugin-faker --dev
composer require nunomaduro/larastan:^2.0 --dev

# Install Tailwind CSS
yarn add -D tailwindcss postcss autoprefixer
```

