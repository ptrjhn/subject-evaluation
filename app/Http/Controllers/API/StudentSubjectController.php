<?php

namespace App\Http\Controllers\API;

use App\StudentSubject;
use App\Rules\Propercase;
use App\CourseSubjectView;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Validation\Validator;

class StudentSubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $id)
    {
        $studentSubjects = StudentSubject::where('student_id', $id);

        if ($request->query('sy')) {
            $studentSubjects = $studentSubjects->where('school_year', $request->query('sy'));
        }

        if ($request->query('semester')) {
            $studentSubjects = $studentSubjects->where('semester', $request->query('semester'));
        }

        if ($request->query('curriculum')) {
            $studentSubjects = $studentSubjects->where('curriculum_year', $request->query('curriculum'));
        }

        if ($request->query('course_id')) {
            $studentSubjects = $studentSubjects->where('course_id', $request->query('course_id'));
        }

        return response()->json($studentSubjects->get());
    }

    public function remainingSubjects(Request $request)
    {
        $remainingSubjects = DB::table('vw_courses_subjects')
            ->select(
                'vw_courses_subjects.id',
                'vw_courses_subjects.course_id',
                'subject_id',
                'vw_courses_subjects.subject_code',
                'vw_courses_subjects.subject_description',
                'vw_courses_subjects.course_code',
                'vw_courses_subjects.course_description',
                'vw_courses_subjects.units',
                'vw_courses_subjects.curriculum_year',
                'vw_courses_subjects.semester',
                'vw_courses_subjects.year_level',
                'vw_courses_subjects.prerequisite'
            )
            ->where('vw_courses_subjects.deleted_at', '=', null)
            ->where('vw_courses_subjects.curriculum_year', $request->query('curriculum'))
            ->where('vw_courses_subjects.course_id', '=', $request->query('courseId'))
            ->whereRaw('subject_description NOT IN (SELECT subject_description FROM student_subjects 
                    WHERE grade <= 3.00 OR school_year = ? OR grade IS NULL OR grade = "")', [$request->query('sy')]);
        if ($request->query('subject_description')) {

            $remainingSubjects = $remainingSubjects->where('vw_courses_subjects.semester', $request->query('semester'));
        }

        if ($request->query('yearLevel')) {
            $remainingSubjects = $remainingSubjects->where('vw_courses_subjects.year_level', $request->query('yearLevel'));
        }

        return response()->json([
            'data' => $remainingSubjects->get(),
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
        $request->validate([
            'course_id' => 'required|exists:courses,id',
            'subject_code' => ['required'],
            'subject_id' => ['required'],
            'student_id' => ['required'],
            'subject_description' => 'required',
            'units' => 'required',
            'semester' => ['required', Rule::in(['First', 'Second', 'Summer'])],
            'school_year' => 'required',
            'curriculum_year' => 'required|exists:curriculums,curriculum_year',
            'student_id' => 'required|integer|exists:students,id',
            'year_level' => [
                'required',
                Rule::in(['First Year', 'Second Year', 'Third Year', 'Fourth Year', 'Fifth Year'])
            ],

        ]);


        $isValidated = $this->validatePrerequisites($request);

        if (!$isValidated) {
            return response()->json([
                'message' => 'You need to passed the pre-requisite of ' . $request->subject_code,
                'validation' => 'failed',

            ], 400);
        }


        $isMaxUnits = $this->validateTotalUnits($request);

        if ($isMaxUnits) {
            return response()->json([
                'message' => 'Maximum of 24 units only',
                'validation' => 'failed',

            ], 400);
        }

        $studentSubject = new StudentSubject();
        $studentSubject->student_id = $request->student_id;
        $studentSubject->subject_code = $request->subject_code;
        $studentSubject->subject_description = $request->subject_description;
        $studentSubject->units = $request->units;
        $studentSubject->subject_id = $request->subject_id;
        $studentSubject->semester = $request->semester;
        $studentSubject->curriculum_year = $request->curriculum_year;
        $studentSubject->school_year = $request->school_year;
        $studentSubject->course_id = $request->course_id;
        $studentSubject->year_level = $request->year_level;
        $studentSubject->save();


        return response()->json([
            'message' => $studentSubject->subject_description . ' successfully added',
            'validation' => 'passed',
            'data' => $studentSubject,

        ], 201);
    }

    public function validatePrerequisites($request)
    {
        if ($request->prerequisite === null || $request->prerequisite == '') {
            return true;
        } else {
            $prerequisites = explode(',', $request->prerequisite);
            $data = DB::table('student_subjects')
                ->whereIn('subject_code', $prerequisites)
                ->where('student_id', $request->student_id)
                ->where('course_id', $request->course_id)
                ->where('curriculum_year', $request->curriculum_year)
                ->where('units', $request->units)
                ->whereIn('grade', ['1.00', '1.25', '1.50', '1.75', '2.00', '2.25', '2.50', '2.75', '3.00'])
                ->get();
            if (count($data) < count($prerequisites)) {
                return false;
            }

            return true;
        }
    }

    public function validateTotalUnits($request)
    {
        $data = DB::table('student_subjects')
            ->select(DB::raw("SUM(units) as total_units"))
            ->where('student_id', '=', $request->student_id)
            ->where("semester", '=', $request->semester)
            ->where('school_year', '=', $request->school_year)
            ->where('deleted_at', '=', NULL)
            ->get();

        return $data[0]->total_units + (int) $request->units > 24 ? true : false;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateGrades(Request $request)
    {
        $subjects = [];
        foreach ($request->all() as $row) {
            $subject = StudentSubject::find($row['id']);
            $subject->grade = $row['grade'];
            $subject->save();

            array_push($subjects, $subject);
        }
        return $subjects;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $studentSubject = StudentSubject::findOrFail($id);
        $studentSubject->delete();
    }
}
