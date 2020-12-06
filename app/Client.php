<?php

namespace App;

use App\Processors\AvatarProcessor;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $appends = [
        'created'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',

    ];

    protected $fillable = [
        'name',
        'company',
        'city',
        'progress',
        'created_date',

    ];



    public function getAvatarAttribute()
    {
        return AvatarProcessor::get($this);
    }

    public function getCreatedAttribute()
    {
        if (empty($this->created_at)) {
            return null;
        }

        return $this->created_at->toFormattedDateString();
    }

    public function getCreatedMmDdYyyyAttribute()
    {
        if (empty($this->created_at)) {
            return null;
        }

        return $this->created_at->format('m-d-Y');
    }

    public function setCreatedDateAttribute($value)
    {
        try {
            $this->attributes['created_at'] = new Carbon($value);
        } catch (\Exception $exception) {
            $this->attributes['created_at'] = now();
        }
    }
}
