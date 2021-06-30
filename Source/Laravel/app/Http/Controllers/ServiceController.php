<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function getAll(){
        $services = Service::all();
        return response()->json($services,200);
    }
}
