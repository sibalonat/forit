<?php

use App\Http\Controllers\FormController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

use App\Http\Controllers\MarkersController;

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


// mapview
Route::get('mapview', [MarkersController::class, 'index'])->name('markers');
Route::get('mapview/create', [MarkersController::class, 'create'])->name('markers.create');
Route::get('mapview/{mapview}', [MarkersController::class, 'edit'])->name('markers.edit');
Route::get('mapview/{mapview}/show', [MarkersController::class, 'show'])->name('markers.show');
Route::put('mapview/{mapview}', [MarkersController::class, 'update'])->name('markers.update');
Route::delete('mapview/{mapview}', [MarkersController::class, 'delete'])->name('markers.delete');
Route::post('mapview/{mapview}/image', [MarkersController::class, 'mapimage'])->name('markers.mediastore');
Route::get('mapview/{mapview}/imgshow', [MarkersController::class, 'showImg'])->name('markers.mediashow');
Route::delete('mapview/{mapview}/image/{id}', [MarkersController::class, 'deleteImg'])->name('markers.mediadel');

// markers
Route::post('mapview/{mapview}/store', [MarkersController::class, 'store'])->name('markers.store');
Route::get('marker/{marker}', [MarkersController::class, 'single'])->name('marker.single');
Route::put('marker/{marker}', [MarkersController::class, 'up'])->name('markers.up');
Route::delete('marker/{marker}', [MarkersController::class, 'del'])->name('markers.del');
// Route::post('mapview/{mapview}/store', [MarkersController::class, 'store'])->name('markers.store');
// Route::get('mapview/{mapview}/marker/{marker}', [MarkersController::class, 'single'])->name('marker.single');
// Route::put('mapview/{mapview}/marker/{marker}', [MarkersController::class, 'up'])->name('markers.up');
// Route::delete('mapview/{mapview}/marker/{marker}', [MarkersController::class, 'del'])->name('markers.del');
// Route::get('markers/create', [MarkersController::class, 'create'])->name('markers.create');
// Route::get('markers/{marker}', [MarkersController::class, 'edit'])->name('markers.edit');

Route::get('create', [FormController::class, 'create'])->middleware(['auth', 'verified']);
// Route::post('/create', [FormController::class, 'store'])->middleware(['auth', 'verified']);
Route::get('elaborate/{form}', [FormController::class, 'edit'])->middleware(['auth', 'verified'])->name('form.edit');
Route::put('update/{form}', [FormController::class, 'update'])->middleware(['auth', 'verified'])->name('form.update');
Route::delete('delete/{form}', [FormController::class, 'destroy'])->middleware(['auth', 'verified'])->name('form.destroy');

Route::post('elaborate/{form}/image', [FormController::class, 'stimage'])->middleware(['auth', 'verified'])->name('form.image');
Route::get('elaborate/{form}/image/{id}/show', [FormController::class, 'showMedia'])->middleware(['auth', 'verified'])->name('image.show');
Route::delete('elaborate/{form}/image/{id}', [FormController::class, 'deleteMedia'])->middleware(['auth', 'verified'])->name('image.delete');
// Route::get('elaborate/{form}/images', [FormController::class, 'show'])->middleware(['auth', 'verified'])->name('form.images');
// Route::post('image', [ImageController::class,'store'])->name('image.store');

require __DIR__.'/auth.php';
