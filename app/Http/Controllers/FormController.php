<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFormRequest;
use App\Models\Form;
use Illuminate\Support\Facades\Redirect;
// use Request;
// use Illuminate\Http\Request;
use Inertia\Inertia;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request;

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
            // 'form_builder_json' => $form->form_builder_json
        ]);
    }

    // public function store(StoreFormRequest $request, Request $r)
    public function update(StoreFormRequest $request, Form $form)
    {
        // $form = Form::create(
        // $canGo = $request->validated();
        $request->validated();
        // dd($request);
        $form->update($request->all());
        // dd($form->id);
            // dd($r->all());
            // dd('is here');
            # code...
            // Request::all();

        // dd($r);


            // Request::validate([
            //     'form_builder_json' => ['required'],
            //     ])
            // );
        // $form->addMediaFromRequest('images')->toMediaCollection('image');
        return redirect()->route('dashboard');
    }

    public function initialstore()
    {

        $form = Form::create(
            Request::validate([
                'form_builder_json' => ['nullable']
            ])
            // 'form_builder_json' => []
        );
        return Redirect::route('form.edit', $form->id);
    }


}
