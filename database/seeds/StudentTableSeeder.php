<?php

use Illuminate\Database\Seeder;

class StudentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Student::create([
            'id' => 1,
            'first_name' => 'Mary Grace',
            'middle_name' => '',
            'last_name' => 'Verbo',
            'student_id' => '17-10001',
            'birth_date' => '',
            'curriculum_id' => 1,
            'civil_status' => 'Single',
            'birth_place' => '',
            'address' => '',
            'contact_no' => '',
            'guardian' => '',
            'guardian_contact' => '',
            'sex' => "",
            'nationality' => "",
            'religion' => "",
            'course_id' => 1,
            'created_at' => now()->subDays(rand(1, 180))
        ]);

        factory(App\Student::class, 249)->create();
    }
}
