<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AcademicGradingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('academic_gradings')->insert([
            [
                'grade_points' => '1.00',
                'equivalence' => '98% - 100%',
                'description' => 'Excellent'
            ],
            [
                'grade_points' => '1.25',
                'equivalence' => '95% – 97%',
                'description' => 'Very Good'
            ],
            [
                'grade_points' => '1.50',
                'equivalence' => '92% - 94%',
                'description' => 'Very Good'
            ],
            [
                'grade_points' => '1.75',
                'equivalence' => '89% - 91%',
                'description' => 'Good'
            ],
            [
                'grade_points' => '2.00',
                'equivalence' => '86% - 88%',
                'description' => 'Good'
            ],
            [
                'grade_points' => '2.25',
                'equivalence' => '83% - 85%',
                'description' => 'Above Satisfactory'
            ],
            [
                'grade_points' => '2.50',
                'equivalence' => '80% - 82%',
                'description' => 'Satisfactory'
            ],
            [
                'grade_points' => '2.75',
                'equivalence' => '77% - 79%',
                'description' => 'Fair'
            ],
            [
                'grade_points' => '3.00',
                'equivalence' => '75% - 76%',
                'description' => 'Fair'
            ],
            [
                'grade_points' => 'INC',
                'equivalence' => '',
                'description' => 'Incomplete'
            ],
            [
                'grade_points' => '5.00',
                'equivalence' => 'Failure',
                'description' => 'Repeat/Failed'
            ],
            [
                'grade_points' => 'DRP',
                'equivalence' => '',
                'description' => 'Dropped'
            ],
            [
                'grade_points' => 'N/A',
                'equivalence' => '',
                'description' => 'No Attendance'
            ],
        ]);
    }
}
