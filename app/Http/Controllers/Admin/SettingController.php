<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{
    /**
     * Show the form for editing the village settings.
     */
    public function edit()
    {
        return Inertia::render('Admin/Setting/Edit', [
            'settings' => Setting::getAllSettings(),
        ]);
    }

    /**
     * Update the village settings.
     */
    public function update(Request $request)
    {
        $validated = $request->validate([
            'wa_daftar' => 'nullable|string',
            'wa_desa' => 'nullable|string',
            'email' => 'nullable|string',
            'facebook' => 'nullable|string',
            'youtube' => 'nullable|string',
            'alamat' => 'nullable|string',
        ]);

        foreach ($validated as $key => $value) {
            Setting::setValue($key, $value);
        }

        return redirect()->back()->with('success', 'Pengaturan berhasil diperbarui!');
    }
}
