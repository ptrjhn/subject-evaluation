<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class InstructorSubject extends Model
{
    protected $fillable = [
        'id', 'instructor_id', 'sy_id', 'semester_id', 'subject_id',  'subject_code', 'subject_description', 'units'
    ];

    protected $hidden = [
        'deleted_at', 'updated_at', 'created_at'
    ];

    public function instructor(): BelongsTo
    {
        return $this->belongsTo(Instructor::class);
    }
    public function subject(): BelongsTo
    {
        return $this->belongsTo(Subject::class);
    }
}
