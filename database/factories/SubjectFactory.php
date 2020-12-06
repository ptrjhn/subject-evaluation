<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Subject;
use Faker\Generator as Faker;

$factory->define(Subject::class, function (Faker $faker) {
    return [
        'code' => $faker->ean8,
        'description' => $faker->text(50),
        'unit' => $faker->randomDigit,
        'lab' => $faker->randomDigit,
        'lec' => $faker->randomDigit,
        'created_at' => now()->subDays(rand(1, 180))
    ];
});
