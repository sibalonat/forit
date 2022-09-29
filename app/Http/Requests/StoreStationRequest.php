<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'uuid' => 'required|uuid',
            'slug' => 'required|string|max:255',
            'lat' => 'required|between:-90,90',
            'lng' => 'required|between:-180,180',
            'tour_id' => 'required|exists:users,id',
            'teaser' => 'required'
        ];
    }
}
