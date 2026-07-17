<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\UmkmController;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductCatalogController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/umkm', [CatalogController::class, 'index'])->name('umkm.index');
Route::get('/umkm/{slug}', [CatalogController::class, 'show'])->name('umkm.show');
Route::get('/produk', [ProductCatalogController::class, 'index'])->name('produk.index');
Route::get('/produk/{umkmSlug}/{productSlug}', [ProductCatalogController::class, 'show'])->name('produk.show');

/*
|--------------------------------------------------------------------------
| Admin Routes (Authenticated + Admin Role)
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('umkm', UmkmController::class)->except(['show']);
    Route::resource('produk', ProductController::class)->except(['show']);
    Route::resource('kategori', CategoryController::class)->except(['show']);
});

/*
|--------------------------------------------------------------------------
| Profile Routes (Authenticated)
|--------------------------------------------------------------------------
*/

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
