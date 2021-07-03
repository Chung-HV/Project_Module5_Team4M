<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use App\Http\Controllers\ProviderController;

class ServiceController extends Controller
{
    protected $providerController;
    public function __construct(
        ProviderController $providerController
    ){
        $this->providerController = $providerController;
    }

    public function getAll(){
        $services = Service::all();
        return response()->json($services,200);
    }

    public function getProvidingServices($provider_id){
        $provider = $this->providerController->findById($provider_id);
    }
}
