<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\Message;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\User;
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
            $orderDetail->start_time= $request->start_time;
            $orderDetail->save();

            $service_provider=User::find($request->service_provider_id);
            $user_account = Account::find($request->user_id);
            $user_account->mooney=$user_account->mooney-(($service_provider->price)*$orderDetail->time);
            $user_account->save();
            DB::commit();
            Session::flash('success', 'Bạn đã đặt thuê thành công');
        } catch (\Exception $e) {
            DB::rollback();
            Session::flash('error', 'Có lỗi xảy ra vui lòng thử lại');
        }
        return response()->json($user_account);
    }

    public function getOrderByProvider($id){
        $provider = User::findOrFail($id);
        $orders = Order::where('service_provider_id','=',$id)->orderBy('created_at','desc')->get();
        $customers = [];
        $orderDetails = [];
        foreach($orders as $order){
            array_push($customers,$order->customer);
            array_push($orderDetails,$order->order_detail);
        }
        $data = ['orders'=>$orders,'customers'=>$customers,'order_details'=>$orderDetails,'provider'=>$provider];
        return response()->json($data,200);
    }

    public function updateOrder(Request $request){
        $order = Order::findOrFail($request->order_id);
        $order->status = $request->order_status;
        if($order->status=="accepted"){
            $message = new Message();
            $message->user_id=$order->user_id;
            $message->service_provider_id=$order->service_provider_id;
            $message->message="Người yêu mà bạn thuê đã xác nhận đơn rồi";
            $message->save();
        }
        $order->save();
        return response()->json($request,200);
    }

    public function getOrderByCustomer($id){
        $customer = User::findOrFail($id);
        $orders = Order::where('user_id','=',$id)->orderBy('created_at','desc')->get();
        $providers = [];
        $orderDetails = [];
        foreach($orders as $order){
            array_push($providers,$order->provider);
            array_push($orderDetails,$order->order_detail);
        }
        $data = ['orders'=>$orders,'customer'=>$customer,'order_details'=>$orderDetails,'providers'=>$providers];
        return response()->json($data,200);
    }

    public function getAll(){
        $orders = Order::orderBy('created_at','desc')->paginate(50);
        $providers = [];
        $customers = [];
        $orderDetails = [];
        foreach($orders as $order){
            array_push($providers,$order->provider);
            array_push($customers,$order->customer);
            array_push($orderDetails,$order->order_detail);
        }
        $data = ['orders'=>$orders,'customers'=>$customers,'order_details'=>$orderDetails,'providers'=>$providers];
        return response()->json($data,200);

    }

}
