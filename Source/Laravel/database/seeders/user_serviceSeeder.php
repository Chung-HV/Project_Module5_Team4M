<?php

namespace Database\Seeders;

use App\Models\User_service;
use Illuminate\Database\Seeder;

class user_serviceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user_service = new User_service();
        $user_service->user_id= 2;
        $user_service->service_id= 1;
        $user_service->save();

        $user_service = new User_service();
        $user_service->user_id= 2;
        $user_service->service_id= 2;
        $user_service->save();

        $user_service = new User_service();
        $user_service->user_id= 2;
        $user_service->service_id= 3;
        $user_service->save();

        $user_service = new User_service();
        $user_service->user_id= 2;
        $user_service->service_id= 4;
        $user_service->save();

        $user_service = new User_service();
        $user_service->user_id= 2;
        $user_service->service_id= 5;
        $user_service->save();

        $user_service = new User_service();
        $user_service->user_id= 2;
        $user_service->service_id= 7;
        $user_service->save();

        $user_service = new User_service();
        $user_service->user_id= 2;
        $user_service->service_id= 6;
        $user_service->save();

        $user_service = new User_service();
        $user_service->user_id= 2;
        $user_service->service_id= 8;
        $user_service->save();

    }
}
