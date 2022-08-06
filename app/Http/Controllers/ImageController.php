<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Redirect;

class ImageController extends Controller
{
    public function store(Request $request)
    {

        // $image_path = '';

        // if ($request->hasFile('image')) {
        //     $image_path = $request->file('image')->store('image', 'public');
        // }

        // $data = Image::create([
        //     'image' => $image_path,
        // ]);

        // $skill->addMediaFromRequest('feature_image')
        // ->toMediaCollection('service');

        dd($request);

        // if($request->has('images'))
        // {
            // dd($this);
            // foreach($request->file('images') as $image)
            // {
                $this->addMediaFromRequest('images')->toMediaCollection('images');
            // }
        // }
        // return response()->json(['file' => $fileName])


        // return Redirect::route('image.index');
    }
}
