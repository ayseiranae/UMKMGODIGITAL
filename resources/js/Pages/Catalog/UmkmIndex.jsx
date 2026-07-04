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
                background: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)',
                padding: '50px 24px 60px',
                color: '#fff',
                textAlign: 'center',
            }}>
                <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Daftar UMKM</h1>
                <p style={{ fontSize: 15, color: '#8892b0', marginBottom: 28 }}>
                    Temukan pelaku usaha unggulan dari Desa Birowo
                </p>
                <form onSubmit={handleSearch} style={{
                    maxWidth: 500, margin: '0 auto',
                    display: 'flex', gap: 8,
                }}>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Cari UMKM..."
                        style={{
                            flex: 1, padding: '12px 20px',
                            borderRadius: 10, border: '1px solid rgba(255,255,255,0.2)',
                            background: 'rgba(255,255,255,0.1)',
                            color: '#fff', fontSize: 14,
                            outline: 'none',
                        }}
                    />
                    <button type="submit" style={{
                        background: '#e94560', color: '#fff',
                        padding: '12px 24px', borderRadius: 10,
                        border: 'none', fontWeight: 700, fontSize: 14,
                        cursor: 'pointer',
                    }}>
                        🔍 Cari
                    </button>
                </form>
            </section>

            {/* UMKM Grid */}
            <section style={{ background: '#fafbff', padding: '40px 24px 60px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    {umkms.data.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '60px 0', color: '#888' }}>
                            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
                            <p style={{ fontSize: 16 }}>Tidak ditemukan UMKM yang sesuai.</p>
                        </div>
                    ) : (
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                            gap: 20,
                        }}>
                            {umkms.data.map((umkm) => (
                                <Link key={umkm.id} href={`/umkm/${umkm.slug}`} style={{
                                    textDecoration: 'none',
                                    background: '#fff',
                                    borderRadius: 16,
                                    overflow: 'hidden',
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                                    border: '1px solid rgba(0,0,0,0.06)',
                                }}>
                                    <div style={{
                                        background: 'linear-gradient(135deg, #1a1a2e, #0f3460)',
                                        padding: '24px', color: '#fff',
                                    }}>
                                        <div style={{ fontSize: 36, marginBottom: 12 }}>🏪</div>
                                        <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{umkm.name}</h3>
                                        <p style={{ fontSize: 13, color: '#8892b0' }}>👤 {umkm.owner_name}</p>
                                    </div>
                                    <div style={{ padding: '16px 24px' }}>
                                        <p style={{
                                            fontSize: 13, color: '#555', lineHeight: 1.6,
                                            display: '-webkit-box', WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical', overflow: 'hidden',
                                            marginBottom: 8,
                                        }}>
                                            {umkm.description}
                                        </p>
                                        <div style={{ fontSize: 12, color: '#888', marginBottom: 8 }}>
                                            📍 {umkm.address}
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{
                                                fontSize: 12, color: '#888',
                                                background: '#f0f4ff', padding: '4px 12px',
                                                borderRadius: 20, fontWeight: 600,
                                            }}>
                                                📦 {umkm.products_count} produk
                                            </span>
                                            <span style={{ color: '#e94560', fontSize: 13, fontWeight: 700 }}>
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
                                        background: link.active ? '#e94560' : '#fff',
                                        color: link.active ? '#fff' : '#333',
                                        textDecoration: 'none',
                                        fontSize: 14,
                                        fontWeight: link.active ? 700 : 400,
                                        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
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
        </PublicLayout>
    );
}
