<?php

namespace App\Http\Controllers;

use App\Models\Test_result;
use Illuminate\Http\Request;

class ResultController extends Controller
{
    //
    function store(){
        $result = new Test_result();
        $result->model = 'Quadrant';
        $result->successrate = \request('result');
        $result->save();
        return redirect('/');
    }

    function viewChoices(){
        return view('ChooseSite');
    }

}
