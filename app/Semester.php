<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Semester extends Model
{
    protected $fillable = ['is_active'];

    protected $casts = ['is_active' => 'boolean'];
}
