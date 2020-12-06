<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::create([
            'name' => 'Mary Grace Verbo',
            'username' => 'mgverbo',
            'source_id' => 0,
            'email' => 'marygrace@example.com',
            'user_type' => 'Administrator',
            'password' => bcrypt('secret')
        ]);

        \App\User::create([
            'name' => 'Juan Dela Cruz',
            'username' => 'jcruz',
            'source_id' => 1,
            'user_type' => 'Standard User',
            'email' => 'juandcruz@example.com',
            'password' => bcrypt('secret')
        ]);
    }
}
