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
        $service->name = 'Ra mắt người nhà';
        $service->type = 'default';
        $service->save();
        
        
        $service = new Service();
        $service->name = 'Ra mắt bạn bè';
        $service->type = 'default';

        $service->save();

        $service = new Service();
        $service->name = 'Du lịch chung cùng nhóm bạn';
        $service->type = 'default';

        $service->save();

        $service = new Service();
        $service->name = 'Đi chơi chung';
        $service->type = 'default';

        $service->save();

        $service = new Service();
        $service->name = 'Tham dự sinh nhật';
        $service->type = 'default';
        

        $service->save();

        $service = new Service();
        $service->name = 'Trò chuyện offline';
        $service->type = 'default';

        $service->save();

        $service = new Service();
        $service->name = 'Trò chuyện online';
        $service->type = 'default';

        $service->save();

        $service = new Service();
        $service->name = 'Đi chơi tết';
        $service->type = 'default';

        $service->save();

        $service = new Service();
        $service->name = 'Đi chơi ngày lễ';
        $service->type = 'default';

        $service->save();

        $service = new Service();
        $service->name = 'Nắm tay';
        $service->type = 'free';

        $service->save();

        $service = new Service();
        $service->name = 'Nói yêu';
        $service->type = 'free';

        $service->save();

        $service = new Service();
        $service->name = 'Nhìn mắt';
        $service->type = 'free';

        $service->save();

        $service = new Service();
        $service->name = 'Hôn tay';
        $service->type = 'extra';

        $service->save();

        $service = new Service();
        $service->name = 'Ôm';
        $service->type = 'extra';

        $service->save();

        $service = new Service();
        $service->name = 'Nhõng nhẽo';
        $service->type = 'extra';

        $service->save();

        $service = new Service();
        $service->name = 'Cử chỉ thân mật';
        $service->type = 'extra';

        $service->save();

    }
}
