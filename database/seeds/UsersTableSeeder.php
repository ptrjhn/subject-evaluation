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
            'email' => 'marygrace@example.com',
            'user_type' => 'Super Admin',
            'password' => bcrypt('secret')
        ]);

        \App\User::create([
            'name' => 'Juan Dela Cruz',
            'username' => 'jcruz',
            'user_type' => 'Admin',
            'email' => 'juandcruz@example.com',
            'password' => bcrypt('secret')
        ]);
    }
}
