<?php

/** @var \Laravel\Lumen\Routing\Router $router */

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

Route::get('/', function () use ($router) {
    return $router->app->version();
});

Route::group(
    [ 'prefix' => 'api' ],
    function () {
        Route::post('login', 'AuthController@login');
        Route::post('logout', 'AuthController@logout');

        Route::get('users/{id}', 'UserController@find');

        Route::get('messages', 'MessageController@all');
        Route::post('messages', 'MessageController@store');
    }
);
