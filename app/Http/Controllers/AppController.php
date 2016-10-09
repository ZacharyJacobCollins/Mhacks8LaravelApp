<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class AppController extends Controller
{
  /**
  *  Show app
  */
  public function dashboard() {
    return view('app.dashboard');
  }

  public function esri() {
    return view('app.esri');
  }
}
