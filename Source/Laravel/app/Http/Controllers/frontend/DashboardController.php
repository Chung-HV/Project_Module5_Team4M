<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

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
    public function filterUser(Request $request)
    {

        $name = $request->name;
        $gender = $request->gender;
        $city = $request->city;
        $price = $request->price;
        // $count_view='DESC';
        // if($request->count_view == "min"){
        //     $count_view ='ASC';
        // }
        // $user = User::orderBy('count_view',$count_view)->get();
        // return response()->json($user);
        $users = User::where(function ($query) use ($name, $gender,$city,$price) {
            $query->where('name', 'like', '%' . $name . '%')
            ->where('is_admin', '=', '0')
            ->where('is_service_provider','=','1')
            ->where('is_active', '=', '1')
                ->when($gender, function ($query, $gender) {
                    return $query->where('gender',$gender);
                })
            ->when($city , function ($query, $city) {
                return $query->where('city',$city);
            })

            ->when( $price , function ($query,  $price) {
                return $query->where('price','>','0')
                ->where('price','<=',$price);
            })->get();
        })
            ->get();
            foreach ($users as $key => $user) {
                $user->services->all();
            }
        return response()->json($users);
    }
    public function increaseView(Request $request){

        if($request->id !=$request->user_id){
            $user = User::find($request->id);
            $count = $user->count_view;
           $user->count_view =$count+1;
           $user->save();
           return response()->json("ss");
        }
        else{
            return response()->json("khong the tang view ban than");
        }


    }
}
