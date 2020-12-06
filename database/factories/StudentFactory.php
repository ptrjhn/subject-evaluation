<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Student;
use Faker\Generator as Faker;

$factory->define(Student::class, function (Faker $faker) {
    return [
        'student_id' => $faker->ean8,
        'first_name' => $faker->firstName,
        'middle_name' => $faker->lastName,
        'last_name' => $faker->lastName,
        'birth_date' => $faker->date(),
        'civil_status' => 'Single',
        'curriculum_id' => 1,
        'birth_place' => $faker->country,
        'address' => $faker->address,
        'contact_no' => $faker->e164PhoneNumber,
        'guardian' => $faker->name,
        'guardian_contact' => $faker->e164PhoneNumber,
        'sex' => "",
        'nationality' => "",
        'religion' => "",
        'course_id' => 1,
        'created_at' => now()->subDays(rand(1, 180))
    ];
});
