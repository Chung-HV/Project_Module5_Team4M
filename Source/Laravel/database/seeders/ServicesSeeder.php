<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;

class ServicesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $service = new Service();
        $service->name = 'Meet family';
        $service->save();
        
        
        $service = new Service();
        $service->name = 'Meet friends';
        $service->save();

        $service = new Service();
        $service->name = 'Travel with friends';
        $service->save();

        $service = new Service();
        $service->name = 'Travel together';
        $service->save();

        $service = new Service();
        $service->name = 'Attend birthday party';
        $service->save();

        $service = new Service();
        $service->name = 'Chat offline';
        $service->save();

        $service = new Service();
        $service->name = 'Chat online';
        $service->save();

        $service = new Service();
        $service->name = 'New Year Eve together';
        $service->save();

        $service = new Service();
        $service->name = 'Holliday together';
        $service->save();

        $service = new Service();
        $service->name = 'Hold hands';
        $service->save();

        $service = new Service();
        $service->name = 'Say "I love You"';
        $service->save();

        $service = new Service();
        $service->name = 'Eyes contact';
        $service->save();

        $service = new Service();
        $service->name = 'Kiss hand';
        $service->save();

        $service = new Service();
        $service->name = 'Hug';
        $service->save();

        $service = new Service();
        $service->name = 'Nagging';
        $service->save();

        $service = new Service();
        $service->name = 'Cuddle';
        $service->save();

    }
}
