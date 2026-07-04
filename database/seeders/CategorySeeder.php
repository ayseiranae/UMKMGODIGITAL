<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Seed the categories table.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Makanan', 'slug' => 'makanan', 'icon' => '🍜', 'description' => 'Aneka makanan khas dan olahan rumahan', 'sort_order' => 1],
            ['name' => 'Minuman', 'slug' => 'minuman', 'icon' => '🥤', 'description' => 'Minuman segar dan minuman tradisional', 'sort_order' => 2],
            ['name' => 'Kerajinan', 'slug' => 'kerajinan', 'icon' => '🎨', 'description' => 'Kerajinan tangan dan produk kreatif', 'sort_order' => 3],
            ['name' => 'Fashion', 'slug' => 'fashion', 'icon' => '👗', 'description' => 'Pakaian, aksesoris, dan fashion lokal', 'sort_order' => 4],
            ['name' => 'Herbal & Jamu', 'slug' => 'herbal-jamu', 'icon' => '🌿', 'description' => 'Produk herbal dan jamu tradisional', 'sort_order' => 5],
            ['name' => 'Pertanian', 'slug' => 'pertanian', 'icon' => '🌾', 'description' => 'Hasil pertanian dan perkebunan', 'sort_order' => 6],
            ['name' => 'Oleh-oleh', 'slug' => 'oleh-oleh', 'icon' => '🎁', 'description' => 'Oleh-oleh khas Desa Birowo', 'sort_order' => 7],
        ];

        foreach ($categories as $category) {
            Category::updateOrCreate(
                ['slug' => $category['slug']],
                $category
            );
        }
    }
}
