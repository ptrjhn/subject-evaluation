<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AcademicYear extends Model
{
    use SoftDeletes;
    protected $fillable = ['id', 'school_year', 'description', 'is_current'];
    protected $dates = ['deleted_at'];

    protected $casts = ['is_current' => 'boolean'];
}
