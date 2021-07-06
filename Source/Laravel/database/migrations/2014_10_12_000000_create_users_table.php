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
            $table->string('height')->nullable()->default('');
            $table->string('weight')->nullable()->default('');
            $table->string('hobby')->nullable()->default('');
            $table->string('introducion')->nullable()->default('');
            $table->string('requirement')->nullable()->default('');
            $table->string('facebook')->nullable()->default('');
            $table->integer('is_admin')->default(0);
            $table->integer('is_service_provider')->default(0);
            $table->integer('is_active')->default(1);
            $table->integer('is_vip')->default(0);
            $table->string('price')->nullable()->default('');
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
