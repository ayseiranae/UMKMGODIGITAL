<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactLink;
use App\Models\Umkm;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UmkmController extends Controller
{
    public function index(Request $request)
    {
        $query = Umkm::withCount('products');

        if ($request->search) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', "%{$request->search}%")
                  ->orWhere('owner_name', 'like', "%{$request->search}%");
            });
        }

        if ($request->has('status')) {
            $query->where('is_active', $request->status === 'active');
        }

        $umkms = $query->latest()->paginate(10)->withQueryString();

        return Inertia::render('Admin/Umkm/Index', [
            'umkms' => $umkms,
            'filters' => $request->only(['search', 'status']),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Umkm/Form', [
            'contactTypes' => ContactLink::TYPE_ICONS,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'owner_name' => 'required|string|max:255',
            'description' => 'required|string',
            'address' => 'required|string|max:255',
            'maps_url' => 'nullable|url|max:1000',
            'phone' => 'nullable|string|max:20',
            'whatsapp' => 'nullable|string|max:20',
            'photo' => 'nullable|image|max:2048',
            'is_active' => 'boolean',
            'contact_links' => 'nullable|array',
            'contact_links.*.type' => 'required|string',
            'contact_links.*.label' => 'required|string|max:255',
            'contact_links.*.url' => 'required|url|max:255',
        ]);

        $validated['slug'] = Str::slug($validated['name']);

        if ($request->hasFile('photo')) {
            $validated['photo'] = $request->file('photo')->store('umkm', 'public');
        }

        $contactLinks = $validated['contact_links'] ?? [];
        unset($validated['contact_links']);

        $umkm = Umkm::create($validated);

        foreach ($contactLinks as $i => $link) {
            $umkm->contactLinks()->create(array_merge($link, ['sort_order' => $i]));
        }

        return redirect()->route('admin.umkm.index')
            ->with('success', 'UMKM berhasil ditambahkan!');
    }

    public function edit(Umkm $umkm)
    {
        $umkm->load('contactLinks');

        return Inertia::render('Admin/Umkm/Form', [
            'umkm' => $umkm,
            'contactTypes' => ContactLink::TYPE_ICONS,
        ]);
    }

    public function update(Request $request, Umkm $umkm)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'owner_name' => 'required|string|max:255',
            'description' => 'required|string',
            'address' => 'required|string|max:255',
            'maps_url' => 'nullable|url|max:1000',
            'phone' => 'nullable|string|max:20',
            'whatsapp' => 'nullable|string|max:20',
            'photo' => 'nullable|image|max:2048',
            'is_active' => 'boolean',
            'contact_links' => 'nullable|array',
            'contact_links.*.type' => 'required|string',
            'contact_links.*.label' => 'required|string|max:255',
            'contact_links.*.url' => 'required|url|max:255',
        ]);

        $validated['slug'] = Str::slug($validated['name']);

        if ($request->hasFile('photo')) {
            if ($umkm->photo) {
                Storage::disk('public')->delete($umkm->photo);
            }
            $validated['photo'] = $request->file('photo')->store('umkm', 'public');
        } else {
            unset($validated['photo']);
        }

        $contactLinks = $validated['contact_links'] ?? [];
        unset($validated['contact_links']);

        $umkm->update($validated);

        // Sync contact links
        $umkm->contactLinks()->delete();
        foreach ($contactLinks as $i => $link) {
            $umkm->contactLinks()->create(array_merge($link, ['sort_order' => $i]));
        }

        return redirect()->route('admin.umkm.index')
            ->with('success', 'UMKM berhasil diperbarui!');
    }

    public function destroy(Umkm $umkm)
    {
        if ($umkm->photo) {
            Storage::disk('public')->delete($umkm->photo);
        }

        $umkm->delete();

        return redirect()->route('admin.umkm.index')
            ->with('success', 'UMKM berhasil dihapus!');
    }
}
