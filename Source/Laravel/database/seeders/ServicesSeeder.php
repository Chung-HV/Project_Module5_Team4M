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
        $service->type = 'default';
        $service->save();
        
        
        $service = new Service();
        $service->name = 'Meet friends';
        $service->type = 'default';

        $service->save();

        $service = new Service();
        $service->name = 'Travel with friends';
        $service->type = 'default';

        $service->save();

        $service = new Service();
        $service->name = 'Travel together';
        $service->type = 'default';

        $service->save();

        $service = new Service();
        $service->name = 'Attend birthday party';
        $service->type = 'default';
        

        $service->save();

        $service = new Service();
        $service->name = 'Chat offline';
        $service->type = 'default';

        $service->save();

        $service = new Service();
        $service->name = 'Chat online';
        $service->type = 'default';

        $service->save();

        $service = new Service();
        $service->name = 'New Year Eve together';
        $service->type = 'default';

        $service->save();

        $service = new Service();
        $service->name = 'Holliday together';
        $service->type = 'default';

        $service->save();

        $service = new Service();
        $service->name = 'Hold hands';
        $service->type = 'free';

        $service->save();

        $service = new Service();
        $service->name = 'Say "I love You"';
        $service->type = 'free';

        $service->save();

        $service = new Service();
        $service->name = 'Eyes contact';
        $service->type = 'free';

        $service->save();

        $service = new Service();
        $service->name = 'Kiss hand';
        $service->type = 'extra';

        $service->save();

        $service = new Service();
        $service->name = 'Hug';
        $service->type = 'extra';

        $service->save();

        $service = new Service();
        $service->name = 'Nagging';
        $service->type = 'extra';

        $service->save();

        $service = new Service();
        $service->name = 'Cuddle';
        $service->type = 'extra';

        $service->save();

    }
}
