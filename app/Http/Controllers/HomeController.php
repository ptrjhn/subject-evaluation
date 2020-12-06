<?php

namespace App\Http\Controllers;

use App\Course;
use App\Student;
use App\Subject;
use App\Instructor;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('api');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function dashboard()
    {
        return response()->json([
            'count' => [
                'students' => Student::count(),
                'courses' => Course::count(),
                'instructors' => Instructor::count(),
                'subjects' => Subject::count(),
            ]
        ]);
    }
}
