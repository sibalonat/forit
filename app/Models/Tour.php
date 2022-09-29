<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tour extends Model
{
    use HasFactory;

    public static function booted()
    {
        static::creating(function(Tour $tour) {
            $tour->uuid = Str::uuid();
            if (!$tour->slug) {
                $tour->slug = $tour->uuid;
            }
        });
    }

    protected $fillable = ['uuid', 'title', 'slug'];

    public function stations()
    {
        return $this->hasMany(Station::class);
    }
}
