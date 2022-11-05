<?php

namespace App\Models;

// use App\Models\Traits\RelateToTeam;

use Illuminate\Support\Str;
use App\Models\Traits\RelatesToProject;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Staudenmeir\LaravelAdjacencyList\Eloquent\HasRecursiveRelationships;

class Obj extends Model
{
    use HasFactory;
    use RelatesToProject;
    use HasRecursiveRelationships;

    public $table = 'objects';

    protected $fillable = [
        'parent_id'
    ];

    public static function booted()
    {
        static::creating(function($model) {
            $model->uuid = Str::uuid();
        });
    }


    public function objectable()
    {
        return $this->morphTo();
    }

}
