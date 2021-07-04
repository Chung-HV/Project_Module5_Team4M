<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
       'user_id',
       'service_provider_id',
       'status'
    ];

    public function customer(){
        return $this->belongsTo(User::class,'user_id','id');
    }

    public function order_detail(){
        return $this->hasOne(OrderDetail::class,'order_id','id');

    }
}
