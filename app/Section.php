<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    protected $fillable = ['course_id', 'section_name'];
    public function course()
    {
        return $this->belongsTo('App\Course');
    }

    public function classes()
    {
        return $this->hasMany('App\ClassSection');
    }
}
