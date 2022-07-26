<?php

use App\Http\Controllers\AugmentController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\KonvaController;
use App\Http\Controllers\LayoutController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

use App\Http\Controllers\MarkersController;
use App\Http\Controllers\PiniaController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TourController;
use App\Http\Controllers\UserRolesController;

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

// Route::get('', function() {

// });

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


// mapview
Route::get('mapview', [MarkersController::class, 'index'])->middleware(['auth', 'verified'])->name('markers');
Route::get('mapview/create', [MarkersController::class, 'create'])->middleware(['auth', 'verified'])->name('markers.create');
Route::get('mapview/{mapview}', [MarkersController::class, 'edit'])->middleware(['auth', 'verified'])->name('markers.edit');
Route::get('mapview/{mapview}/show', [MarkersController::class, 'show'])->middleware(['auth', 'verified'])->name('markers.show');
Route::put('mapview/{mapview}', [MarkersController::class, 'update'])->middleware(['auth', 'verified'])->name('markers.update');
Route::delete('mapview/{mapview}', [MarkersController::class, 'delete'])->middleware(['auth', 'verified'])->name('markers.delete');
Route::post('mapview/{mapview}/image', [MarkersController::class, 'mapimage'])->middleware(['auth', 'verified'])->name('markers.mediastore');
Route::get('mapview/{mapview}/imgshow', [MarkersController::class, 'showImg'])->middleware(['auth', 'verified'])->name('markers.mediashow');
Route::delete('mapview/{mapview}/image/{id}', [MarkersController::class, 'deleteImg'])->middleware(['auth', 'verified'])->name('markers.mediadel');

// markers
Route::get('map/{mapview}', [MarkersController::class, 'getMarkers'])->middleware(['auth', 'verified'])->name('markers.all');
Route::post('mapview/{mapview}/store', [MarkersController::class, 'store'])->middleware(['auth', 'verified'])->name('markers.store');
Route::get('marker/{marker}', [MarkersController::class, 'single'])->middleware(['auth', 'verified'])->name('marker.single');
Route::put('marker/{marker}', [MarkersController::class, 'up'])->middleware(['auth', 'verified'])->name('markers.up');
Route::delete('marker/{marker}', [MarkersController::class, 'del'])->middleware(['auth', 'verified'])->name('markers.del');

// marker images
Route::post('marker/{marker}/image', [MarkersController::class, 'markerImg'])->middleware(['auth', 'verified'])->name('markers.imgpost');
Route::get('marker/{marker}/images', [MarkersController::class, 'markerImages'])->middleware(['auth', 'verified'])->name('markers.imgsget');
Route::delete('marker/{marker}/images/{id}', [MarkersController::class, 'deleteMarkerImg'])->middleware(['auth', 'verified'])->name('markers.imgdel');
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


// konva

Route::get('crt', [KonvaController::class, 'create'])->middleware(['auth', 'verified']);

Route::get('konva/{form}', [KonvaController::class, 'edit'])->middleware(['auth', 'verified'])->name('konva.edit');
Route::put('up/{form}', [KonvaController::class, 'update'])->middleware(['auth', 'verified'])->name('konva.update');
Route::delete('de/{form}', [KonvaController::class, 'destroy'])->middleware(['auth', 'verified'])->name('konva.destroy');

Route::post('konva/{form}/image', [KonvaController::class, 'stimage'])->middleware(['auth', 'verified'])->name('konva.image');
Route::get('konva/{form}/image/{id}/show', [KonvaController::class, 'showMedia'])->middleware(['auth', 'verified'])->name('konvaimage.show');
Route::delete('konva/{form}/image/{id}', [KonvaController::class, 'deleteMedia'])->middleware(['auth', 'verified'])->name('konvaimage.delete');


//augmentation
Route::get('augmentation/create', [AugmentController::class, 'create'])->middleware(['auth', 'verified'])->name('app.augmentation');
Route::get('augmentation', [AugmentController::class, 'mind'])->middleware(['auth', 'verified'])->name('app.mind');

