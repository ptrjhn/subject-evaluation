<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StudentSubject extends Model
{
    protected $guarded = ['id'];

    public function subject()
    {
        return $this->belongsTo('App\Subject');
    }

    public function student()
    {
        return $this->belongsTo('App\Student');
    }
}
