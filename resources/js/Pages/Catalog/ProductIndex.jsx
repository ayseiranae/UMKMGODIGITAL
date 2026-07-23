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
                background: 'linear-gradient(135deg, #22577a 0%, #38a3a5 100%)',
                padding: '50px 24px 60px',
                color: '#fff',
                textAlign: 'center',
            }}>
                <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Katalog Produk</h1>
                <p style={{ fontSize: 15, color: '#e0f2fe', marginBottom: 28 }}>
                    Jelajahi produk unggulan dari UMKM Desa Birowo
                </p>
                <form onSubmit={handleSearch} style={{
                    maxWidth: 540, margin: '0 auto', display: 'flex', gap: 10,
                }}>
                    <input
                        type="text" value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Cari produk..."
                        style={{
                            flex: 1, padding: '14px 20px', borderRadius: 12,
                            border: '2px solid rgba(255,255,255,0.8)',
                            background: '#ffffff',
                            color: '#0f172a', fontSize: 14, outline: 'none',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                        }}
                    />
                    <button type="submit" style={{
                        background: 'linear-gradient(135deg, #57cc99, #38a3a5)',
                        color: '#ffffff',
                        padding: '14px 28px', borderRadius: 12,
                        border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(87,204,153,0.4)',
                    }}>
                        Cari
                    </button>
                </form>
            </section>

            <section className="catalog-section-mobile" style={{ background: '#f4fbf7', padding: '40px 24px 60px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    {/* Category Filter */}
                    <div className="catalog-filter-mobile" style={{
                        display: 'flex', gap: 8, flexWrap: 'wrap',
                        justifyContent: 'center', marginBottom: 32,
                    }}>
                        {categories.map((cat) => (
                            <button key={cat.id} onClick={() => setCategory(cat.slug)} style={{
                                background: filters.category === cat.slug ? '#38a3a5' : '#fff',
                                color: filters.category === cat.slug ? '#fff' : '#0f172a',
                                border: '1px solid ' + (filters.category === cat.slug ? '#38a3a5' : '#57cc99'),
                                borderRadius: 20, padding: '8px 16px',
                                fontSize: 13, fontWeight: 600, cursor: 'pointer',
                                boxShadow: filters.category === cat.slug ? '0 2px 8px rgba(37,99,235,0.3)' : 'none',
                            }}>
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    {products.data.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '60px 0', color: '#64748b' }}>
                            <p style={{ fontSize: 16 }}>Tidak ditemukan produk yang sesuai.</p>
                        </div>
                    ) : (
                        <div className="product-grid-mobile" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                            gap: 20,
                        }}>
                            {products.data.map((product) => (
                                <Link key={product.id} href={`/produk/${product.umkm?.slug}/${product.slug}`} className="product-card-item" style={{
                                    textDecoration: 'none', background: '#fff',
                                    borderRadius: 16, overflow: 'hidden',
                                    boxShadow: '0 2px 12px rgba(30,58,138,0.08)',
                                    border: '1px solid #e2e8f0',
                                }}>
                                    <div className="product-card-img-box" style={{
                                        height: 180,
                                        background: 'linear-gradient(135deg, #c7f9cc, #f4fbf7)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        {product.image_url ? (
                                            <img src={product.image_url} alt={product.name} style={{
                                                width: '100%', height: '100%', objectFit: 'cover',
                                            }} />
                                        ) : (
                                            <span style={{ fontSize: 48, opacity: 0.15 }}>—</span>
                                        )}
                                    </div>
                                    <div className="product-card-body" style={{ padding: 16 }}>
                                        <div className="product-card-meta" style={{ fontSize: 12, color: '#64748b', marginBottom: 4 }}>
                                            {product.category?.name} • {product.umkm?.name}
                                        </div>
                                        <h4 className="product-card-title" style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>
                                            {product.name}
                                        </h4>
                                        <div className="product-card-price" style={{ fontSize: 16, fontWeight: 800, color: '#22577a' }}>
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
                                    background: link.active ? '#38a3a5' : '#fff',
                                    color: link.active ? '#fff' : '#0f172a',
                                    textDecoration: 'none', fontSize: 14,
                                    fontWeight: link.active ? 700 : 400,
                                    boxShadow: '0 1px 4px rgba(30,58,138,0.1)',
                                    pointerEvents: link.url ? 'auto' : 'none',
                                    opacity: link.url ? 1 : 0.5,
                                }} dangerouslySetInnerHTML={{ __html: link.label }} />
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
                    .catalog-filter-mobile {
                        gap: 4px !important;
                        margin-bottom: 20px !important;
                    }
                    .catalog-filter-mobile button {
                        padding: 6px 10px !important;
                        font-size: 11px !important;
                    }
                    .product-grid-mobile {
                        display: grid !important;
                        grid-template-columns: repeat(3, 1fr) !important;
                        gap: 6px !important;
                    }
                    .product-card-item {
                        border-radius: 8px !important;
                    }
                    .product-card-img-box {
                        height: 85px !important;
                    }
                    .product-card-body {
                        padding: 6px 4px !important;
                    }
                    .product-card-meta {
                        font-size: 8px !important;
                        margin-bottom: 2px !important;
                        white-space: nowrap !important;
                        overflow: hidden !important;
                        text-overflow: ellipsis !important;
                    }
                    .product-card-title {
                        font-size: 10px !important;
                        line-height: 1.2 !important;
                        height: 24px !important;
                        margin-bottom: 2px !important;
                        display: -webkit-box !important;
                        -webkit-line-clamp: 2 !important;
                        -webkit-box-orient: vertical !important;
                        overflow: hidden !important;
                    }
                    .product-card-price {
                        font-size: 10px !important;
                        font-weight: 800 !important;
                    }
                }
            `}</style>
        </PublicLayout>
    );
}
