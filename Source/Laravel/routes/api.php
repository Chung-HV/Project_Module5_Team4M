<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ProviderController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\frontend\DashboardController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('dashboard')->group(function () {
    Route::get('', [DashboardController::class, 'showServiceUser']);
    Route::get('user_vip', [DashboardController::class, 'showVipUser']);
    Route::get('user_new', [DashboardController::class, 'showNewUser']);
    Route::get('/{id}', [DashboardController::class, 'getUser']);
});
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::prefix('users')->group(function () {

    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);


    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/logout', [AuthController::class, 'logout']);
        Route::get('/profile', [AuthController::class, 'profile']);
        Route::post('/update/{id}', [AuthController::class, 'update']);
    });
});

Route::get('/provider/{id}/approve', [ProviderController::class, 'approveProvider']);

Route::get('provider/service', [ServiceController::class, 'getAll']);
Route::get('provider/{provider_id}/service', [ProviderController::class, 'getProvidingService']);
Route::post('provider/{id}/service/update', [ProviderController::class, 'setProvidingService']);
Route::get('provider/{id}/request', [ProviderController::class, 'requestBecomeProvider']);

