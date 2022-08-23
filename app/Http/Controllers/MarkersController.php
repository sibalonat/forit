<?php

namespace App\Http\Controllers;

use Spatie\Url\Url;
use Inertia\Inertia;
use App\Models\Marker;
use App\Models\MapView;
// use App\Models\Marker;
use App\Enums\WorkStatus;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateMapRequest;
use Illuminate\Support\Facades\Redirect;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class MarkersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Markers/Markers', [
            'maps' => MapView::get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return $this->initialstore();
    }


    public function initialstore()
    {
        $mapview = MapView::create();

        return Redirect::route('markers.edit', $mapview->id);
    }


    /**
     * Display the specified resource.
     *
     * @param  int  Marker $marker
     * @return \Illuminate\Http\Response
     */
    public function show(MapView $mapview)
    {
        // dd($mapview->getFirstMedia('mapview'));
        // ->with('media')
        // 'img' => $mapview->getFirstMedia('mapview')
        // ->with('markers')
        // 'selectStatus' => $mapview->status,
        // 'img' => $mapview->media->first(),
        // 'points' => $mapview->markers->all()
        // ->addSelect(['md' => Media::select('model_id')->whereColumn('model_id', $mapview->id)->latest()->take(1)])
        // 'm' => $mapview->with('media')->with('markers')->get()->first(),
        return Inertia::render('Markers/CreateMarker', [
            'm' => $mapview->with('markers')->with('media')->get()->first(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  Marker $marker
     * @return \Illuminate\Http\Response
     */
    public function edit(MapView $mapview)
    {
        // dd($mapview);
        return Inertia::render('Markers/MarkerMap', [
            'm' => $mapview,
            'selectStatus' => WorkStatus::cases(),
            'img' => $mapview->media->first(),
        ]);
    }

    public function mapimage(MapView $mapview, Request $request)
    {
        if (isset($request->mapView)) {
            $mapview->addMediaFromRequest('mapView')->toMediaCollection('mapview');
            $st = $mapview->media->last();

            return response()->json($st);
        }
    }


    public function showImg(MapView $mapview)
    {
        $element = $mapview->media->first();
        return response()->json($element);
    }


    public function deleteImg(MapView $mapview, Request $request, $id)
    {
        $id = $request->id;

        $mapview->media->where('id', $id)->first()->delete();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  Marker $marker
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMapRequest $request, MapView $mapview)
    {
        $request->validated();
        $mapview->update($request->all());

        return Redirect::route('markers.show', $mapview->id);
    }


    // marker
    public function store(Request $request)
    {
        $marker = Marker::create($request->all());
        return response()->json($marker);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  Marker $marker
     * @return \Illuminate\Http\Response
     */
    public function destroy(MapView $mapview)
    {
        //
    }
}
