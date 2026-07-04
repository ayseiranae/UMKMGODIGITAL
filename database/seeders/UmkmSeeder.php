<?php

namespace Database\Seeders;

use App\Models\Umkm;
use App\Models\ContactLink;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UmkmSeeder extends Seeder
{
    /**
     * Seed dummy UMKM data for Desa Birowo.
     */
    public function run(): void
    {
        $umkms = [
            [
                'name' => 'Dapur Bu Sari',
                'owner_name' => 'Ibu Sari Wulandari',
                'description' => 'Usaha kuliner rumahan yang menyajikan aneka masakan khas Jawa Timur. Terkenal dengan pecel, rawon, dan aneka lauk pauk tradisional yang diolah dari resep turun-temurun. Buka setiap hari dari pagi hingga sore.',
                'address' => 'Jl. Raya Birowo RT 01/RW 02, Desa Birowo, Kec. Binangun, Kab. Blitar',
                'phone' => '081234567890',
                'whatsapp' => '6281234567890',
                'contacts' => [
                    ['type' => 'whatsapp', 'label' => 'WhatsApp Bu Sari', 'url' => 'https://wa.me/6281234567890'],
                    ['type' => 'instagram', 'label' => '@dapurbusari', 'url' => 'https://instagram.com/dapurbusari'],
                    ['type' => 'grabfood', 'label' => 'GrabFood', 'url' => 'https://grabfood.com/dapurbusari'],
                ],
            ],
            [
                'name' => 'Keripik Tempe Pak Joko',
                'owner_name' => 'Bapak Joko Susanto',
                'description' => 'Produsen keripik tempe renyah dengan berbagai varian rasa: original, balado, keju, dan BBQ. Menggunakan tempe pilihan dari produsen lokal Desa Birowo. Tersedia dalam kemasan 100gr dan 250gr.',
                'address' => 'Dusun Krajan RT 03/RW 01, Desa Birowo, Kec. Binangun, Kab. Blitar',
                'phone' => '082345678901',
                'whatsapp' => '6282345678901',
                'contacts' => [
                    ['type' => 'whatsapp', 'label' => 'WhatsApp Pak Joko', 'url' => 'https://wa.me/6282345678901'],
                    ['type' => 'shopee', 'label' => 'Shopee', 'url' => 'https://shopee.co.id/keripiktempejoko'],
                    ['type' => 'tokopedia', 'label' => 'Tokopedia', 'url' => 'https://tokopedia.com/keripiktempejoko'],
                ],
            ],
            [
                'name' => 'Batik Birowo',
                'owner_name' => 'Ibu Ratna Dewi',
                'description' => 'Pengrajin batik tulis dan batik cap dengan motif khas Blitar. Menerima pesanan batik custom untuk seragam, souvenir, dan kebutuhan acara. Juga menyediakan kursus membatik untuk wisatawan dan pelajar.',
                'address' => 'Jl. Melati No. 5, Desa Birowo, Kec. Binangun, Kab. Blitar',
                'phone' => '083456789012',
                'whatsapp' => '6283456789012',
                'contacts' => [
                    ['type' => 'whatsapp', 'label' => 'WhatsApp Bu Ratna', 'url' => 'https://wa.me/6283456789012'],
                    ['type' => 'instagram', 'label' => '@batikbirowo', 'url' => 'https://instagram.com/batikbirowo'],
                    ['type' => 'facebook', 'label' => 'Facebook Batik Birowo', 'url' => 'https://facebook.com/batikbirowo'],
                    ['type' => 'shopee', 'label' => 'Shopee', 'url' => 'https://shopee.co.id/batikbirowo'],
                ],
            ],
            [
                'name' => 'Jamu Sehat Mbok Darmi',
                'owner_name' => 'Ibu Darmi',
                'description' => 'Produsen jamu tradisional racikan sendiri. Menyediakan jamu kunyit asam, beras kencur, temulawak, dan jamu khusus untuk kesehatan. Semua bahan diambil langsung dari kebun sendiri tanpa bahan pengawet.',
                'address' => 'Dusun Sumber RT 02/RW 03, Desa Birowo, Kec. Binangun, Kab. Blitar',
                'phone' => '084567890123',
                'whatsapp' => '6284567890123',
                'contacts' => [
                    ['type' => 'whatsapp', 'label' => 'WhatsApp Mbok Darmi', 'url' => 'https://wa.me/6284567890123'],
                    ['type' => 'gofood', 'label' => 'GoFood', 'url' => 'https://gofood.co.id/jamusehatmbok'],
                ],
            ],
            [
                'name' => 'Anyaman Bambu Mas Bambang',
                'owner_name' => 'Bapak Bambang Sutrisno',
                'description' => 'Pengrajin anyaman bambu berkualitas. Produk meliputi keranjang, tampah, besek, dan berbagai peralatan rumah tangga dari bambu. Juga menerima pesanan custom untuk dekorasi interior dan souvenir.',
                'address' => 'Dusun Kedung RT 04/RW 02, Desa Birowo, Kec. Binangun, Kab. Blitar',
                'phone' => '085678901234',
                'whatsapp' => '6285678901234',
                'contacts' => [
                    ['type' => 'whatsapp', 'label' => 'WhatsApp Mas Bambang', 'url' => 'https://wa.me/6285678901234'],
                    ['type' => 'tokopedia', 'label' => 'Tokopedia', 'url' => 'https://tokopedia.com/anyamanbambubirowo'],
                ],
            ],
            [
                'name' => 'Kue Basah Bu Endang',
                'owner_name' => 'Ibu Endang Susilowati',
                'description' => 'Spesialis kue basah tradisional dan modern. Menyediakan onde-onde, klepon, kue lapis, brownies, dan bolu untuk berbagai acara. Menerima pesanan untuk hajatan, arisan, dan acara kantor.',
                'address' => 'Jl. Kenanga RT 01/RW 04, Desa Birowo, Kec. Binangun, Kab. Blitar',
                'phone' => '086789012345',
                'whatsapp' => '6286789012345',
                'contacts' => [
                    ['type' => 'whatsapp', 'label' => 'WhatsApp Bu Endang', 'url' => 'https://wa.me/6286789012345'],
                    ['type' => 'instagram', 'label' => '@kuebuendang', 'url' => 'https://instagram.com/kuebuendang'],
                ],
            ],
            [
                'name' => 'Toko Oleh-oleh Birowo',
                'owner_name' => 'Bapak Hadi Purnomo',
                'description' => 'Pusat oleh-oleh khas Desa Birowo dan Kabupaten Blitar. Menjual berbagai produk lokal dalam satu tempat, mulai dari makanan ringan, kerajinan, hingga souvenir. Cocok untuk wisatawan dan tamu yang berkunjung.',
                'address' => 'Jl. Raya Birowo No. 10, Desa Birowo, Kec. Binangun, Kab. Blitar',
                'phone' => '087890123456',
                'whatsapp' => '6287890123456',
                'contacts' => [
                    ['type' => 'whatsapp', 'label' => 'WhatsApp Pak Hadi', 'url' => 'https://wa.me/6287890123456'],
                    ['type' => 'instagram', 'label' => '@oleholehbirowo', 'url' => 'https://instagram.com/oleholehbirowo'],
                    ['type' => 'shopee', 'label' => 'Shopee', 'url' => 'https://shopee.co.id/oleholehbirowo'],
                    ['type' => 'tokopedia', 'label' => 'Tokopedia', 'url' => 'https://tokopedia.com/oleholehbirowo'],
                ],
            ],
            [
                'name' => 'Kopi Lereng Birowo',
                'owner_name' => 'Mas Andi Prasetyo',
                'description' => 'Produsen kopi lokal dari kebun kopi di lereng sekitar Desa Birowo. Menyediakan kopi arabika dan robusta dalam bentuk biji sangrai dan bubuk. Proses roasting dilakukan sendiri untuk menjamin kualitas dan kesegaran.',
                'address' => 'Dusun Watu RT 05/RW 01, Desa Birowo, Kec. Binangun, Kab. Blitar',
                'phone' => '088901234567',
                'whatsapp' => '6288901234567',
                'contacts' => [
                    ['type' => 'whatsapp', 'label' => 'WhatsApp Mas Andi', 'url' => 'https://wa.me/6288901234567'],
                    ['type' => 'instagram', 'label' => '@kopibirowo', 'url' => 'https://instagram.com/kopibirowo'],
                    ['type' => 'tiktok', 'label' => 'TikTok', 'url' => 'https://tiktok.com/@kopibirowo'],
                    ['type' => 'shopee', 'label' => 'Shopee', 'url' => 'https://shopee.co.id/kopibirowo'],
                ],
            ],
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
