<?php

use App\Http\Controllers\TestSiteController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [TestSiteController::class, 'loadSongs']);

Route::get('choose', function() {
    return view('ChooseSite');
});

Route::get('/load', [TestSiteController::class, 'getSongTitles']);

