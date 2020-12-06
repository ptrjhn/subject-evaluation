<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Student extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at', 'deleted_at', 'updated_at'];

    protected $appends = ['full_name'];

    protected $fillable = [
        'student_id', 'first_name', 'last_name', 'middle_name', 'contact_no', 'sex', 'birth_date', 'nationality', 'religion',
        'civil_status', 'birth_place', 'address', 'course_id', 'curriculum_year'
    ];

    public function course()
    {
        return $this->belongsTo('App\Course');
    }

    public function curriculum()
    {
        return $this->belongsTo('App\Curriculum');
    }

    public function getFullNameAttribute()
    {
        return "{$this->last_name}, {$this->first_name} {$this->middle_name}";
    }
}
