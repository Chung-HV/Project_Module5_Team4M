<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getById($id){
        $users = User::findOrFail($id);
        return response()->json($users,200);
    }

}
