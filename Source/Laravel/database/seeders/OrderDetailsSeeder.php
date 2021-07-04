<?php

namespace Database\Seeders;

use App\Models\OrderDetail;
use Illuminate\Database\Seeder;

class OrderDetailsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $orderDetail = new OrderDetail();
        $orderDetail->order_id = 1;
        $orderDetail->address = 'Vung Tau';
       
    }
}
