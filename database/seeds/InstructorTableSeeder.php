<?php

use Illuminate\Database\Seeder;

class InstructorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Instructor::create([
            'id' => 1,
            'first_name' => 'Roman Alex',
            'middle_name' => '',
            'last_name' => 'Lustro',
            'is_active' => true,
            'created_at' => now()->subDays(rand(1, 180))
        ]);

        factory(App\Instructor::class, 49)->create();
    }
}
