<?php

namespace App;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Instructor extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];

    protected $fillable = ['first_name', 'middle_name', 'last_name', 'is_active'];

    public function loads(): HasMany
    {
        return $this->hasMany(InstructorLoad::class, 'instructor_id');
    }

    public function students(): HasMany
    {
        return $this->hasMany(InstructorStudent::class, 'instructor_id');
    }

    public function subjects(): HasMany
    {
        return $this->hasMany(InstructorSubject::class, 'instructor_id');
    }

    public function account(): HasOne
    {
        return $this->hasOne(User::class, 'source_id');
    }
}
