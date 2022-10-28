<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
// use Illuminate\Http\Request;

class AugmentController extends Controller
{
    public function create()
    {
        return Inertia::render('Augmentation/ViewAugmentation');
    }

    public function mind()
    {
        return Inertia::render('Mind/ArMind');
    }
}
