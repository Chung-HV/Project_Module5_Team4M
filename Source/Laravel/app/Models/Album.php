<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    use HasFactory;
    protected $fillable = ['filePath','user_id'];
    protected $table = 'albums';
    public function users(){
        return $this->belongsTo(User::class);
    }
}
