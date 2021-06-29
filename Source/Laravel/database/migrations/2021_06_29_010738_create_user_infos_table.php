<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_infos', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->date('birth_day');
            $table->string('gender');
            $table->string('city');
            $table->string('nation');
            $table->string('avatar');
            $table->float('height')->nullable();
            $table->float('weight')->nullable();
            $table->float('hobby')->nullable();
            $table->string('introducion')->nullable();
            $table->string('requirement')->nullable();
            $table->string('facebook')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_infos');
    }
}
