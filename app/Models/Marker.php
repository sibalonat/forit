<?php

namespace App\Models;

// use App\Enums\WorkStatus;
use Spatie\Url\Url;
use App\Models\MapView;
use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Marker extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = [
        'name', 'notes', 'lng', 'lat'
    ];

    public static function booted()
    {
        static::creating(function (Marker $marker) {
            $currentURL = url()->current();
            $url = Url::fromString($currentURL);
            $marker->map_view_id = $url->getSegment(2);
        });
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('markersArr')
            ->acceptsMimeTypes(['image/jpg', 'image/jpeg', 'image/png', 'image/gif']);
    }

    public function map()
    {
        return $this->belongsTo(MapView::class);
    }
}
