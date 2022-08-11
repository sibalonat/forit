<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Form extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;
    // use InteractsWithMedia;

    protected $fillable = ['form_builder_json'];
    // protected $fillable = [
    //     'form_builder_json'
    // ];

    // public function registerMediaCollections()
    // public function registerMediaCollections(): void
    // {
    //     $this->addMediaCollection('image')
    //         ->singleFile();
    //         // ->acceptsMimeTypes(['image/jpg', 'image/jpeg', 'image/png', 'image/gif']);
    // }

    // public static function booted()
    // {
    //     static::creating(function(Form $form) {
    //         $form->id =
    //         $form->user_id = auth()->user()->id;
    //     });
    // }


}
