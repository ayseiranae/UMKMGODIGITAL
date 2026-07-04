<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use App\Models\Umkm;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            'dapur-bu-sari' => [
                ['name' => 'Nasi Pecel Komplit', 'cat' => 'makanan', 'price' => 15000, 'desc' => 'Nasi pecel dengan lauk tempe goreng, rempeyek, telur dadar, dan sayuran segar.', 'feat' => true],
                ['name' => 'Rawon Daging Sapi', 'cat' => 'makanan', 'price' => 25000, 'desc' => 'Rawon daging sapi empuk dengan bumbu kluwek asli.', 'feat' => true],
                ['name' => 'Rujak Cingur', 'cat' => 'makanan', 'price' => 20000, 'desc' => 'Rujak cingur khas Jawa Timur dengan bumbu petis gurih.'],
                ['name' => 'Tahu Campur', 'cat' => 'makanan', 'price' => 18000, 'desc' => 'Tahu campur dengan kuah kaldu gurih, lontong, dan lento.'],
            ],
            'keripik-tempe-pak-joko' => [
                ['name' => 'Keripik Tempe Original 250gr', 'cat' => 'makanan', 'price' => 25000, 'desc' => 'Keripik tempe renyah rasa original tanpa penyedap buatan.', 'feat' => true],
                ['name' => 'Keripik Tempe Balado 250gr', 'cat' => 'makanan', 'price' => 28000, 'desc' => 'Keripik tempe bumbu balado pedas manis.'],
                ['name' => 'Keripik Tempe Keju 250gr', 'cat' => 'makanan', 'price' => 30000, 'desc' => 'Keripik tempe dengan bumbu keju creamy.'],
                ['name' => 'Paket Mix 4 Rasa', 'cat' => 'oleh-oleh', 'price' => 100000, 'desc' => 'Paket 4 rasa keripik tempe dalam box eksklusif.', 'feat' => true],
            ],
            'batik-birowo' => [
                ['name' => 'Batik Tulis Motif Lereng', 'cat' => 'fashion', 'price' => 350000, 'desc' => 'Kain batik tulis motif khas lereng Blitar.', 'feat' => true],
                ['name' => 'Batik Cap Motif Bunga', 'cat' => 'fashion', 'price' => 150000, 'desc' => 'Kain batik cap bermotif bunga warna cerah.'],
                ['name' => 'Kemeja Batik Pria', 'cat' => 'fashion', 'price' => 200000, 'desc' => 'Kemeja batik pria lengan panjang motif Birowo.'],
                ['name' => 'Syal Batik', 'cat' => 'kerajinan', 'price' => 85000, 'desc' => 'Syal batik tulis halus untuk aksesoris.'],
            ],
            'jamu-sehat-mbok-darmi' => [
                ['name' => 'Jamu Kunyit Asam', 'cat' => 'herbal-jamu', 'price' => 10000, 'desc' => 'Jamu kunyit asam segar untuk pencernaan.', 'feat' => true],
                ['name' => 'Jamu Beras Kencur', 'cat' => 'herbal-jamu', 'price' => 10000, 'desc' => 'Jamu beras kencur untuk menghilangkan pegal.'],
                ['name' => 'Jamu Temulawak', 'cat' => 'herbal-jamu', 'price' => 12000, 'desc' => 'Jamu temulawak untuk kesehatan liver.'],
            ],
            'anyaman-bambu-mas-bambang' => [
                ['name' => 'Keranjang Bambu Besar', 'cat' => 'kerajinan', 'price' => 75000, 'desc' => 'Keranjang bambu anyaman halus ukuran besar.', 'feat' => true],
                ['name' => 'Tampah Bambu', 'cat' => 'kerajinan', 'price' => 45000, 'desc' => 'Tampah bambu tradisional.'],
                ['name' => 'Lampu Hias Bambu', 'cat' => 'kerajinan', 'price' => 150000, 'desc' => 'Lampu hias anyaman bambu desain modern.'],
            ],
            'kue-basah-bu-endang' => [
                ['name' => 'Klepon (20 pcs)', 'cat' => 'makanan', 'price' => 20000, 'desc' => 'Klepon pandan isi gula merah dengan kelapa parut.', 'feat' => true],
                ['name' => 'Onde-onde Wijen (15 pcs)', 'cat' => 'makanan', 'price' => 25000, 'desc' => 'Onde-onde isi kacang hijau dengan wijen renyah.'],
                ['name' => 'Brownies Panggang', 'cat' => 'makanan', 'price' => 60000, 'desc' => 'Brownies panggang coklat premium fudgy.'],
            ],
            'toko-oleh-oleh-birowo' => [
                ['name' => 'Paket Oleh-oleh Lengkap', 'cat' => 'oleh-oleh', 'price' => 150000, 'desc' => 'Paket oleh-oleh berisi keripik, kopi, dan kerajinan.', 'feat' => true],
                ['name' => 'Gula Kelapa Aren', 'cat' => 'pertanian', 'price' => 35000, 'desc' => 'Gula kelapa aren asli Desa Birowo.'],
                ['name' => 'Madu Hutan Lokal', 'cat' => 'pertanian', 'price' => 85000, 'desc' => 'Madu hutan asli tanpa campuran.'],
            ],
            'kopi-lereng-birowo' => [
                ['name' => 'Kopi Robusta Bubuk 250gr', 'cat' => 'minuman', 'price' => 45000, 'desc' => 'Kopi robusta bubuk premium medium roast.', 'feat' => true],
                ['name' => 'Kopi Arabika Biji 250gr', 'cat' => 'minuman', 'price' => 65000, 'desc' => 'Kopi arabika single origin light roast.', 'feat' => true],
                ['name' => 'Kopi Drip Bag (10 pcs)', 'cat' => 'minuman', 'price' => 55000, 'desc' => 'Kopi drip bag siap seduh, isi 10 sachet.'],
            ],
        ];

        foreach ($products as $umkmSlug => $items) {
            $umkm = Umkm::where('slug', $umkmSlug)->first();
            if (!$umkm) continue;

            foreach ($items as $i => $item) {
                $cat = Category::where('slug', $item['cat'])->first();
                Product::updateOrCreate(
                    ['umkm_id' => $umkm->id, 'slug' => Str::slug($item['name'])],
                    [
                        'umkm_id' => $umkm->id,
                        'category_id' => $cat?->id,
                        'name' => $item['name'],
                        'slug' => Str::slug($item['name']),
                        'description' => $item['desc'],
                        'price' => $item['price'],
                        'price_label' => $item['price_label'] ?? null,
                        'is_featured' => $item['feat'] ?? false,
                        'sort_order' => $i,
                    ]
                );
            }
        }
    }
}
