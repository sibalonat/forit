<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public static function booted()
    {
        static::created(function($project) {
            $object = $project->objects()->make(['parent_id' => null]);
            $object->objectable()->associate($project->folders()->create(['name' => $project->name]));
            $object->save();
        });
    }

    public function objects()
    {
        return $this->hasMany(Obj::class);
    }

    public function folders()
    {
        return $this->hasMany(Folder::class);
    }
}
