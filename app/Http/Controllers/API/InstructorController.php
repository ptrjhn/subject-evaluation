<?php

namespace App\Http\Controllers\API;

use App\Instructor;
use App\Rules\Propercase;
use Illuminate\Http\Request;
use App\Rules\AlphaSpaceDash;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class InstructorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $instructor = Instructor::latest()->get();

        return response()->json([
            'data' => $instructor
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
            'first_name.unique' => "{$request->last_name} , {$request->first_name} {$request->middle_name} already exist",
        ];

        $validator = Validator::make($request->all(), [
            'first_name' => [
                'required', new AlphaSpaceDash, new Propercase,
                Rule::unique('instructors')->where(function ($query) use ($request) {
                    return $query->where([
                        ['first_name', $request->first_name],
                        ['middle_name', $request->middle_name],
                        ['last_name', $request->last_name],
                    ]);
                })
            ],
            'middle_name' => ['required', new AlphaSpaceDash, new Propercase],
            'last_name' => ['required', new AlphaSpaceDash, new Propercase],
        ], $messages);

        if ($validator->fails()) {
            return  response()->json([
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }


        $instructor = Instructor::create([
            'first_name' => $request->first_name,
            'middle_name' => $request->middle_name,
            'last_name' => $request->last_name,
            'is_active' => true,
        ]);

        return response()->json([
            'data' => $instructor,
            'message' => 'Successfully created'
        ], 201);
    }


    public function show($id)
    {
        $selected = Instructor::findOrFail($id);

        return response()->json([
            'data' => $selected
        ]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $messages = [
            'first_name.unique' => "{$request->last_name} , {$request->first_name} {$request->middle_name} already exist",
        ];

        $validator = Validator::make($request->all(), [
            'first_name' => [
                'required', new AlphaSpaceDash,
                new Propercase,
                Rule::unique('instructors')->where(function ($query) use ($request) {
                    return $query->where([
                        ['first_name', $request->first_name],
                        ['middle_name', $request->middle_name],
                        ['last_name', $request->last_name],
                        ['id', '!=', $request->id],
                    ]);
                })
            ],
            'middle_name' => ['required', new AlphaSpaceDash, new Propercase],
            'last_name' => ['required', new AlphaSpaceDash, new Propercase],
        ], $messages);



        if ($validator->fails()) {
            return  response()->json([
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }

        $instructor = Instructor::findOrFail($id);
        $instructor->update($request->all());

        return response()->json([
            'failed' => true,
            'data' => $instructor,
            'message' => 'Successfully updated'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $student = Instructor::find($id);
        $student->delete();

        return response()->json([
            'failed' => false,
            'message' => 'Successfully Deleted'
        ]);
    }
}
