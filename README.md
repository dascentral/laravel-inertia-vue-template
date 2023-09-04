# Laravel + Inertia.js + Vue.js Template

This repository contains a template for a brand new [Laravel 10](https://laravel.com/docs/10.x) application.

## Getting Started

### Install Node.js Dependencies

```bash
yarn install
```

### Add Laravel Nova Credentials

This repository template includes the use of [Laravel Nova](https://nova.laravel.com/) which is a paid application. Before getting started, you must either add an auth.json to the root of this repository with valid credentials or remove Laravel Nova from the list of composer dependencies.

### Install PHP Depdencies

```bash
composer install
```

### Configure the Laravel Environment

```bash
cp .env.example .env
```

### Generate an Application Key

```bash
php artisan key:generate
```

### Create a Local Database

With your application now properly configured, you will need to create a new MySQL database. This template assumes the use of a database named `laravel_inertia_vue_templates`.

### Migrate & Seed the Database

```bash
php artisan migrate:fresh --seed
```

### Start the Develoment Server

```bash
yarn dev
```

If using Laravel Valet or Laravel Herd, your site should now be live: http://laravel-inertia-vue-template.test.

## Technical Stack

In addition to Laravel, this application makes use of the following technologies.

- [Inertia.js](https://inertiajs.com)
- [Vue.js](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/docs/guides/laravel)

### Composer Packages

#### Laravel Nova

[Laravel Nova](https://nova.laravel.com/docs/4.0) is a beautifully-designed administration panel for Laravel carefully crafted by the creators of Laravel.

#### Pest — The elegant PHP testing framework

[Pest](https://pestphp.com/) is a testing framework with a focus on simplicity, meticulously designed to bring back the joy of testing in PHP. We add the following plugins to each Laravel application.

- [Faker](https://pestphp.com/docs/plugins#faker)
- [Laravel](https://pestphp.com/docs/plugins#laravel)

#### Spatie Packages

- [Laravel Backup](https://spatie.be/docs/laravel-backup)
- [Laravel Data](https://spatie.be/docs/laravel-data)
- [Laravel View Models](https://github.com/spatie/laravel-view-models)
- [Ray](https://spatie.be/docs/ray/v1/installation-in-your-project/laravel)

### Tailwind CSS Plugins

- [@tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)
- [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)

### Linting & Formatting

- [Larastan](https://github.com/nunomaduro/larastan)
- [ESLint](https://eslint.org/docs/latest/use/getting-started)
- [Prettier](https://prettier.io/docs/en/index.html)
- [Stylelint](https://stylelint.io/)

We additionally lean into the following configurations & plugins for these tools.

- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss)
- [eslint-plugin-vue](https://eslint.vuejs.org/)
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [vite-plugin-eslint](https://github.com/gxmari007/vite-plugin-eslint)
- [vite-plugin-vue](https://github.com/vitejs/vite-plugin-vue)

## Application Customizations

### Models

- Split `name` into `first` and `last` name fields within `App\Models\User.php`

### Testing

- Added the `LazilyRefreshDatabase` trait to `tests/TestCase.php`
- Added a `login()` method to `tests/Pest.php` that easily creates & authenticates users within tests

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

# Install third-party composer packages
composer require spatie/laravel-backup
composer require spatie/laravel-data
composer require spatie/laravel-ray
composer require spatie/laravel-view-models
composer require pestphp/pest-plugin-faker --dev
composer require pestphp/pest-plugin-laravel --dev
composer require nunomaduro/larastan:^2.0 --dev

# Install & initialize Tailwind CSS
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install Tailwind CSS plugins
yarn add -D @tailwindcss/aspect-ratio
yarn add -D @tailwindcss/forms
yarn add -D @tailwindcss/typography

# Install ESLint & plugins
yarn add -D eslint
yarn add -D eslint-config-prettier
yarn add -D eslint-plugin-prettier
yarn add -D eslint-plugin-tailwindcss
yarn add -D eslint-plugin-vue

# Install Prettier & plugins
yarn add -D prettier
yarn add -D prettier-plugin-tailwindcss

# Install Stylelint
yarn add -D stylelint
yarn add -D stylelint-config-standard

# Install Vite plugins
yarn add -D @vitejs/plugin-vue
yarn add -D vite-plugin-eslint
```
