<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ContactLink extends Model
{
    use HasFactory;

    protected $appends = ['icon'];

    protected $fillable = [
        'umkm_id',
        'type',
        'label',
        'url',
        'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'sort_order' => 'integer',
        ];
    }

    /**
     * Platform type icons mapping.
     */
    public const TYPE_ICONS = [
        'whatsapp' => '📱',
        'instagram' => '📸',
        'facebook' => '👤',
        'shopee' => '🛒',
        'tokopedia' => '🏪',
        'bukalapak' => '🛍️',
        'tiktok' => '🎵',
        'gofood' => '🍽️',
        'grabfood' => '🛵',
        'website' => '🌐',
        'other' => '🔗',
    ];

    /**
     * Get the icon for this contact type.
     */
    public function getIconAttribute(): string
    {
        return self::TYPE_ICONS[$this->type] ?? '🔗';
    }

    /**
     * Get the UMKM that owns this contact link.
     */
    public function umkm(): BelongsTo
    {
        return $this->belongsTo(Umkm::class);
    }
}
