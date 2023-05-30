# Laravel + Inertia.js Template

This repository contains a template for a brand new [Laravel 10](https://laravel.com/docs/10.x) application.

## Technical Stack

In addition to Laravel, this application makes use of the following stack of technologies.

### Application Stack

* [Inertia.js](https://inertiajs.com)
* [Vue.js](https://vuejs.org/)

### Composer Packages

* [Laravel Backup](https://spatie.be/docs/laravel-backup)
* [Laravel Data](https://spatie.be/docs/laravel-data)
* [Laravel View Models](https://github.com/spatie/laravel-view-models)
* [Faker Plugin for Pest PHP](https://pestphp.com/docs/plugins)
* [Ray](https://spatie.be/docs/ray/v1/installation-in-your-project/laravel)

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

# Add Laravel Backup
composer require spatie/laravel-backup

# Add Laravel Data
composer require spatie/laravel-data

# Add Laravel View Models
composer require spatie/laravel-view-models

# Add Ray
composer require spatie/laravel-ray

# Add the Pest PHP Faker plugin
composer require pestphp/pest-plugin-faker --dev


```

