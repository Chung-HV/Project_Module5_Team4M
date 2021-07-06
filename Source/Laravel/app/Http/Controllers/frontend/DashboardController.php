<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function showServiceUser()
    {
        $users = User::where('is_admin', '=', '0')
        ->where('is_service_provider','=','1')
        ->where('is_active', '=', '1')
        ->inRandomOrder()->limit(8)
        ->get();
        foreach($users as $key => $user){
            $user->services->all();
        }
        return response()->json($users);
    }
    public function showVipUser()
    {
        $users = User::where('is_admin', '=', '0')->where('is_vip', '=', '1')->where('is_service_provider','=','1')->where('is_active', '=', '1')->get();
        foreach($users as $key => $user){
            $user->services->all();
        }
        return response()->json($users);
    }
    public function showNewUser()
    {
        $users = User::where('is_admin', '=', '0')->where('is_service_provider','=','1')->where('is_active', '=', '1')->latest()->take(3)->get();
        foreach($users as $key => $user){
            $user->services->all();
        }
        return response()->json($users);
    }
    public function getUser($id){
        $user = User::where('id','=',$id)
        ->where('is_admin', '=', '0')
        ->where('is_service_provider','=','1')
        ->get();
        foreach($user as $key => $sv){
            $sv->services->all();
        }
        return response()->json($user);
    }

}
