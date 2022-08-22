<?php

namespace App\Http\Controllers;

use App\Enums\WorkStatus;
use App\Http\Requests\UpdateMapRequest;
use App\Models\MapView;
use Inertia\Inertia;
// use App\Models\Marker;
use Illuminate\Http\Request;
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
        return Inertia::render('Markers/Markers');
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
        // dd($mapview->markers->all());
        return Inertia::render('Markers/CreateMarker', [
            'm' => $mapview->with('media')->first(),
            // 'selectStatus' => $mapview->status,
            // 'img' => $mapview->media->first(),
            'points' => $mapview->markers->all()
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
