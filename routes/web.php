<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\skillsController;
use App\Http\Controllers\clientsController;

Route::get('/api/skills', [skillsController::class, 'getSkills']);
Route::get('/api/clients', [clientsController::class,'getClients']);

Route::get('/', function () {
    return view('welcome');
});
Route::get('/portfolio', function() {
    return view('portfolio');
});
