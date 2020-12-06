<?php

use Illuminate\Database\Seeder;

class SectionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Section::create([
            'course_id' => 1,
            'section_name' => 'BSIT-1A',
            'created_at' => now(),
        ]);

        \App\Section::create([
            'course_id' => 1,
            'section_name' => 'BSIT-1B',
            'created_at' => now(),
        ]);

        \App\Section::create([
            'course_id' => 1,
            'section_name' => 'BSIT-1C',
            'created_at' => now(),
        ]);

        \App\Section::create([
            'course_id' => 1,
            'section_name' => 'BSIT-1D',
            'created_at' => now(),
        ]);

        \App\Section::create([
            'course_id' => 1,
            'section_name' => 'BSIT-2A',
            'created_at' => now(),
        ]);

        \App\Section::create([
            'course_id' => 1,
            'section_name' => 'BSIT-2B',
            'created_at' => now(),
        ]);

        \App\Section::create([
            'course_id' => 1,
            'section_name' => 'BSIT-2C',
            'created_at' => now(),
        ]);

        \App\Section::create([
            'course_id' => 1,
            'section_name' => 'BSIT-3A',
            'created_at' => now(),
        ]);

        \App\Section::create([
            'course_id' => 1,
            'section_name' => 'BSIT-3B',
            'created_at' => now(),
        ]);

        \App\Section::create([
            'course_id' => 1,
            'section_name' => 'BSIT-4A',
            'created_at' => now(),
        ]);

        \App\Section::create([
            'course_id' => 1,
            'section_name' => 'BSIT-4B',
            'created_at' => now(),
        ]);
    }
}
