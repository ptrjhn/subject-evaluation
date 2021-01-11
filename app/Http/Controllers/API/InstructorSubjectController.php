<?php

namespace App\Http\Controllers\API;

use App\Instructor;
use App\InstructorSubject;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Controllers\Controller;
use App\Http\Requests\InstructorSubjectRequest;

class InstructorSubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = InstructorSubject::with('subject:id,code,description,unit')
            ->where('instructor_id', $request->instructor_id)
            ->where('sy_id', $request->sy_id)
            ->where('semester_id', $request->semester_id)
            ->get();

        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(InstructorSubjectRequest $request)
    {
        $data = InstructorSubject::create($request->all());
        $data->load('subject');

        return response()->json($data, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(InstructorSubject $data)
    {
        $data->load('subject:id,code,description,unit');
        return response()->json($data, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(InstructorSubjectRequest $request, InstructorSubject $data)
    {
        $data->update($request->all());

        $data->load('subject:id,code,description,unit');

        return response()->json($data, Response::HTTP_ACCEPTED);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(InstructorSubject $data)
    {
        $data->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
