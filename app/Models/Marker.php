<?php

namespace App\Models;

use App\Enum\WorkStatus;
use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Marker extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'name', 'notes', 'status', 'longitude', 'latitude'
    ];

    protected $casts = [
        'status' => WorkStatus::class,
    ];
}
