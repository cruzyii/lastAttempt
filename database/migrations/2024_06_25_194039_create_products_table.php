<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->decimal('price', 8, 2);
            $table->string('gender');
            $table->string('category');
            $table->string('image')->nullable();
            $table->integer('stock')->nullable();
            $table->string('color');
            $table->string('size');
            $table->timestamp('updated_at');
            $table->timestamp('created_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
