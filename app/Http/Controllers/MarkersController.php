<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Marker;
use App\Models\MapView;
// use App\Models\Marker;
use App\Enums\WorkStatus;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateMapRequest;
use Illuminate\Support\Facades\Redirect;

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
        $markerdt = $mapview->first();

        $media = $mapview->getMedia('mapview')->first();

        return Inertia::render('Markers/CreateMarker', [
            'm' => $markerdt,
            'media' => $media
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
    public function getMarkers(MapView $mapview)
    {
        // $mapview->markers->all();
        $markers = Marker::where('map_view_id', $mapview->id)->get();
        return response()->json($markers);
    }
    // marker
    public function store(Request $request)
    {
        $marker = Marker::create($request->all());
        return response()->json($marker);
    }

    // marker single
    // public function single(MapView $mapview, Marker $marker)
    public function single(Marker $marker)
    {
        // $mark = $mapview->markers->where('id', $marker->id)->first();

        return response()->json($marker);
    }

    // marker update
    public function up(Marker $marker, Request $request)
    {
        $marker->update($request->all());
        return response()->json($marker);
    }

    // marker delete
    public function del(Marker $marker)
    {
        $marker->delete();
        return response()->json('done');
    }

    // marker img
    public function markerImg(Marker $marker, Request $request)
    {
        if (isset($request->markersArr)) {
            $marker->addMediaFromRequest('markersArr')->toMediaCollection('markersArr');
            $st = $marker->media->last();

            return response()->json($st);
        }
    }

    // marker imgs
    public function markerImages(Marker $marker)
    {
        $element = $marker->media->all();

        // dd($element);
        return response()->json($element);
    }

    public function deleteMarkerImg(Marker $marker, Request $request, $id)
    {
        $id = $request->id;

        $marker->media->where('id', $id)->first()->delete();
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
