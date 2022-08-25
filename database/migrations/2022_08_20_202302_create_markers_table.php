<?php

// use App\Enums\WorkStatus;

use App\Models\MapView;
// use App\Models\Marker;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     *
     *
     *        $table->boolean('drag')->default(false);
     *        $table->string('lng', 15)->default();
     *        $table->decimal('longitude')->nullable();
     *        $table->decimal('latitude')->nullable();
     *        $table->decimal('longitude', 11, 8)->nullable();
     *        $table->decimal('latitude', 10, 8)->nullable();
     *
     * @return void
     */
    public function up()
    {
        // $enum = WorkStatus::class;
        Schema::create('markers', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->foreignIdFor(MapView::class)->constrained()->onDelete('cascade');
            $table->text('notes')->nullable();
            $table->string('lng')->default(0);
            $table->string('lat')->default(0);
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
        Schema::dropIfExists('markers');
    }
};
