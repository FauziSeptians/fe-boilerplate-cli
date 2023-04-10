<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_konveksis', function (Blueprint $table) {
            $table->id(); 
            $table->String('Nama');
            $table->String('Role');
            $table->integer('JumlahHadir') -> nullable();
            $table->integer('JumlahTidakHadir') -> nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_konveksis');
    }
};
