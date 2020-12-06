<?php

namespace App\Http\Controllers\API;

use App\Course;
use App\CourseSubject;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Rules\Uppercase;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $courses = Course::with(['subjects'])->latest()->get();


        // $courses = \App\CourseSubject::with(['subject', 'course'])->get();

        return response()->json([
            'data' => $courses
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
            'course_code.unique' => 'using the same course code with same description is not allowed',
            'description.unique' => ':attribute already exists in the database',
        ];

        $validator = Validator::make($request->all(), [
            'course_code' => [
                'required', 'alpha', 'min:3', 'max:25',
                new Uppercase,
                Rule::unique('courses')->where(function ($query) use ($request) {
                    return $query->where([
                        ['course_code', '=', $request->course_code],
                        ['description', '=', $request->description],
                    ]);
                })
            ],
            'description' => 'required|alpha_spaces|unique:courses,description'
        ], $messages);

        if ($validator->fails()) {
            return  response()->json([
                'failed' => true,
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }


        $course = Course::create([
            'course_code' => $request['course_code'],
            'description' => $request['description'],
        ]);

        return response()->json([
            'data' => $course,
            'failed' => false,
            'message' => 'Course successfully added'
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function show(Course $course)
    {
        $selectedCourse = Course::findOrFail($course->id);

        return response()->json([
            'data' => $selectedCourse
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $messages = [
            'course_code.unique' => 'using the same course code with same description is not allowed',
            'description.unique' => ':attribute already exists in the database',
        ];

        $validator = Validator::make($request->all(), [
            'course_code' => [
                'required', 'alpha', 'min:3', 'max:20',
                new Uppercase,
                Rule::unique('courses')->where(function ($query) use ($request) {
                    return $query->where([
                        ['course_code', '=', $request->course_code],
                        ['description', '=', $request->description],
                        ['id', '!-', $request->id],
                    ]);
                })
            ],
            'description' => 'required|alpha_spaces|unique:courses,description,' . $id
        ], $messages);

        if ($validator->fails()) {
            return  response()->json([
                'failed' => true,
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }

        $course = Course::findOrFail($id);
        $course->update($request->all());

        return response()->json([
            'failed' => true,
            'data' => $course,
            'message' => 'Successfully updated'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $course = Course::findOrFail($id);
        $course->delete();

        return response()->json([
            'status' => true
        ]);
    }

    public function destroyMultiple(Request $request)
    {
        $request->validate([
            'ids' => 'required|array'
        ]);

        Course::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }

    public function getCurriculumsByCourse($course_id)
    {
        $curriculums = DB::table('course_subjects')
            ->where('course_subjects.course_id', '=', $course_id)
            ->join('academic_years', 'course_subjects.sy_id', '=', 'academic_years.id')
            ->distinct('sy_id')
            ->orderBy('description')
            ->get(['description as curriculum']);

        return response()->json([
            'data' => $curriculums,
        ]);
    }

    public function subjectsByCourse($course_id)
    {
        $subjectsByCourse = DB::table('course_subjects')
            ->where('course_subjects.course_id', '=', $course_id)
            ->join('courses', 'course_subjects.course_id', '=', 'courses.id')
            ->join('academic_years', 'course_subjects.sy_id', '=', 'academic_years.id')
            ->join('subjects', 'course_subjects.subject_id', '=', 'subjects.id')
            ->join('semesters', 'course_subjects.semester', '=', 'semesters.id')
            ->select(
                'subjects.description as subject_description',
                'academic_years.description as curriculum_year',
                'courses.course_code',
                'courses.description as course_description',
                'semesters.semester as  ',
                "course_subjects.*",

            )
            ->get();

        return response()->json([
            'data' => $subjectsByCourse,
        ]);
    }
}
