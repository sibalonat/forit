<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFormRequest;
use App\Models\Form;
use Illuminate\Support\Facades\Redirect;
// use Request;
// use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\Request;
// use Spatie\MediaLibrary\MediaCollections\Models\Media;

// use Illuminate\Support\Facades\Request;

class FormController extends Controller
{
    public function create()
    {
        return $this->initialstore();
    }

    public function edit(Form $form)
    {
        return Inertia::render('CreateForm', [
            'f' => $form
        ]);
    }

    public function show(Form $form)
    {
        return $form->getMedia();
    }

    // public function show(Form $form)
    // {
    //     // return all images
    //     // return $form->getMedia()->latest()->pluck('name')->toArray();
    //     // dd($form->getMedia());
    //     // dd($form->getMedia());
    //     // dd($form->query()->with('media')->get());
    //     return $form->getMedia();
    // }


    public function update(StoreFormRequest $request, Form $form)
    {
        $request->validated();

        $form->update($request->all());
        return redirect()->route('dashboard');
    }


    public function stimage(Form $form, Request $request)
    {
        if (isset($request->fileUpload)) {
            $form->addMediaFromRequest('fileUpload')->toMediaCollection();
            $st = $form->media->last();

            return response()->json($st);
        }
    }


    public function initialstore()
    {
        $form = Form::create([
            'form_builder_json' => null
        ]);

        return Redirect::route('form.edit', $form->id);
    }

    public function destroy(Form $form)
    {
        $form->delete();
    }

    public function showMedia(Form $form, $id)
    {
        // $element = $form->media->where('id', $media->id)->get();
        $element = $form->media->where('id', $id)->first();
        // $form->delete();
        dd($element);
    }

    public function deleteMedia(Form $form, Request $request, $id)
    {
        $id = $request->id;

        $form->media->where('id', $id)->first()->delete();
    }
}
