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
            ['email' => 'admin@birowo.desa.id'],
            [
                'name' => 'Admin Desa Birowo',
                'password' => bcrypt('admin123'),
                'role' => 'superadmin',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'perangkat@birowo.desa.id'],
            [
                'name' => 'Perangkat Desa',
                'password' => bcrypt('perangkat123'),
                'role' => 'admin',
                'email_verified_at' => now(),
            ]
        );
    }
}
