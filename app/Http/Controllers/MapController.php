<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class MapController extends Controller
{
    /**
    *   Shows the map
    *   @param the parameters required to create the map, {filtering options, geolocation } passed as json object
    *   @return the map view with the templated filters
    */
    public function show($mapParams) {
      // dd($mapParams);
      return view('app.map');
    }

    /**
    *   Given a json object apply various filters to the map, return applicable nodes
    *   @param filterss
    *   @return the map view with the templated filters
    */
    public function applyFilters() {

    }
}
