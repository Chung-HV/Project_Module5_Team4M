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
            ->where('is_service_provider', '=', '1')
            ->where('is_active', '=', '1')
            ->inRandomOrder()->limit(8)
            ->get();
        foreach ($users as $key => $user) {
            $user->services->all();
        }
        return response()->json($users);
    }
    public function showVipUser()
    {
        $users = User::where('is_admin', '=', '0')->where('is_vip', '=', '1')->where('is_service_provider', '=', '1')->where('is_active', '=', '1')->get();
        foreach ($users as $key => $user) {
            $user->services->all();
        }
        return response()->json($users);
    }
    public function showNewUser()
    {
        $users = User::where('is_admin', '=', '0')->where('is_service_provider', '=', '1')->where('is_active', '=', '1')->latest()->take(3)->get();
        foreach ($users as $key => $user) {
            $user->services->all();
        }
        return response()->json($users);
    }
    public function getUser($id)
    {
        $user = User::where('id', '=', $id)
            ->where('is_admin', '=', '0')
            ->where('is_service_provider', '=', '1')
            ->get();

        foreach ($user as $key => $sv) {
            $sv->services->all();
            $sv->accounts;
        }
        return response()->json($user);
    }
    public function filterUser(Request $request)
    {

        $name = $request->name;
        $gender = $request->gender;
        $city = $request->city;
        $price = $request->price;
        $count = 'count_view';
        $sort = 'DESC';
        if ($request->count_view) {
            $count = 'count_view';
            if ($request->count_view == 'max') {
                $sort = 'DESC';
            } else {
                $sort = 'ASC';
            }
        } else if ($request->count_rent) {
            $count = 'count_rent';
            if ($request->count_rent == 'max') {
                $sort = 'DESC';
            } else {
                $sort = 'ASC';
            }
        }
        $users = User::where(function ($query) use ($name, $gender, $city, $price) {
            $query->where('name', 'like', '%' . $name . '%')
                ->where('is_admin', '=', '0')
                ->where('is_service_provider', '=', '1')
                ->where('is_active', '=', '1')

                ->when($price, function ($query,  $price) {
                    // return $query->where('price', '>', '0')
                    //     ->where('price', '<', $price);
                    return $query->whereBetween('price', [0, $price]);
                })

                ->when($city, function ($query, $city) {
                    return $query->where('city', $city);
                })

                ->when($gender, function ($query, $gender) {
                    return $query->where('gender', $gender);
                })->get();
        })
            ->orderBy("$count", $sort)
            ->get();
        foreach ($users as $key => $user) {
            $user->services->all();
        }
        return response()->json($users);
    }
    public function increaseView(Request $request)
    {

        if ($request->id != $request->user_id) {
            $user = User::find($request->id);
            $count = $user->count_view;
            $user->count_view = $count + 1;
            $user->save();
            return response()->json("ss");
        } else {
            return response()->json("khong the tang view ban than");
        }
    }
}
