<?php

namespace App\Models;


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

        static::deleting(function($model) {
            optional($model->objectable)->delete();
            $model->descendants->each->delete();
        });
    }


    public function objectable()
    {
        return $this->morphTo();
    }

}
