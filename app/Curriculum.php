<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Curriculum extends Model
{
    protected $table = 'curriculums';

    protected $dates = ['deleted_at'];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    protected $fillable = ['course_id', 'curriculum_year'];

    public function course()
    {
        return $this->belongsTo('App\Course');
    }

    public function students()
    {
        return $this->hasMany('App\Student');
    }

    public function subjects()
    {
        return $this->hasMany('App\CourseSubject');
    }
}
