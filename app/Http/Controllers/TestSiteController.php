<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TestSiteController extends Controller
{
    public function loadSongs(){
        $song = DB::select( 'select * from "mocksongdatabase"' );
        return view('TestSite', ['songs' => $song]);
    }
}
