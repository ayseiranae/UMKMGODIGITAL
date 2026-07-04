<?php

namespace App\Http\Controllers;

use App\Models\Umkm;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CatalogController extends Controller
{
    public function index(Request $request)
    {
        $query = Umkm::active()->withCount(['products' => fn ($q) => $q->active()]);

        if ($request->search) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', "%{$request->search}%")
                  ->orWhere('owner_name', 'like', "%{$request->search}%")
                  ->orWhere('description', 'like', "%{$request->search}%");
            });
        }

        $umkms = $query->latest()->paginate(12)->withQueryString();

        return Inertia::render('Catalog/UmkmIndex', [
            'umkms' => $umkms,
            'filters' => $request->only(['search']),
        ]);
    }

    public function show(string $slug)
    {
        $umkm = Umkm::where('slug', $slug)
            ->active()
            ->with(['products' => fn ($q) => $q->active()->ordered()->with('category'), 'contactLinks'])
            ->firstOrFail();

        return Inertia::render('Catalog/UmkmShow', [
            'umkm' => $umkm,
        ]);
    }
}
