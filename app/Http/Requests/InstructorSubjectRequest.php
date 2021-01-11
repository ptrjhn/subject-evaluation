<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class InstructorSubjectRequest extends FormRequest
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
            'instructor_id' => ['required', 'exists:instructors,id'],
            'subject_id' => ['required', 'exists:subjects,id', Rule::unique('instructor_subjects')
                ->where(function ($query) {
                    return $query->where([
                        ['subject_id', $this->request->get('subject_id')],
                        ['sy_id', $this->request->get('sy_id')],
                        ['semester_id', $this->request->get('semester_id')],
                        ['instructor_id', $this->request->get('instructor_id')],
                    ]);
                })
                ->ignore($this->id)],
            'semester_id' => ['required', 'exists:semesters,id'],
            'sy_id' => ['required', 'exists:academic_years,id']
        ];
    }
}
