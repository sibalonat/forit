<?php

namespace App\Http\Controllers;

use App\Models\Station;
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
        $stations = Station::with('media')->get();
        $medias = $stations->map(function($item) {
            $flatten = $item->media->map(function($url) use($item) {
                if ($url->mime_type === 'video/mp4') {
                    $resource = collect([$url]);
                    $media = $url->getUrl('thumb');
                    $finale = $resource->zip([$media])->concat([$item->title, $url->mime_type]);
                    // dd($finale->flatten(1));
                    return $finale->flatten(1);
                } else if($url->mime_type === 'audio/mp3') {
                } else {
                    $resource = collect([$url]);
                    $media = $url->getUrl('thumbimg');
                    $finale = $resource->zip([$media])->concat([$item->title, $url->mime_type]);
                    return $finale->flatten(1);
                }
            });

            return $flatten;
        });


        return Inertia::render('Layout/LayoutsPaMixin', [
            'images' => $medias->flatten(1)
        ]);
    }
}
