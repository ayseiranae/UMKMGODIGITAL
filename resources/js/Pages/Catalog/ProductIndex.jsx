import { Head, Link, router } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { useState } from 'react';

export default function ProductIndex({ products, categories, filters }) {
    const [search, setSearch] = useState(filters.search || '');

    const handleSearch = (e) => {
        e.preventDefault();
        router.get('/produk', { search, category: filters.category }, { preserveState: true });
    };

    const setCategory = (slug) => {
        router.get('/produk', { search: filters.search, category: slug === filters.category ? '' : slug }, { preserveState: true });
    };

    return (
        <PublicLayout>
            <Head title="Katalog Produk — Desa Birowo" />

            <section style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)',
                padding: '50px 24px 60px',
                color: '#fff',
                textAlign: 'center',
            }}>
                <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Katalog Produk</h1>
                <p style={{ fontSize: 15, color: '#8892b0', marginBottom: 28 }}>
                    Jelajahi produk unggulan dari UMKM Desa Birowo
                </p>
                <form onSubmit={handleSearch} style={{
                    maxWidth: 500, margin: '0 auto', display: 'flex', gap: 8,
                }}>
                    <input
                        type="text" value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Cari produk..."
                        style={{
                            flex: 1, padding: '12px 20px', borderRadius: 10,
                            border: '1px solid rgba(255,255,255,0.2)',
                            background: 'rgba(255,255,255,0.1)',
                            color: '#fff', fontSize: 14, outline: 'none',
                        }}
                    />
                    <button type="submit" style={{
                        background: '#e94560', color: '#fff',
                        padding: '12px 24px', borderRadius: 10,
                        border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer',
                    }}>
                        🔍
                    </button>
                </form>
            </section>

            <section style={{ background: '#fafbff', padding: '40px 24px 60px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    {/* Category Filter */}
                    <div style={{
                        display: 'flex', gap: 8, flexWrap: 'wrap',
                        justifyContent: 'center', marginBottom: 32,
                    }}>
                        {categories.map((cat) => (
                            <button key={cat.id} onClick={() => setCategory(cat.slug)} style={{
                                background: filters.category === cat.slug ? '#e94560' : '#fff',
                                color: filters.category === cat.slug ? '#fff' : '#333',
                                border: '1px solid ' + (filters.category === cat.slug ? '#e94560' : '#ddd'),
                                borderRadius: 20, padding: '8px 16px',
                                fontSize: 13, fontWeight: 600, cursor: 'pointer',
                                display: 'flex', alignItems: 'center', gap: 6,
                            }}>
                                {cat.icon} {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    {products.data.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '60px 0', color: '#888' }}>
                            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
                            <p>Tidak ditemukan produk yang sesuai.</p>
                        </div>
                    ) : (
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                            gap: 20,
                        }}>
                            {products.data.map((product) => (
                                <Link key={product.id} href={`/produk/${product.umkm?.slug}/${product.slug}`} style={{
                                    textDecoration: 'none', background: '#fff',
                                    borderRadius: 16, overflow: 'hidden',
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                                    border: '1px solid rgba(0,0,0,0.06)',
                                }}>
                                    <div style={{
                                        height: 180,
                                        background: 'linear-gradient(135deg, #f0f4ff, #e8ecf8)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        {product.image_url ? (
                                            <img src={product.image_url} alt={product.name} style={{
                                                width: '100%', height: '100%', objectFit: 'cover',
                                            }} />
                                        ) : (
                                            <span style={{ fontSize: 48, opacity: 0.3 }}>📦</span>
                                        )}
                                    </div>
                                    <div style={{ padding: 16 }}>
                                        <div style={{ fontSize: 12, color: '#888', marginBottom: 4 }}>
                                            {product.category?.icon} {product.category?.name} • {product.umkm?.name}
                                        </div>
                                        <h4 style={{ fontSize: 15, fontWeight: 700, color: '#1a1a2e', marginBottom: 8 }}>
                                            {product.name}
                                        </h4>
                                        <div style={{ fontSize: 16, fontWeight: 800, color: '#e94560' }}>
                                            {product.formatted_price}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    {products.last_page > 1 && (
                        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}>
                            {products.links.map((link, i) => (
                                <Link key={i} href={link.url || '#'} style={{
                                    padding: '8px 16px', borderRadius: 8,
                                    background: link.active ? '#e94560' : '#fff',
                                    color: link.active ? '#fff' : '#333',
                                    textDecoration: 'none', fontSize: 14,
                                    fontWeight: link.active ? 700 : 400,
                                    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                                    pointerEvents: link.url ? 'auto' : 'none',
                                    opacity: link.url ? 1 : 0.5,
                                }} dangerouslySetInnerHTML={{ __html: link.label }} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </PublicLayout>
    );
}
