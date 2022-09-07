<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
// use Illuminate\Http\Request;

class AugmentController extends Controller
{
    public function create()
    {
        // return view('ar.augmented');
        return Inertia::render('Augmentation/ViewAugmentation');
    }
}