// pinia
Route::get('pinia', [PiniaController::class, 'create'])->middleware(['auth', 'verified'])->name('app.pinia');


// virtual tours
Route::get('tours', [TourController::class, 'index'])->middleware(['auth', 'verified'])->name('app.tours');
Route::get('tours/create', [TourController::class, 'create'])->middleware(['auth', 'verified'])->name('tour.create');
// Route::get('tours/{tour:slug}', [TourController::class, 'show'])->middleware(['auth', 'verified'])->name('tour.show');
Route::post('tours', [TourController::class, 'store'])->middleware(['auth', 'verified'])->name('tour.store');
Route::get('tours/edit/{tour:slug}', [TourController::class, 'edit'])->middleware(['auth', 'verified'])->name('tour.edit');

// stations
Route::get('tours/{tour:slug}/create-station', [TourController::class, 'createStation'])->middleware(['auth', 'verified'])->name('tour.redirect');
Route::get('tours/{tour:slug}/edit-station/{station}', [TourController::class, 'editStation'])->middleware(['auth', 'verified'])->name('tour.stationmodal');
// apiIndex
Route::get('tours/{tour}/all', [TourController::class, 'apiIndex'])->middleware(['auth', 'verified'])->name('tours.all');
Route::put('tours/{tour:slug}/edit-station/{station}', [TourController::class, 'update'])->middleware(['auth', 'verified'])->name('tour.stationupdate');
// feature delete
Route::post('single/{station}/img', [TourController::class, 'stationAudioImage'])->middleware(['auth', 'verified'])->name('tour.featureimg');
Route::delete('single/{station}/img/{id}', [TourController::class, 'deleteFeature'])->middleware(['auth', 'verified'])->name('tour.delfeature');

Route::get('single/{station}', [TourController::class, 'showStation'])->middleware(['auth', 'verified'])->name('single.station');
// api delete
Route::delete('single/{station}/delete', [TourController::class, 'delete'])->middleware(['auth', 'verified'])->name('station.delete');


// api station img
Route::post('single/{station}/image-store', [TourController::class, 'stationImage'])->middleware(['auth', 'verified'])->name('station.storeimg');
Route::delete('single/{station}/images/{id}', [TourController::class, 'deleteStationImg'])->middleware(['auth', 'verified'])->name('station.imgdel');
Route::get('single/{station}/images', [TourController::class, 'stationImages'])->middleware(['auth', 'verified'])->name('station.imgsget');
// Route::get('tours/{tour:slug}/create-dialog', [TourController::class, 'createDialog'])->middleware(['auth', 'verified'])->name('tour.stationdialog');


// users
Route::get('users', [UserRolesController::class, 'index'])->middleware(['auth', 'verified'])->name('users.all');
Route::post('users', [UserRolesController::class, 'store'])->middleware(['auth', 'verified'])->name('user.change');

// layout
Route::get('layout', [LayoutController::class, 'index'])->middleware(['auth', 'verified'])->name('layout.mixin');
Route::get('lay', [LayoutController::class, 'ndryshe'])->middleware(['auth', 'verified'])->name('layout.pamixin');


// projects and adjencency list

Route::get('projects', [ProjectController::class, 'index'])->middleware(['auth', 'verified'])->name('project.all');
Route::get('projects/create', [ProjectController::class, 'create'])->middleware(['auth', 'verified'])->name('project.create');
Route::get('projects/{project}', [ProjectController::class, 'show'])->middleware(['auth', 'verified'])->name('project.show');
// projects folder
Route::post('projects/{project}', [ProjectController::class, 'folderStore'])->middleware(['auth', 'verified'])->name('folder.store');
Route::put('projects/{project}', [ProjectController::class, 'folderUpdate'])->middleware(['auth', 'verified'])->name('folder.update');
Route::delete('projects/{project}', [ProjectController::class, 'destroy'])->middleware(['auth', 'verified'])->name('folder.delete');
Route::post('projects', [ProjectController::class, 'store'])->middleware(['auth', 'verified'])->name('project.post');



require __DIR__.'/auth.php';
