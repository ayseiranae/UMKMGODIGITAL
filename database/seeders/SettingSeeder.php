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
            'email' => 'pemdesbirowo.66193@gmail.com',
            'facebook' => 'https://www.facebook.com/share/1EBWN1q8DG/',
            'youtube' => 'https://youtube.com/@desabirowo9677?si=XI5XPDJbIwwynpn9',
            'alamat' => 'Desa Birowo, Kec. Binangun, Kabupaten Blitar, Jawa Timur',
        ];

        foreach ($defaults as $key => $value) {
            Setting::setValue($key, $value);
        }
    }
}
