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
            // Tambahkan produk di sini jika diperlukan
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
