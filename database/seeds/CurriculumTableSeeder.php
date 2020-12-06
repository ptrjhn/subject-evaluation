<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CurriculumTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Curriculum::insert([
            'course_id' => 1,
            'curriculum_year' => '2018 - 2019'
        ]);

        \App\Curriculum::insert([
            'course_id' => 1,
            'curriculum_year' => '2014 - 2015'
        ]);
    }
}
