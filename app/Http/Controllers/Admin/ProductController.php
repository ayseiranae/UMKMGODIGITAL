<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\Umkm;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::with(['umkm', 'category']);

        if ($request->search) {
            $query->where('name', 'like', "%{$request->search}%");
        }
        if ($request->umkm_id) {
            $query->where('umkm_id', $request->umkm_id);
        }
        if ($request->category_id) {
            $query->where('category_id', $request->category_id);
        }

        $products = $query->latest()->paginate(10)->withQueryString();

        return Inertia::render('Admin/Product/Index', [
            'products' => $products,
            'umkms' => Umkm::orderBy('name')->get(['id', 'name']),
            'categories' => Category::ordered()->get(['id', 'name']),
            'filters' => $request->only(['search', 'umkm_id', 'category_id']),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Product/Form', [
            'umkms' => Umkm::active()->orderBy('name')->get(['id', 'name']),
            'categories' => Category::active()->ordered()->get(['id', 'name']),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'umkm_id' => 'required|exists:umkms,id',
            'category_id' => 'nullable|exists:categories,id',
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'nullable|numeric|min:0',
            'price_label' => 'nullable|string|max:255',
            'image' => 'nullable|image|max:2048',
            'is_featured' => 'boolean',
            'is_active' => 'boolean',
        ]);

        $validated['slug'] = Str::slug($validated['name']);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('products', 'public');
        }

        Product::create($validated);

        return redirect()->route('admin.produk.index')
            ->with('success', 'Produk berhasil ditambahkan!');
    }

    public function edit(Product $produk)
    {
        $produk->load(['umkm', 'category']);

        return Inertia::render('Admin/Product/Form', [
            'product' => $produk,
            'umkms' => Umkm::active()->orderBy('name')->get(['id', 'name']),
            'categories' => Category::active()->ordered()->get(['id', 'name']),
        ]);
    }

    public function update(Request $request, Product $produk)
    {
        $validated = $request->validate([
            'umkm_id' => 'required|exists:umkms,id',
            'category_id' => 'nullable|exists:categories,id',
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'nullable|numeric|min:0',
            'price_label' => 'nullable|string|max:255',
            'image' => 'nullable|image|max:2048',
            'is_featured' => 'boolean',
            'is_active' => 'boolean',
        ]);

        $validated['slug'] = Str::slug($validated['name']);

        if ($request->hasFile('image')) {
            if ($produk->image) {
                Storage::disk('public')->delete($produk->image);
            }
            $validated['image'] = $request->file('image')->store('products', 'public');
        } else {
            unset($validated['image']);
        }

        $produk->update($validated);

        return redirect()->route('admin.produk.index')
            ->with('success', 'Produk berhasil diperbarui!');
    }

    public function destroy(Product $produk)
    {
        if ($produk->image) {
            Storage::disk('public')->delete($produk->image);
        }

        $produk->delete();

        return redirect()->route('admin.produk.index')
            ->with('success', 'Produk berhasil dihapus!');
    }
}
