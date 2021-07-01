<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProviderController extends Controller
{
    public function findById($id)
    {
        $provider = new User();
        $provider = DB::table('users')
            ->where('id', '=', $id)
            ->where('is_service_provider', '=', 1)
            ->get();
        return response()->json($provider);
    }

    public function getProvidingService($provider_id)
    {
        $user = User::findOrFail($provider_id);
        $services = $user->services;
        return response()->json($services);
    }

    public function setProvidingService(Request $request)
    {
        $user = User::findOrFail($request->id);
        $providingServices = $user->services;
        $newProvidingServices = $request->services;
        DB::beginTransaction();
        try {
            foreach ($providingServices as $service) {
                $user->services()->detach($service->id);
            }
            for($i=0;$i<count($newProvidingServices);$i++){
                $user->services()->attach($newProvidingServices[$i]);
            }   
            DB::commit();
        } catch (\Exception $e) {
            dd($e);
            DB::rollBack();
        }
        return response()->json($request->services);
    }
}
