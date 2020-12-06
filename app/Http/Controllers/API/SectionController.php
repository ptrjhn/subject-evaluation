<?php

namespace App\Http\Controllers\API;

use App\Section;
use App\Rules\Uppercase;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class SectionController extends Controller
{
    public function index()
    {

        $sections = Section::with(['course'])->latest()->get();

        return response()->json([
            'data' => $sections
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $messages = [
            'section_name.unique' => 'section is already is exists',
        ];

        $validator = Validator::make($request->all(), [
            'section_name' => [
                'required', 'min:3', 'max:25',
                new Uppercase,
                Rule::unique('sections')->where(function ($query) use ($request) {
                    return $query->where([
                        ['course_id', '=', $request->course_id],
                        ['section_name', '=', $request->section_name],
                    ]);
                })
            ],
            'course_id' => 'required|exists:courses,id'
        ], $messages);

        if ($validator->fails()) {
            return  response()->json([
                'failed' => true,
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }


        $section = Section::create([
            'course_id' => $request['course_id'],
            'section_name' => $request['section_name'],
        ]);

        return response()->json([
            'data' => $section,
            'failed' => false,
            'message' => 'Section successfully added'
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function show(Section $section)
    {
        $section = Section::findOrFail($section->id);

        return response()->json([
            'data' => $section
        ]);
    }

    public function update(Request $request, $id)
    {

        $messages = [
            'section_name.unique' => 'section is already is exists',
        ];

        $validator = Validator::make($request->all(), [
            'section_name' => [
                'required', 'alpha_dash', 'min:3', 'max:25',
                new Uppercase,
                Rule::unique('sections')->where(function ($query) use ($request) {
                    return $query->where([
                        ['course_id', '=', $request->course_id],
                        ['section_name', '=', $request->section_name],
                        ['id', '!=', $request->id],
                    ]);
                })
            ],
            'course_id' => 'required|exists:courses,id'
        ], $messages);

        if ($validator->fails()) {
            return  response()->json([
                'failed' => true,
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }

        $course = Section::findOrFail($id);
        $course->update($request->all());

        return response()->json([
            'failed' => true,
            'data' => $course,
            'message' => 'Successfully updated'
        ]);
    }

    public function destroy($id)
    {
        $course = Section::findOrFail($id);
        $course->delete();

        return response()->json([
            'status' => true,
            'message' => 'Successfully deleted.'
        ]);
    }
}
