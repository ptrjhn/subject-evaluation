<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group([
    'middleware' => 'api'

], function () {
    Route::group(['prefix' => 'auth'], function () {
        Route::post('login', 'API\AuthController@login');
        Route::post('logout', 'API\AuthController@logout');
        Route::post('refresh', 'API\AuthController@refresh');
        Route::get('user-profile', 'API\AuthController@userProfile');
    });
});

Route::prefix('/user')->group(function () {
    Route::get('', 'CurrentUserController@show');
    Route::get('/my-logs', 'CurrentUserController@userLogsByCurrentUser');
    Route::patch('', 'CurrentUserController@update');
    Route::patch('/password', 'CurrentUserController@updatePassword');
});


Route::group(['middleware' => ['autotrim', 'auth:api']], function () {
    Route::apiResources([
        'courses' => 'API\CourseController',
        'users' => 'API\UserController',
        'subjects' => 'API\SubjectController',
        'students' => 'API\StudentController',
        'sections' => 'API\SectionController',
        'instructors' => 'API\InstructorController',
        'courses-subjects' => 'API\CourseSubjectController',
        'academic-years' => 'API\AcademicYearController',
        'curriculums' => 'API\CurriculumController',
    ]);
    Route::get('records/count', 'HomeController@dashboard');
    Route::get('courses/{course}/subjects', 'API\CourseSubjectController@subjectsByCourse');
    Route::get('student/subjects/remaining', 'API\StudentSubjectController@remainingSubjects');
    Route::post('student/subjects', 'API\StudentSubjectController@store');
    Route::put('student/subjects/update', 'API\StudentSubjectController@updateGrades');
    Route::delete('student/subjects/{id}', 'API\StudentSubjectController@destroy');
    Route::get('students/{id}/subjects', 'API\StudentSubjectController@index');
    Route::get('settings/semesters/set/{id}', 'SettingController@setCurrentSem');
    Route::get('sy/current', 'API\AcademicYearController@getCurrentSY');
    Route::get('academic-years/{id}/set-current', 'API\AcademicYearController@setCurrentSY');
    Route::get('settings/semesters', 'SettingController@getSemesters');
    Route::get('settings/grading-system', 'SettingController@getAcademicGradings');
    Route::get('settings/semesters/current', 'SettingController@getCurrentSem')->name('current-sem');
    Route::get('settings/academic-gradings', 'SettingController@getAcademicGradings');
    Route::get('courses/{course}/curriculums', 'API\CourseController@getCurriculumsByCourse');
});
