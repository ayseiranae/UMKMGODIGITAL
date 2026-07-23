import { Head, Link, router } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { useState } from 'react';

export default function UmkmIndex({ umkms, filters }) {
    const [search, setSearch] = useState(filters.search || '');

    const handleSearch = (e) => {
        e.preventDefault();
        router.get('/umkm', { search }, { preserveState: true });
    };

    return (
        <PublicLayout>
            <Head title="Daftar UMKM — Desa Birowo" />

            {/* Header */}
            <section style={{
                background: 'linear-gradient(135deg, #22577a 0%, #38a3a5 100%)',
                padding: '50px 24px 60px',
                color: '#fff',
                textAlign: 'center',
            }}>
                <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Daftar UMKM</h1>
                <p style={{ fontSize: 15, color: '#e0f2fe', marginBottom: 28 }}>
                    Temukan pelaku usaha unggulan dari Desa Birowo
                </p>
                <form onSubmit={handleSearch} style={{
                    maxWidth: 540, margin: '0 auto',
                    display: 'flex', gap: 10,
                }}>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Cari UMKM..."
                        style={{
                            flex: 1, padding: '14px 20px',
                            borderRadius: 12, border: '2px solid rgba(255,255,255,0.8)',
                            background: '#ffffff',
                            color: '#0f172a', fontSize: 14,
                            outline: 'none',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                        }}
                    />
                    <button type="submit" style={{
                        background: 'linear-gradient(135deg, #57cc99, #38a3a5)',
                        color: '#ffffff',
                        padding: '14px 28px', borderRadius: 12,
                        border: 'none', fontWeight: 700, fontSize: 14,
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(87,204,153,0.4)',
                    }}>
                        Cari
                    </button>
                </form>
            </section>

            {/* UMKM Grid */}
            <section className="catalog-section-mobile" style={{ background: '#f4fbf7', padding: '40px 24px 60px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    {umkms.data.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '60px 0', color: '#64748b' }}>
                            <p style={{ fontSize: 16 }}>Tidak ditemukan UMKM yang sesuai.</p>
                        </div>
                    ) : (
                        <div className="umkm-grid-mobile" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                            gap: 20,
                        }}>
                            {umkms.data.map((umkm) => (
                                <Link key={umkm.id} href={`/umkm/${umkm.slug}`} className="umkm-card-item" style={{
                                    textDecoration: 'none',
                                    background: '#fff',
                                    borderRadius: 16,
                                    overflow: 'hidden',
                                    boxShadow: '0 2px 12px rgba(30,58,138,0.08)',
                                    border: '1px solid #e2e8f0',
                                }}>
                                    <div className="umkm-card-photo-box" style={{
                                        position: 'relative',
                                        height: 120,
                                        background: 'linear-gradient(135deg, #22577a 0%, #38a3a5 100%)',
                                        overflow: 'hidden',
                                    }}>
                                        {umkm.photo_url ? (
                                            <img src={umkm.photo_url} alt={umkm.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        ) : null}
                                        <div className="umkm-card-header" style={{
                                            position: umkm.photo_url ? 'absolute' : 'relative',
                                            bottom: 0, left: 0, right: 0, top: umkm.photo_url ? 'auto' : 0,
                                            background: umkm.photo_url ? 'linear-gradient(to top, rgba(15,23,42,0.85), transparent)' : 'transparent',
                                            padding: '16px', color: '#fff',
                                        }}>
                                            <h3 className="umkm-card-title" style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{umkm.name}</h3>
                                            <p className="umkm-card-owner" style={{ fontSize: 13, color: '#80ed99' }}>{umkm.owner_name}</p>
                                        </div>
                                    </div>
                                    <div className="umkm-card-body" style={{ padding: '16px 24px' }}>
                                        <p className="umkm-card-desc" style={{
                                            fontSize: 13, color: '#475569', lineHeight: 1.6,
                                            display: '-webkit-box', WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical', overflow: 'hidden',
                                            marginBottom: 8,
                                        }}>
                                            {umkm.description}
                                        </p>
                                        <div className="umkm-card-address" style={{ fontSize: 12, color: '#64748b', marginBottom: 8 }}>
                                            {umkm.address}
                                        </div>
                                        <div className="umkm-card-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span className="umkm-card-badge" style={{
                                                fontSize: 12, color: '#22577a',
                                                background: '#80ed99', padding: '4px 12px',
                                                borderRadius: 20, fontWeight: 600,
                                            }}>
                                                {umkm.products_count} produk
                                            </span>
                                            <span className="umkm-card-link" style={{ color: '#22577a', fontSize: 13, fontWeight: 700 }}>
                                                Lihat Detail →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    {umkms.last_page > 1 && (
                        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}>
                            {umkms.links.map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.url || '#'}
                                    style={{
                                        padding: '8px 16px',
                                        borderRadius: 8,
                                        background: link.active ? '#38a3a5' : '#fff',
                                        color: link.active ? '#fff' : '#0f172a',
                                        textDecoration: 'none',
                                        fontSize: 14,
                                        fontWeight: link.active ? 700 : 400,
                                        boxShadow: '0 1px 4px rgba(30,58,138,0.1)',
                                        pointerEvents: link.url ? 'auto' : 'none',
                                        opacity: link.url ? 1 : 0.5,
                                    }}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <style>{`
                @media (max-width: 768px) {
                    .catalog-section-mobile {
                        padding: 24px 8px 40px !important;
                    }
                    .umkm-grid-mobile {
                        display: grid !important;
                        grid-template-columns: repeat(3, 1fr) !important;
                        gap: 6px !important;
                    }
                    .umkm-card-item {
                        border-radius: 8px !important;
                        overflow: hidden !important;
                    }
                    .umkm-card-photo-box {
                        height: 75px !important;
                    }
                    .umkm-card-header {
                        padding: 6px 4px !important;
                    }
                    .umkm-card-title {
                        font-size: 10px !important;
                        line-height: 1.2 !important;
                        font-weight: 800 !important;
                        margin-bottom: 2px !important;
                        display: -webkit-box !important;
                        -webkit-line-clamp: 2 !important;
                        -webkit-box-orient: vertical !important;
                        overflow: hidden !important;
                    }
                    .umkm-card-owner {
                        font-size: 8px !important;
                        white-space: nowrap !important;
                        overflow: hidden !important;
                        text-overflow: ellipsis !important;
                    }
                    .umkm-card-body {
                        padding: 6px 4px !important;
                    }
                    .umkm-card-desc, .umkm-card-address {
                        display: none !important;
                    }
                    .umkm-card-footer {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 2px !important;
                    }
                    .umkm-card-badge {
                        font-size: 8px !important;
                        padding: 2px 4px !important;
                    }
                    .umkm-card-link {
                        font-size: 8px !important;
                    }
                }
            `}</style>
        </PublicLayout>
    );
}
