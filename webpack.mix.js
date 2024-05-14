const mix = require('laravel-mix');

mix.js('resources/js/skills.js', 'public/js');

if (mix.inProduction()) {
    mix.version();
}
