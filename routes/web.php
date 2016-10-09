<?php

//Display dashboard
Route::get('/', 'AppController@dashboard');
Route::get('/esri', 'AppController@esri');
Route::get('/map/{mapParams}', 'MapController@show');
