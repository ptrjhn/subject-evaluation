<?php

namespace App\Http\Controllers;

use App\AcademicGrading;
use App\Semester;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SettingController extends Controller
{
    public function setCurrentSem($id)
    {
        DB::update('update semesters set is_active = ?  where id = ?', [true, $id]);

        DB::update('update semesters set is_active = ?  where id != ?', [false, $id]);

        return response()->json([
            'data' => Semester::findOrFail($id),
            'message' => 'Successfully changed.'
        ]);
    }

    public function getSemesters()
    {
        try {
            $semesters = Semester::all();
            return response()->json([
                'data' => $semesters
            ]);
        } catch (\Exception $th) {
            return $th;
        }
    }

    public function getCurrentSem()
    {
        $semester = Semester::where('is_active', 1)->get();
        return response()->json([
            'data' => $semester,
        ]);
    }

    public function getAcademicGradings()
    {
        $gradings = AcademicGrading::all();
        return response()->json([
            'data' => $gradings,
        ]);
    }
}
