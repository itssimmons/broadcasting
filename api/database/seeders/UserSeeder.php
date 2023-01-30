<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Broadcaster',
            'email' => 'broadcaster@localhost.io',
            'password' => Hash::make('1234'),
            'phone' => '11 1234 1234',
            'createdAt' => Carbon::now(),
            'updatedAt' => Carbon::now()
        ]);

        User::create([
            'name' => 'John',
            'lastName' => 'Doe',
            'email' => 'johndoe@localhost.io',
            'password' => Hash::make('4321'),
            'phone' => '11 4321 4321',
            'createdAt' => Carbon::now(),
            'updatedAt' => Carbon::now()
        ]);
    }
}
