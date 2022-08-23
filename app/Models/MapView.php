<?php

namespace App\Models;

use App\Enums\WorkStatus;
use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MapView extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = [
        'name', 'status'
    ];

    // protected $appends = ['recent_media'];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('mapview')
            ->singleFile()
            ->acceptsMimeTypes(['image/jpg', 'image/jpeg', 'image/png', 'image/gif']);
    }


    protected $casts = [
        'status' => WorkStatus::class,
    ];

    public function markers()
    {
        return $this->hasMany(Marker::class);
    }

    // public function scopeWithRecentMedia ($query) {
    //     $query->with('media')->latest()->first();
    // }

    // public function getRecentMediaAttribute () {
    //     return $this->media->latest()->last();
    // }
}
