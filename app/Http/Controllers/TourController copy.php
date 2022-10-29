<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStationRequest;
use Illuminate\Http\Request;

use App\Models\Tour;
use Inertia\Inertia;
use App\Http\Requests\StoreTourRequest;
use App\Models\Station;
use Illuminate\Support\Facades\Redirect;

class TourController extends Controller
{
    public function index()
    {
        return Inertia::render('Tour/IndexTours', [
            'tours' => Tour::all()
        ]);
    }

    public function create()
    {
        return Inertia::render('Tour/TourCreate');
    }

    public function store(StoreTourRequest $request)
    {
        $request->validated();
        $tour = Tour::create([
            'title' => $request->title
        ]);
        return Redirect::route('tour.edit', $tour->slug);
    }

    public function edit(Tour $tour)
    {
        // dd($tour->whereId($tour->id)->with('stations:id')->first());
        // query()
        return Inertia::render('Tour/TourEditWithStations', [

            'tour' => $tour->whereId($tour->id)->with('stations')->first(),
            // 'tour' => $tour->whereId($tour->id)->load('stations:id,lat,lng')->first(),
            // 'tour' => $tour->whereId($tour->id)->first(),
            // 'stations' => Inertia::lazy(fn() =>
            //     Station::with('tour')->where('tour_id', $tour->id)->get()
            // )
        ]);
    }

    public function editStation(Tour $tour, Station $station)
    {
        return Inertia::modal('Tour/ModalStation')
            ->with([
                'stat' => $station->only('id', 'slug', 'uuid', 'teaser', 'tour_id', 'lng', 'lat'),
                'media' => $station->media->all()
            ])
            ->baseRoute('tour.edit', $tour->slug);
    }

    public function update(StoreStationRequest $request, Tour $tour, Station $station)
    {
        $request->validated();
        $station->update($request->all());

        return Redirect::route('tour.edit', $tour->slug);
    }


    // api calls
    public function stationImage(Request $request, Station $station)
    {
        // Request $request
        if (isset($request->stationArr)) {
            // dd($request->files);
            // foreach ($request->images)
            // dd($request->stationArr);
            foreach ($request->files as $value) {
                // dd($value);
                // dd($value->getMimeType());
                if ($value->getMimeType() === 'video/mp4') {
                    // dd($value);
                    $station->addMediaFromRequest('stationArr')->toMediaCollection('videos');
                    // dd($station->media->last());
                }
                # code...
            }
            // $station->addMultipleMediaFromRequest(['stationArr'])->each(function ($fileAdder) {
            // $fileAdder->toMediaCollection('stationArr');
            // });
            // dd($station);
            // $fileAdders = $station
            //     ->addMultipleMediaFromRequest(['stationArr'])
            //     ->each(function ($fileAdder) {
            //         dd($fileAdder);
            //         $fileAdder->toMediaCollection();
            //     });
            // $station->addMediaFromRequest('stationArr')->toMediaCollection('stationArr');
            // $st = $station->media->last();

            // return response()->json($st);
        }
    }

    public function stationImages(Station $station)
    {
        $element = $station->media->all();
        return response()->json($element);
    }

    public function deleteStationImg(Station $station, Request $request, $id)
    {
        $id = $request->id;

        $station->media->where('id', $id)->first()->delete();
    }

    public function showStation(Station $station)
    {
        return response()->json($station);
    }

    public function createStation(Tour $tour)
    {
        return $this->initialstore($tour);
    }

    public function initialstore($tour)
    {
        $station = Station::create([
            'tour_id' => $tour->id
        ]);

        return Redirect::route('tour.stationmodal', [$tour->slug, $station->id]);
    }


    public function delete(Station $station)
    {
        $station->delete();
        return response()->json('done');
        // return Redirect::route('tour.edit', $tour->slug);
    }



    // index api
    public function apiIndex(Tour $tour)
    {
        $allTours = $tour->with('stations')->get();
        return inertia('Tour/TourEditWithStations', []);
        // Inertia::render('Tour/TourEditWithStations'
        // return response()->json($allTours);
    }
}
