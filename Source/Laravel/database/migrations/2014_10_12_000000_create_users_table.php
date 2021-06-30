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
            $table->string('username');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->string('name')->nullable();
            $table->date('birth_day')->nullable();
            $table->string('gender')->nullable();
            $table->string('city')->nullable();
            $table->string('nation')->nullable();
            $table->string('avatar')->nullable();
            $table->float('height')->nullable();
            $table->float('weight')->nullable();
            $table->float('hobby')->nullable();
            $table->string('introducion')->nullable();
            $table->string('requirement')->nullable();
            $table->string('facebook')->nullable();
            $table->string('is_admin')->default(0);
            $table->string('is_service_provider')->default(0);
            $table->string('is_vip')->default(0);
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
