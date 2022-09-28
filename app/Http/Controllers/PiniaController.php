<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PiniaController extends Controller
{
    public function create()
    {
        return Inertia::render('Pinia/PiniaTry');
    }
}
