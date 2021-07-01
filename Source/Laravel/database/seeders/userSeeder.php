<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class userSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->name = 'Chung';
        $user->email = 'Chung@gmail.com';
        $user->password = Hash::make(123456);
        $user->city = 'Hanoi';
        $user->birth_day = '91/02/02';
        $user->price = '10';
        $user->nation = 'Vietnam';
        $user->avatar = 'user_avatar';
        $user->save();

        $user = new User();
        $user->name = 'Thanh';
        $user->email = 'thanh@gmail.com';
        $user->password = Hash::make(123456);
        $user->city = 'Hanoi';
        $user->birth_day = '91/02/02';
        $user->price = '10';
        $user->nation = 'Vietnam';
        $user->avatar = 'user_avatar';
        $user->is_service_provider="1";
        $user->save();

        $user = new User();
        $user->name = 'Nhung';
        $user->email = 'Nhung@gmail.com';
        $user->password = Hash::make(123456);
        $user->city = 'Hanoi';
        $user->birth_day = '91/02/02';
        $user->is_service_provider="1";
        $user->price = '10';
        $user->nation = 'Vietnam';
        $user->avatar = 'user_avatar';
        $user->is_vip="1";
        $user->save();
    }
}
