<?php

namespace Database\Seeders;

use App\Models\Order;
use Illuminate\Database\Seeder;

class OrdersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $order = new Order();
        $order->user_id = 1;
        $order->service_provider_id = 2;
        $order->status = 'pending';
        $order->save();

        $order = new Order();
        $order->user_id = 2;
        $order->service_provider_id = 1;
        $order->status = 'pending';
        $order->save();
    }
}
