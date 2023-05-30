# Laravel + Inertia.js Template

This repository contains a template for a brand new [Laravel 10](https://laravel.com/docs/10.x) application.

## Technical Stack

In addition to Laravel, this application makes use of the following stack of technologies.

**Application Stack**

* [Inertia.js](https://inertiajs.com)
* [Vue.js](https://vuejs.org/)

**Testing Utilities**

* [Faker Plugin for Pest PHP](https://pestphp.com/docs/plugins)

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

# Add the Pest PHP Faker plugin
composer require pestphp/pest-plugin-faker --dev


```

