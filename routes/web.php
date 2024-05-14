<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\skillsController;

Route::get('/api/skills', [skillsController::class, 'getSkills']);

Route::get('/', function () {
    return view('welcome');
});
Route::get('/portfolio', function() {
    return view('portfolio');
});
