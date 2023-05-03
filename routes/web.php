<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\RentLogController;
use App\Http\Controllers\BookRentController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;

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

Route::get('/', [PublicController::class, 'index']);
Route::get('/search', [PublicController::class, 'search'])->name('search');

Route::middleware('only_guest')->group(function() {
Route::get('login', [AuthController::class, 'login'])->name('login');
Route::post('login', [AuthController::class, 'authenticating']);
Route::get('/register', [AuthController::class, 'register']);
Route::post('/register', [AuthController::class, 'store']);

});

Route::middleware('auth')->group(function() {
Route::get('logout', [AuthController::class, 'logout']);
Route::get('profile', [UserController::class, 'profile'])->middleware('only_client')->name('profile');
    Route::middleware('only_admin')->group(function() {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    // {Route Books}
    Route::get('books', [BookController::class, 'index'])->name('books');

    Route::get('add-book', [BookController::class, 'add']);
    Route::post('/add-book', [BookController::class, 'store']);

    Route::get('edit-book/{book}', [BookController::class, 'edit']);
    Route::patch('edit-book/{book}', [BookController::class, 'update']);
        
    Route::delete('/delete-book/{book}', [BookController::class, 'destroy'])->name('delete');
    Route::get('deleted-book', [BookController::class, 'deletedBook']);
    Route::get('restore-book/{book}', [BookController::class, 'restoreBook']);
    
    Route::get('book-rent', [BookRentController::class, 'index']);
    Route::post('/book-rent', [BookRentController::class, 'store']);
        
    Route::get('return-book', [BookRentController::class, 'returnBook']);    
    Route::post('/return-book', [BookRentController::class, 'storeReturnBook']);    


    // {Route Categories}
    Route::get('categories', [CategoryController::class, 'index'])->name('categories');

    Route::get('add-category', [CategoryController::class, 'add']);
    Route::post('/add-category', [CategoryController::class, 'store']);

    Route::get('edit-category/{category}', [CategoryController::class, 'edit']);
    Route::put('edit-category/{category}', [CategoryController::class, 'update']);

    Route::delete('/delete-category/{category}', [CategoryController::class, 'destroy'])->name('delete');
    Route::get('deleted-category', [CategoryController::class, 'deletedCategory']);
    Route::get('restore-category/{category}', [CategoryController::class, 'restoreCategory']);

    // {Route Users}
    Route::get('users', [UserController::class, 'index'])->name('users');
    Route::get('registered-users', [UserController::class, 'registeredUsers']);
    Route::get('detail-users/{id}', [UserController::class, 'show']);
    Route::get('approve-users/{slug}', [UserController::class, 'approve']);

    Route::delete('/delete-users/{slug}', [UserController::class, 'destroy'])->name('delete');
    Route::get('deleted-users', [UserController::class, 'deletedUsers']);
    Route::get('restore-users/{user}', [UserController::class, 'restoreUsers']);

    Route::get('rent-logs', [RentLogController::class, 'index']);
    });


});