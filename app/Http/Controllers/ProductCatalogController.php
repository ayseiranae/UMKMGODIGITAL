<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductCatalogController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::with(['umkm', 'category'])->active();

        if ($request->search) {
            $query->where('name', 'like', "%{$request->search}%");
        }
        if ($request->category) {
            $query->whereHas('category', fn ($q) => $q->where('slug', $request->category));
        }

        $products = $query->ordered()->paginate(12)->withQueryString();
        $categories = Category::active()->ordered()->get();

        return Inertia::render('Catalog/ProductIndex', [
            'products' => $products,
            'categories' => $categories,
            'filters' => $request->only(['search', 'category']),
        ]);
    }

    public function show(string $umkmSlug, string $productSlug)
    {
        $product = Product::with(['umkm.contactLinks', 'category'])
            ->whereHas('umkm', fn ($q) => $q->where('slug', $umkmSlug))
            ->where('slug', $productSlug)
            ->active()
            ->firstOrFail();

        $relatedProducts = Product::with(['umkm'])
            ->where('id', '!=', $product->id)
            ->where('category_id', $product->category_id)
            ->active()
            ->take(4)
            ->get();

        return Inertia::render('Catalog/ProductShow', [
            'product' => $product,
            'relatedProducts' => $relatedProducts,
        ]);
    }
}
