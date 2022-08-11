<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFormRequest;
use App\Models\Form;
use Illuminate\Support\Facades\Redirect;
// use Request;
// use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\Request;
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
            // 'form_builder_json' => $form->form_builder_json
        ]);
    }

    // public function store(StoreFormRequest $request, Request $r)
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

            // return $form->query()->getMedia();
        }
    }


    public function initialstore()
    {
        // Request::validate([
        //     'form_builder_json' => ['nullable']
        // ])
        $form = Form::create([
            'form_builder_json' => null

        ]);

        return Redirect::route('form.edit', $form->id);
    }

    public function destroy(Form $form)
    {
        $form->delete();
    }


}
