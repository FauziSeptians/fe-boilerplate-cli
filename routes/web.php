<?php

use App\Http\Controllers\User_Controller;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login',function(){
    return view('Loginpage');
});

Route::get('/thankspage/{nilai}',[User_Controller::class,'get']);

Route::post('/thankspage',[User_Controller::class,'getdata']);

Route::get('/optionpage',function(){
    return view('Optionpage');
});

Route::get('/erorpage',function(){
    return view('Erorpage');
});


