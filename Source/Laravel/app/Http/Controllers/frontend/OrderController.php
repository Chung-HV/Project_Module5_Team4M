<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;



class OrderController extends Controller
{
    public function orderServiceProvider(Request $request)
    {
        try {
            DB::beginTransaction();
            $order = new Order();
            $order->user_id = $request->user_id;
            $order->service_provider_id =$request->service_provider_id;
            $order->status = "pending";
            $order->save();

            $orderDetail = new OrderDetail();
            $orderDetail->order_id=$order->id;
            $orderDetail->address = $request->address;
            $orderDetail->time = $request->time;
            $orderDetail->start_at= $request->start_at;
            $orderDetail->save();
            DB::commit();
            Session::flash('success', 'Bạn đã đặt thuê thành công');
        } catch (\Exception $e) {
            DB::rollback();
            Session::flash('error', 'Có lỗi xảy ra vui lòng thử lại');
        }
        return response()->json("success");
    }

    public function getOrderByProvider($id){
        $orders = Order::where('service_provider_id','=',$id)->get();
        $customers = [];
        $orderDetails = [];
        foreach($orders as $order){
            array_push($customers,$order->customer);
            array_push($orderDetails,$order->order_detail);
        }
        $data = ['orders'=>$orders,'customers'=>$customers,'order_details'=>$orderDetails];
        return response()->json($data,200);
    }

}
