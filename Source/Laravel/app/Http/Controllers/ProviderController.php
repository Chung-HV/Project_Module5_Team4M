<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProviderController extends Controller
{
    public function findById($id){
        $provider = new User();
        $provider = DB::table('users')
        ->where('id','=',$id)
        ->where('is_service_provider','=',1)
        ->get();
        return response()->json($provider);
    }

    public function getProvidingService($provider_id){
        $user = User::findOrFail($provider_id);
        $services = $user->services;
        return response()->json($services);
    }
}
