<?php

namespace App\Http\Controllers\API;

use App\Student;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Rules\Propercase;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct()
    {
        // $this->middleware('auth');
    }

    public function index(Request $request)
    {

        $students = Student::with(['course', 'curriculum'])->latest()->get();

        if ($request->query('active') == 'false') {
            $students =
                Student::with(['course'])->onlyTrashed()->latest()->get();
        }

        return response()->json([
            'data' => $students
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
        try {
            $messages = [
                'last_name.unique' => 'student name already exist',
                'sex.in' => 'gender must be either Male or Female',
                'sex.required' => 'gender is required',
                'contact_no.required' => 'contact number is required',
                'student_id.regex' => 'student id must be in correct format XX-XXXXX',

            ];

            $validator = Validator::make($request->all(), [
                'student_id' => 'required|min:8|max:10|regex:/^\d{2}-\d{5}$/|unique:students,student_id',
                'first_name' => ['required', 'alpha_spaces', new Propercase],
                'middle_name' => ['required', 'alpha_spaces', new Propercase],
                'guardian_name' => ['nullable', 'alpha_spaces', new Propercase],
                'nationality' => 'nullable|alpha_spaces',
                'religion' => 'nullable|alpha_spaces',
                'birth_date' => 'required|date',
                'contact_no' => 'required|min:11|max:15|starts_with:09',
                'guardian_contact' => 'nullable|min:11|max:15|starts_with:09',
                'curriculum_id' => 'required|exists:curriculums,id',
                'sex' => [
                    'required',
                    Rule::in(['Male', 'Female'])
                ],
                'last_name' => ['required', 'string', 'alpha_spaces', new Propercase, Rule::unique('students')->where(function ($query) use ($request) {
                    return $query->where([
                        ['first_name', $request->first_name],
                        ['middle_name', $request->middle_name],
                        ['last_name', $request->last_name],
                    ]);
                })],

                'address' => 'required|string',
                'course_id' => 'required|integer|exists:courses,id',
                'civil_status' => ['required', Rule::in(['Married', 'Single', 'Divorced', 'Widowed'])],

            ], $messages);

            if ($validator->fails()) {
                return  response()->json([
                    'failed' => true,
                    'errors' => $validator->errors(),
                    'message' => "Something went wrong",
                ], 422);
            }


            $student = Student::create([
                'student_id' => $request->student_id,
                'first_name' => $request->first_name,
                'middle_name' => $request->middle_name,
                'last_name' => $request->last_name,
                'birth_date' => $request->birth_date,
                'civil_status' => $request->civil_status,
                'birth_place' => $request->birth_place,
                'address' => $request->address,
                'contact_no' => $request->contact_no,
                'guardian' => $request->guardian,
                'sex' => $request->sex,
                'nationality' => $request->nationality,
                'religion' => $request->religion,
                'course_id' => $request->course_id,
                'curriculum_id' => $request->curriculum_id,
            ]);

            return response()->json([
                'failed' => false,
                'data' => $student,
                'message' => 'Student Successfully created'
            ], 201);
        } catch (\Throwable $th) {
            throw $th;
        }
    }


    public function show($id)
    {
        $selected = Student::with('course')->findOrFail($id);

        return response()->json([
            'data' => $selected
        ]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        $messages = [
            'last_name.unique' => 'student name already exist',
            'sex.in' => 'gender must be either Male or Female',
            'sex.required' => 'gender is required',
            'contact_no.required' => 'contact number is required',
            'student_id.regex' => 'student id must be in correct format XX-XXXXX',
        ];

        $validator = Validator::make($request->all(), [
            'student_id' => 'required|regex:/^\d{2}-\d{5}$/|unique:students,student_id,' . $id,
            'first_name' => ['required', 'alpha_spaces', new Propercase],
            'middle_name' => ['required', 'alpha_spaces', new Propercase],
            'guardian_name' => ['nullable', 'alpha_spaces', new Propercase],
            'nationality' => 'nullable|alpha_spaces',
            'religion' => 'nullable|alpha_spaces',
            'birth_date' => 'required',
            'contact_no' => 'required|min:11|max:15|starts_with:09',
            'guardian_contact' => 'nullable|min:11|max:15|starts_with:09',
            'curriculum_id' => 'required|exists:curriculums,id',
            'sex' => [
                'required',
                Rule::in(['Male', 'Female'])
            ],
            'last_name' => [
                'required', 'alpha_spaces', 'string', new Propercase,
                Rule::unique('students')->where(function ($query) use ($request) {
                    return $query->where([
                        ['first_name', $request->first_name],
                        ['middle_name', $request->middle_name],
                        ['last_name', $request->last_name],
                        ['id', '!=', $request->id]
                    ]);
                })
            ],

            'address' => 'required|string',
            'sex' => 'required|string', Rule::in(['Male', 'Female']),
            'course_id' => 'required|integer|exists:courses,id',
            'civil_status' => ['required', Rule::in(['Married', 'Single', 'Divorced', 'Widowed'])],

        ], $messages);

        if ($validator->fails()) {
            return  response()->json([
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }

        $student = Student::findOrFail($id);

        $student->student_id = $request->student_id;
        $student->first_name = $request->first_name;
        $student->middle_name = $request->middle_name;
        $student->last_name = $request->last_name;
        $student->birth_date = $request->birth_date;
        $student->civil_status = $request->civil_status;
        $student->birth_place = $request->birth_place;
        $student->address = $request->address;
        $student->contact_no = $request->contact_no;
        $student->guardian = $request->guardian_name;
        $student->guardian_contact = $request->guardian_contact;
        $student->sex = $request->sex;
        $student->nationality = $request->nationality;
        $student->religion = $request->religion;
        $student->course_id = $request->course_id;
        $student->curriculum_id = $request->curriculum_id;
        $student->save();

        return response()->json([
            'failed' => false,
            'data' => $student,
            'message' => 'Successfully updated'
        ]);
    }

    public function destroy($id)
    {
        Student::findOrFail($id)->delete();

        return response()->json([
            'failed' => false,
            'message' => 'Successfully Deleted'
        ]);
    }
}
