<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class CurriculumRequest extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'course_id' => ['required', 'exists:courses,id'],
            'curriculum_year' =>
            [
                'required', 'exists:academic_years,description',
                Rule::unique('curriculums')
                    ->where(function ($query) {
                        return $query->where([
                            ['course_id', $this->request->get('course_id')],
                            ['curriculum_year', $this->request->get('curriculum_year')],
                        ]);
                    })
                    ->ignore($this->id)
            ]
        ];
    }
}
