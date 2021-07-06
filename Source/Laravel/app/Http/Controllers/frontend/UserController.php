<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function getById($id)
    {
        $users = User::findOrFail($id);
        return response()->json($users, 200);
    }
    public function getMessageUser($user_id)
    {
     $message_user = Message::where('user_id', '=', $user_id)->latest()->limit(6)
             ->get();
             foreach($message_user as $key => $message){
                $message->users;
             }
        // $message_user= DB::table('messages')->where('user_id', '=', $user_id)
        // ->join('user', 'user.id', '=', "messages.$message->service_provider_id");
        return response()->json($message_user);
    }
}
