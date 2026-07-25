<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Storage;

class Umkm extends Model
{
    use HasFactory;

    protected $appends = ['photo_url'];

    protected $fillable = [
        'name',
        'slug',
        'owner_name',
        'description',
        'address',
        'maps_url',
        'phone',
        'whatsapp',
        'photo',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
        ];
    }

    /**
     * Get the photo URL.
     */
    public function getPhotoUrlAttribute(): ?string
    {
        if ($this->photo) {
            return Storage::url($this->photo);
        }
        return null;
    }

    /**
     * Get all products for this UMKM.
     */
    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }

    /**
     * Get all contact links for this UMKM.
     */
    public function contactLinks(): HasMany
    {
        return $this->hasMany(ContactLink::class);
    }

    /**
     * Scope to only active UMKMs.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Get active products count.
     */
    public function getActiveProductsCountAttribute(): int
    {
        return $this->products()->where('is_active', true)->count();
    }
}
