<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ProviderController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\frontend\DashboardController;
use App\Http\Controllers\frontend\OrderController;
use App\Http\Controllers\frontend\UserController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

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
    Route::post('filter', [DashboardController::class, 'filterUser']);
    Route::get('/{id}', [DashboardController::class, 'getUser']);
    Route::post('/view', [DashboardController::class, 'increaseView']);
    Route::get('message/{id}', [UserController::class, 'getMessageUser']);
    Route::post('order_service_provider', [OrderController::class, 'orderServiceProvider']);
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
        Route::post('/active/{id}', [AuthController::class, 'updateActiveUser']);
        Route::get('/uploadimg/{id}', [AuthController::class, 'uploadImage']);


    });
});


Route::get('admin/provider', [ProviderController::class, 'getAll']);
Route::get('admin/provider/service', [ServiceController::class, 'getAll']);
Route::get('admin/provider/requesting', [ProviderController::class, 'getRequestingProvider']);
Route::get('admin/provider/{id}/approve', [ProviderController::class, 'approveRequest']);
Route::get('admin/provider/{id}/setvip', [ProviderController::class, 'setVip']);

Route::get('provider/{id}', [ProviderController::class, 'findById']);
Route::get('provider/{provider_id}/service', [ProviderController::class, 'getProvidingService']);
Route::post('provider/{id}/service/update', [ProviderController::class, 'setProvidingService']);
Route::get('provider/{id}/request', [ProviderController::class, 'requestBecomeProvider']);

Route::get('provider/{id}/orders', [OrderController::class, 'getOrderByProvider']);
Route::get('users/{id}', [UserController::class, 'getById']);
Route::get('users/{id}/orders', [OrderController::class, 'getOrderByCustomer']);

Route::post('orders/update', [OrderController::class, 'updateOrder']);
