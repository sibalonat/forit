<?php

namespace App\Models;

use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Station extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    public static function booted()
    {
        static::creating(function(Station $station) {
            $station->uuid = Str::uuid();
            if (!$station->slug) {
                $station->slug = $station->uuid;
            }
        });
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('stationArr')
            ->acceptsMimeTypes(['image/jpg', 'image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'audio/mp3']);
    }

    protected $fillable = ['slug', 'uuid', 'teaser', 'tour_id', 'lng', 'lat'];

    public function tour()
    {
        return $this->belongsTo(Tour::class);
    }
}
