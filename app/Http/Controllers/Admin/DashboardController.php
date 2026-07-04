<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\Umkm;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'total_umkm' => Umkm::count(),
                'active_umkm' => Umkm::active()->count(),
                'total_products' => Product::count(),
                'active_products' => Product::active()->count(),
                'total_categories' => Category::count(),
                'featured_products' => Product::featured()->count(),
            ],
            'recent_umkms' => Umkm::latest()->take(5)->get(),
            'recent_products' => Product::with('umkm', 'category')->latest()->take(5)->get(),
        ]);
    }
}
