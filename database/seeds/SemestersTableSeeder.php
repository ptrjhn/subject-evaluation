<?php

use Illuminate\Database\Seeder;

class SemestersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Semester::create([
            'id' => 1,
            'semester' => 'First',
            'description' => 'from january to may of every academic year',
            'is_active' => true,

        ]);

        \App\Semester::create([
            'id' => 2,
            'semester' => 'Second',
            'description' => 'from august to december of every academic year',
            'is_active' => false,
        ]);

        \App\Semester::create([
            'id' => 3,
            'semester' => 'Summer',
            'description' => 'from june to july of every academic year',
            'is_active' => false,
        ]);
    }
}
