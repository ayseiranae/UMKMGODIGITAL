<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\Umkm;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'featuredProducts' => Product::with(['umkm', 'category'])
                ->active()
                ->featured()
                ->take(8)
                ->get(),
            'umkms' => Umkm::active()
                ->withCount(['products' => fn ($q) => $q->active()])
                ->latest()
                ->take(6)
                ->get(),
            'categories' => Category::active()
                ->ordered()
                ->withCount(['products' => fn ($q) => $q->active()])
                ->get(),
            'stats' => [
                'total_umkm' => Umkm::active()->count(),
                'total_products' => Product::active()->count(),
                'total_categories' => Category::active()->count(),
            ],
        ]);
    }
}
