<?php

namespace App\Models;

use App\Enums\WorkStatus;
use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MapView extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'name', 'status'
    ];


    protected $casts = [
        'status' => WorkStatus::class,
    ];

    public function markers()
    {
        return $this->hasMany(Marker::class);
    }
}
