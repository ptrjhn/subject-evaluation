<?php

namespace App\Http\Controllers\API;

use App\Subject;
use App\Rules\Uppercase;
use Illuminate\Http\Request;
use App\Rules\AlphaSpaceDash;
use Illuminate\Validation\Rule;
use App\Rules\AlphaSpaceNumeric;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $subjects = Subject::latest()->get();

        return response()->json([
            'data' => $subjects,
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
        // 
        $messages = [
            'description.unique' => 'subject description already taken by subject code ' . $request->code,
        ];

        $validator = Validator::make($request->all(), [
            'code' => ['required', 'min:3', 'max:10', 'alpha_num', new Uppercase, 'unique:subjects,code'],
            'description' => [
                'required', 'string',
                Rule::unique('subjects')->where(function ($query) use ($request) {
                    return $query->where([
                        ['code', $request->code],
                        ['description', $request->description]
                    ]);
                })
            ],
            'unit' => 'required|integer'
        ], $messages);

        if ($validator->fails()) {
            return  response()->json([
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }


        $course = Subject::create([
            'code' => trim($request['code']),
            'description' => trim($request['description']),
            'unit' => $request['unit'],
            'lab' => (int) $request['lab'],
            'lec' => (int) $request['lec'],
        ]);

        return response()->json([
            'data' => $course,
            'message' => 'Subject Successfully created'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $selected = Subject::find($id);

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
            'description.unique' => 'subject description already taken by subject code ' . $request->code,
        ];
        $validator = Validator::make($request->all(), [
            'code' => ['required', 'string', 'min:3', 'max:20', new Uppercase, new AlphaSpaceNumeric, 'unique:subjects,code,' . $id],

            'description' => [
                'required', 'string',
                Rule::unique('subjects')->where(function ($query) use ($request) {
                    return $query->where([
                        ['code', $request->code],
                        ['description', $request->description],
                        ['id', '!=', $request->id]
                    ]);
                })
            ],
            'unit' => 'required'
        ], $messages);

        if ($validator->fails()) {
            return  response()->json([
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }

        $subject = Subject::findOrFail($id);

        $subject->code = trim($request->code);
        $subject->description = trim($request->description);
        $subject->unit = $request->unit;
        $subject->lab = $request->lab;
        $subject->lec = $request->lec;

        $subject->save();

        return response()->json([
            'failed' => true,
            'data' => $subject,
            'message' => 'Successfully updated'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function destroy(Subject $subject)
    {
        $subject->delete();

        return response()->json([
            'failed' => false,
            'message' => 'Successfully Deleted'
        ]);
    }
}
