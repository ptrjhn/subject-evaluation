<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\CourseSubject;
use Faker\Generator as Faker;

$factory->define(CourseSubject::class, function (Faker $faker) {
    return [
        'year_level' => "First Year",
        'semester' =>  "First",
        'sy_id' =>  $faker->numberBetween(1, 11),
        'course_id' => 1,
        'subject_id' => $faker->numberBetween(1, 100),
        'curriculum_id' => 1,
        'created_at' => now(),
    ];
});
