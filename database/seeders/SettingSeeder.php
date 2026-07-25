<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $defaults = [
            'wa_daftar' => 'https://wa.me/6281234567890',
            'wa_desa' => 'https://wa.me/6281234567890',
            'email' => 'desa.birowo@gmail.com',
            'facebook' => 'https://facebook.com/desabirowo',
            'youtube' => 'https://youtube.com/desabirowo',
            'alamat' => 'Desa Birowo, Kec. Binangun, Kabupaten Blitar, Jawa Timur',
        ];

        foreach ($defaults as $key => $value) {
            Setting::setValue($key, $value);
        }
    }
}
