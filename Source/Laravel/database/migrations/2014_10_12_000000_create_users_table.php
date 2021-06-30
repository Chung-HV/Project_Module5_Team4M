<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->date('birth_day')->nullable();
            $table->string('gender')->nullable();
            $table->string('city')->nullable();
            $table->string('nation')->nullable();
            $table->string('avatar')->nullable();
            $table->float('height')->nullable();
            $table->float('weight')->nullable();
            $table->string('hobby')->nullable();
            $table->string('introducion')->nullable();
            $table->string('requirement')->nullable();
            $table->string('facebook')->nullable();
            $table->integer('is_admin')->default(0);
            $table->integer('is_service_provider')->default(0);
            $table->integer('is_active')->default(1);
            $table->integer('is_vip')->default(0);
            $table->float('price')->nullable();
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
        Schema::dropIfExists('users');
    }
}
