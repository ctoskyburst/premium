<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'welcome'])->name('home.index');
Route::get('/services', [HomeController::class, 'services'])->name('services.index');
Route::get('/our-progress', [HomeController::class, 'progress'])->name('progress.index');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact.index');
Route::post('/contact', [HomeController::class, 'contactStore'])->name('contact.store');
Route::get('/about', [HomeController::class, 'about'])->name('about.index');
Route::get('/thanks', [HomeController::class, 'thanks'])->name('thanks.index');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
