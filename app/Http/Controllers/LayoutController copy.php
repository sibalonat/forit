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

        // dd($stations);
        $stations->each(function($item) {
            // dd($item);

            $medias = $item->media->map(function($url) {
                // ddd($url->mime_type);
                if ($url->mime_type === 'video/mp4') {

                    $resource = collect([$url]);
                    $media = $url->getUrl('thumb');
                    $finale = $resource->zip([$media]);
                    return $finale;

                } else if($url->mime_type === 'audio/mp3') {

                } else {
                    $resource = collect([$url]);
                    $media = $url->getUrl('thumbimg');
                    $finale = $resource->zip([$media]);
                    return $finale;
                }
                // if ($url->mime_type === 'video/mp4') {
                //     dd('it is here');
                // }

                // switch($url->mime_type) {
                //     case ('image/jpg' || 'image/jpeg' || 'image/png' || 'image/gif'):
                //         $resource = collect([$url]);
                //         $media = $url->getUrl('thumbimg');
                //         $finale = $resource->zip([$media]);
                //         dd($finale);
                //         break;
                //     case ('video/mp4'):

                //         dd('what is here');
                //         $resource = collect([$url]);
                //         $media = $url->getUrl('thumb');
                //         $finale = $resource->zip([$media]);
                //         dd($finale);
                //         break;
                //     default:
                //         dd('what is here');
                // }
            });
        });

        // $medias = Media::get()->map(function ($url) {
        //     // dd($url);
        //     // if ($url->getKeyType() === '') {
        //     if ($url->mime_type === 'video/mp4') {
        //         dd($url->getUrl('thumb', 'videos'));
        //         dd('at here');
        //         # code...
        //         return $url->getFirstMediaUrl('videos', 'thumb');
        //     } else {
        //         dd();
        //         return $url->getUrl();
        //     }
        // });

        // return Inertia::render('Layout/LayoutsPaMixin', [
        //     'images' => $medias
        // ]);
    }
}
