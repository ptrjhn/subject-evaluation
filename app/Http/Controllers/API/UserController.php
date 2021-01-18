<?php

namespace App\Http\Controllers\API;

use App\User;
use App\Section;
use App\Rules\Uppercase;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Rules\Propercase;
use Spatie\Activitylog\Models\Activity;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::whereIn('user_type', ['Super Admin', 'Admin'])->latest()->get();

        return response()->json([
            'data' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $messages = [
            'email.unique' => 'email is already exists',
        ];

        $validator = Validator::make($request->all(), [
            'name' => ['required', new Propercase, 'unique:users'],
            'email' => [
                'required', 'email', 'unique:users'
            ],
            'user_type' => 'required',
        ], $messages);

        if ($validator->fails()) {
            return  response()->json([
                'failed' => true,
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }


        $user = User::create([
            'name' => $request['name'],
            'student_id' => $request['student_id'],
            'instructor_id' => $request['instructor_id'],
            'user_type' => $request['user_type'],
            'email' => $request['email'],
            'password' => bcrypt($request['password']),
        ]);

        return response()->json($user);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
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
            'email.unique' => 'email is already exists',
        ];

        $validator = Validator::make($request->all(), [
            'name' => ['required', new Propercase, 'unique:users,name,' . $id],
            'email' => [
                'required', 'email', 'unique:users,email,' . $id
            ],
            'user_type' => 'required',
        ], $messages);

        if ($validator->fails()) {
            return  response()->json([
                'failed' => true,
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }


        $user = User::findOrFail($id);
        $user->name = $request->name;
        $user->student_id = $request->student_id;
        $user->instructor_id = $request->instructor_id;
        $user->user_type = $request->user_type;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->update();

        return response()->json($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response()->json([
            'status' => true,
            'message' => 'Successfully deleted.'
        ]);
    }

    public function userLogs($id)
    {
    }
}
