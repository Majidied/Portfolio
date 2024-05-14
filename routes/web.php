<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\skillsController;
use App\Http\Controllers\clientsController;
use App\Http\Controllers\projectsController;
use App\Http\Controllers\contactsController;

Route::get('/api/skills', [skillsController::class, 'getSkills']);

Route::get('/', function () {
    return view('welcome');
});
Route::get('/portfolio', function() {
    return view('portfolio');
});
