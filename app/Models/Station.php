<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Station extends Model
{
    use HasFactory;
    public static function booted()
    {
        static::creating(function(Station $station) {
            $station->uuid = Str::uuid();
            if (!$station->slug) {
                $station->slug = $station->uuid;
            }
        });
    }

    protected $fillable = ['slug', 'uuid', 'teaser', 'tour_id', 'lng', 'lat'];

    public function tour()
    {
        return $this->belongsTo(Tour::class);
    }
}
