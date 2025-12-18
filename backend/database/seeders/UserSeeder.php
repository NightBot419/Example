<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Path to the JSON file in the frontend project
        $jsonPath = base_path('../frontend-app/assets/data/users.json');

        if (!File::exists($jsonPath)) {
            $this->command->error("users.json not found at path: " . $jsonPath);
            return;
        }

        $json = File::get($jsonPath);
        $users = json_decode($json);

        if ($users) {
            foreach ($users as $userData) {
                User::create([
                    'first_name' => $userData->first_name,
                    'last_name' => $userData->last_name,
                    'email' => $userData->email,
                    'password' => Hash::make($userData->password), // Hash the password
                    'address' => $userData->address ?? null,
                    'phone_number' => $userData->phone_number ?? null,
                    'avatar' => $userData->avatar ?? null,
                ]);
            }
        }

        // You can still create additional random users with the factory if you want
        // \App\Models\User::factory(5)->create();
    }
}