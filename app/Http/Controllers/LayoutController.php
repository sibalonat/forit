<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class LayoutController extends Controller
{
    public function index()
    {
        $medias = Media::get()->map(function ($url) {
            return $url->getUrl();
        });
        // dd($medias);
        return Inertia::render('Layout/LayoutsWithMixin', [
            'images' => $medias
        ]);
    }

    public function ndryshe()
    {
        $medias = Media::get()->map(function ($url) {
            return $url->getUrl();
        });

        return Inertia::render('Layout/LayoutsPaMixin', [
            'images' => $medias
        ]);
    }
}
