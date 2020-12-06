<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Subject extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
        // 'lab', 'lec', 'unit',
    ];

    protected $fillable = [
        'code',
        'description',
        'unit',
    ];

    public function courses()
    {
        return $this->belongsToMany('App\Course');
    }
}
