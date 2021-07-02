<?php

namespace App\Http\Controllers\backend;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProviderController extends Controller
{
    public function approveProvider($id){
        $user = User::findOrFail($id);
        $user->is_service_provider = 1;
        $user->save();
        return response()->json(`success`,200);
    }
}
