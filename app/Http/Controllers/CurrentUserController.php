<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Spatie\Activitylog\Models\Activity;
use App\Http\Requests\ProfileUpdateRequest;
use App\Http\Requests\PasswordUpdateRequest;

class CurrentUserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Get current user's profile
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request)
    {
        $user = $request->user();


        return response()->json([
            'data' => $request->user()
        ]);
    }

    /**
     * Update current user's profile
     *
     * @param ProfileUpdateRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(ProfileUpdateRequest $request)
    {
        $user = $request->user();

        $user->fill($request->only(['name', 'email']));


        $user->save();


        return response()->json([
            'data' => $user
        ]);
    }

    /**
     * Update current user's password
     *
     * @param PasswordUpdateRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function updatePassword(PasswordUpdateRequest $request)
    {
        $user = $request->user();
        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json([
            'status' => true
        ]);
    }

    public function userLogsByCurrentUser()
    {
        return Activity::where('user_id', Auth::user()->id)->get();
    }
}
