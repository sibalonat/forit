<?php

use App\Http\Controllers\FormController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ImageController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/create', [FormController::class, 'create'])->middleware(['auth', 'verified']);
// Route::post('/create', [FormController::class, 'store'])->middleware(['auth', 'verified']);
Route::get('/elaborate/{form}', [FormController::class, 'edit'])->middleware(['auth', 'verified'])->name('form.edit');
Route::put('/update/{form}', [FormController::class, 'update'])->middleware(['auth', 'verified'])->name('form.update');

Route::post('image', [ImageController::class,'store'])->name('image.store');

require __DIR__.'/auth.php';
