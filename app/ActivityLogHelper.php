<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\Contracts\Activity;

trait ActivityLogHelper
{
    use LogsActivity;
    public $incrementing = true;

    protected static $logOnlyDirty = true;

    protected static $submitEmptyLogs = false;

    protected static $logAttributes = ['*'];

    public function tapActivity(Activity $activity, string $eventName)
    {
        $activity->ip_address = request()->ip();
        $activity->url = request()->url();
        $activity->method = request()->method();
        $activity->agent = request()->header('user-agent');
        $activity->user_id = auth()->check() ? auth()->user()->id : 0;
    }
}
