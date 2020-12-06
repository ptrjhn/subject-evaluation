<?php

namespace App\Http\Controllers\API;

use App\Curriculum;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\CurriculumRequest;
use Symfony\Component\HttpFoundation\Response;

class CurriculumController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $curriculums = Curriculum::latest()->get();
        if ($request->query('course_id')) {
            $curriculums = $curriculums->where('course_id', $request->query('course_id'));
        }

        $curriculums->load('course');

        return response()->json($curriculums);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CurriculumRequest $request)
    {
        $curriculum = Curriculum::create($request->all());
        $curriculum->load('course');

        return response()->json($curriculum, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Curriculum $curriculum)
    {
        $curriculum->load('course');
        return response()->json($curriculum, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CurriculumRequest $request, Curriculum $curriculum)
    {
        $curriculum->update($request->all());

        $curriculum->load('course');

        return response()->json($curriculum, Response::HTTP_ACCEPTED);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Curriculum $curriculum)
    {
        $curriculum->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
