<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFormRequest;
use App\Models\Form;
// use Request;
// use Illuminate\Http\Request;
use Inertia\Inertia;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request;

class FormController extends Controller
{
    public function create()
    {
        $this->initialstore();

        // return Inertia::render('CreateForm');
    }

    public function edit(Form $form)
    {
        // return Inertia::render('Forms/Create', [
        //     'visibility_options' => Form::$visibility_options,
        // ]);


        return Inertia::render('CreateForm', [
            'form_builder_json' => $form->form_builder_json
        ]);
    }

    // public function store(StoreFormRequest $request, Request $r)
    public function store(StoreFormRequest $request)
    {
        // $form = Form::create(
        // $canGo = $request->validated();
        $request->validated();
        // dd($request);
        $form = Form::create($request->all());
        dd($form->id);
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
        // $request->validated();
        $form = Form::create(
            'form_builder_json' => []
            // Request::validate([
            //     'form_builder_json' => ['nullable']
            //     // 'form_builder_json' => ['sometimes']
            // ])
        );
        // $id = $form->id;
        return redirect()->route('form.edit', $form->id);
    }


}
