<?php

namespace Database\Seeders;

use App\Models\Umkm;
use App\Models\ContactLink;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UmkmSeeder extends Seeder
{

    public function run(): void
    {
        $umkms = [
            // Tambahkan UMKM di sini jika diperlukan
        ];

        foreach ($umkms as $data) {
            $contacts = $data['contacts'];
            unset($data['contacts']);

            $data['slug'] = Str::slug($data['name']);

            $umkm = Umkm::updateOrCreate(
                ['slug' => $data['slug']],
                $data
            );

            // Seed contact links
            foreach ($contacts as $index => $contact) {
                $contact['sort_order'] = $index;
                $umkm->contactLinks()->updateOrCreate(
                    ['type' => $contact['type'], 'url' => $contact['url']],
                    $contact
                );
            }
        }
    }
}
