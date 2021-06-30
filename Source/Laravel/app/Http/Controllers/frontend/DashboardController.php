<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function showServiceUser()
    {
        $user = User::where('is_admin', '=', '0')->where('is_service_provider','=','1')->get();
        return response()->json($user);
    }
    public function showVipUser()
    {
        $user = User::where('is_admin', '=', '0')->where('is_vip', '=', '1')->where('is_service_provider','=','1')->get();
        return response()->json($user);
    }
    public function showNewUser()
    {
        $user = User::where('is_admin', '=', '0')->where('is_service_provider','=','1')->latest()->take(3)->get();
        return response()->json($user);
    }
}
