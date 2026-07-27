<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Seed admin users.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'pemdesbirowo.66193@gmail.com'],
            [
                'name' => 'Admin Desa Birowo',
                'password' => bcrypt('admin123'),
                'role' => 'superadmin',
                'email_verified_at' => now(),
            ]
        );
    }
}
    