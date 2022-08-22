<?php

namespace App\Models;

// use App\Enums\WorkStatus;
use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Marker extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'name', 'notes', 'longitude', 'latitude'
    ];

    public function map()
    {
        return $this->belongsTo(MapView::class);
    }


}
