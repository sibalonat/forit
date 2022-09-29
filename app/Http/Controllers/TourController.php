<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;

use App\Models\Tour;
use Inertia\Inertia;
use App\Http\Requests\StoreTourRequest;
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
            // $request->all()
            'title' => $request->title
        ]);
        return Redirect::route('tour.edit', $tour->slug);
    }

    public function edit(Tour $tour)
    {
        return Inertia::render('Tour/TourEditWithStations', [
            'tour' => $tour
        ]);
    }



    // index api
    public function apiIndex()
    {
        $allTours = Tour::with('stations')->get();
        return response()->json($allTours);
    }
}
