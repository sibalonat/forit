<?php

namespace App\Http\Controllers;

use App\Models\MapView;
use Inertia\Inertia;
use App\Models\Marker;
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  Marker $marker
     * @return \Illuminate\Http\Response
     */
    public function show(MapView $mapview)
    {
        //
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
            'm' => $mapview
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  Marker $marker
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MapView $mapview)
    {
        //
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
