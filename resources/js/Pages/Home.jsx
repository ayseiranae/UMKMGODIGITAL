import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Home({ featuredProducts, umkms, categories, stats }) {
    return (
        <PublicLayout>
            <Head title="Beranda — Katalog UMKM Desa Birowo" />

            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #22577a 0%, #38a3a5 100%)',
                color: '#fff',
                padding: '80px 24px 100px',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', top: -100, right: -100,
                    width: 400, height: 400, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%)',
                }} />
                <div style={{
                    position: 'absolute', bottom: -50, left: -50,
                    width: 300, height: 300, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
                }} />
                <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: 650 }}>
                        <div style={{
                            display: 'inline-block',
                            background: 'rgba(56,189,248,0.25)',
                            border: '1px solid rgba(56,189,248,0.5)',
                            borderRadius: 20,
                            padding: '6px 16px',
                            fontSize: 12,
                            fontWeight: 700,
                            color: '#80ed99',
                            marginBottom: 20,
                            letterSpacing: 1,
                        }}>
                            KATALOG UMKM DESA BIROWO
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(32px, 5vw, 52px)',
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: 20,
                            letterSpacing: '-1px',
                        }}>
                            Potensi Usaha Lokal<br />
                            <span style={{ color: '#80ed99' }}>Desa Birowo</span>
                        </h1>
                        <p style={{
                            fontSize: 17,
                            lineHeight: 1.7,
                            color: '#e0f2fe',
                            marginBottom: 32,
                            opacity: 0.95,
                        }}>
                            Temukan berbagai produk unggulan dari pelaku usaha Desa Birowo,
                            Kecamatan Binangun, Kabupaten Blitar. Dari kuliner khas, kerajinan tangan,
                            hingga produk hasil bumi tradisional.
                        </p>
                        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                            <Link href="/umkm" style={{
                                background: 'linear-gradient(135deg, #57cc99, #38a3a5)',
                                color: '#fff',
                                padding: '14px 32px',
                                borderRadius: 12,
                                textDecoration: 'none',
                                fontWeight: 700,
                                fontSize: 15,
                                boxShadow: '0 4px 15px rgba(87,204,153,0.4)',
                                transition: 'transform 0.2s',
                            }}>
                                Jelajahi UMKM →
                            </Link>
                            <Link href="/produk" style={{
                                background: 'rgba(255,255,255,0.18)',
                                border: '1px solid rgba(255,255,255,0.35)',
                                color: '#ffffff',
                                padding: '14px 32px',
                                borderRadius: 12,
                                textDecoration: 'none',
                                fontWeight: 600,
                                fontSize: 15,
                            }}>
                                Lihat Produk
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section style={{
                background: '#f4fbf7',
                padding: '0 24px',
                marginTop: 50,
                marginBottom: 50,
                position: 'relative',
                zIndex: 2,
            }}>
                <div style={{
                    maxWidth: 900,
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 20,
                }}>
                    {[
                        { label: 'UMKM Terdaftar', value: stats.total_umkm },
                        { label: 'Produk Tersedia', value: stats.total_products },
                        { label: 'Kategori Produk', value: stats.total_categories },
                    ].map((s, i) => (
                        <div key={i} style={{
                            background: '#fff',
                            borderRadius: 16,
                            padding: '28px 24px',
                            textAlign: 'center',
                            boxShadow: '0 4px 20px rgba(30,58,138,0.08)',
                            border: '1px solid #e2e8f0',
                        }}>
                            <div style={{ fontSize: 32, fontWeight: 900, color: '#0f172a' }}>{s.value}</div>
                            <div style={{ fontSize: 13, color: '#64748b', fontWeight: 600, marginTop: 4 }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Categories Section */}
            <section className="home-section-mobile" style={{ background: '#f4fbf7', padding: '60px 24px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <SectionTitle title="Kategori Produk" subtitle="Temukan produk berdasarkan kategori" />
                    <div className="home-categories-grid" style={{
                        display: 'flex',
                        gap: 12,
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}>
                        {categories.map((cat) => (
                            <Link key={cat.id} href={`/produk?category=${cat.slug}`} className="category-card-item" style={{
                                background: '#fff',
                                borderRadius: 12,
                                padding: '16px 24px',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10,
                                boxShadow: '0 2px 8px rgba(30,58,138,0.06)',
                                border: '1px solid #e2e8f0',
                                transition: 'all 0.2s',
                            }}>
                                <div>
                                    <div className="category-card-name" style={{ fontWeight: 700, color: '#0f172a', fontSize: 14 }}>{cat.name}</div>
                                    <div className="category-card-count" style={{ fontSize: 12, color: '#64748b' }}>{cat.products_count} produk</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* UMKM Section */}
            <section className="home-section-mobile" style={{ background: '#fff', padding: '60px 24px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <SectionTitle title="UMKM Desa Birowo" subtitle="Pelaku usaha unggulan dari desa kami" />
                    <div className="home-umkm-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                        gap: 20,
                    }}>
                        {umkms.map((umkm) => (
                            <Link key={umkm.id} href={`/umkm/${umkm.slug}`} className="umkm-card-item" style={{
                                textDecoration: 'none',
                                background: '#fff',
                                borderRadius: 16,
                                overflow: 'hidden',
                                boxShadow: '0 2px 12px rgba(30,58,138,0.08)',
                                border: '1px solid #e2e8f0',
                                transition: 'all 0.3s',
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
                                        padding: '16px',
                                        color: '#fff',
                                    }}>
                                        <h3 className="umkm-card-name" style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{umkm.name}</h3>
                                        <p className="umkm-card-owner" style={{ fontSize: 13, color: '#80ed99' }}>{umkm.owner_name}</p>
                                    </div>
                                </div>
                                <div className="umkm-card-body" style={{ padding: '16px 24px' }}>
                                    <p className="umkm-card-desc" style={{
                                        fontSize: 13,
                                        color: '#475569',
                                        lineHeight: 1.6,
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        marginBottom: 12,
                                    }}>
                                        {umkm.description}
                                    </p>
                                    <div className="umkm-card-footer" style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}>
                                        <span className="umkm-card-badge" style={{
                                            fontSize: 12,
                                            color: '#22577a',
                                            background: '#80ed99',
                                            padding: '4px 12px',
                                            borderRadius: 20,
                                            fontWeight: 600,
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
                    <div style={{ textAlign: 'center', marginTop: 32 }}>
                        <Link href="/umkm" style={{
                            background: 'linear-gradient(135deg, #57cc99, #38a3a5)',
                            color: '#fff',
                            padding: '14px 40px',
                            borderRadius: 12,
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: 14,
                            boxShadow: '0 4px 15px rgba(37,99,235,0.3)',
                        }}>
                            Lihat Semua UMKM →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="home-section-mobile" style={{ background: '#f1f5f9', padding: '60px 24px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <SectionTitle title="Produk Unggulan" subtitle="Pilihan terbaik hasil karya warga Desa Birowo" />
                    <div className="home-products-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                        gap: 20,
                    }}>
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 32 }}>
                        <Link href="/produk" style={{
                            background: 'linear-gradient(135deg, #57cc99, #38a3a5)',
                            color: '#fff',
                            padding: '14px 40px',
                            borderRadius: 12,
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: 14,
                            boxShadow: '0 4px 15px rgba(37,99,235,0.3)',
                        }}>
                            Lihat Semua Produk →
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                background: 'linear-gradient(135deg, #22577a 0%, #38a3a5 100%)',
                padding: '60px 24px',
                textAlign: 'center',
                color: '#fff',
            }}>
                <div style={{ maxWidth: 600, margin: '0 auto' }}>
                    <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 16 }}>
                        Ingin UMKM Anda Terdaftar?
                    </h2>
                    <p style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.95, marginBottom: 24, color: '#e0f2fe' }}>
                        Hubungi perangkat Desa Birowo untuk mendaftarkan usaha Anda
                        ke dalam katalog digital resmi desa.
                    </p>
                    <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" style={{
                        background: '#fff',
                        color: '#22577a',
                        padding: '14px 40px',
                        borderRadius: 12,
                        textDecoration: 'none',
                        fontWeight: 800,
                        fontSize: 15,
                        display: 'inline-block',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                    }}>
                        Hubungi via WhatsApp
                    </a>
                </div>
            </section>

            <style>{`
                @media (max-width: 768px) {
                    .home-section-mobile {
                        padding: 24px 8px !important;
                    }
                    .home-categories-grid {
                        display: grid !important;
                        grid-template-columns: repeat(3, 1fr) !important;
                        gap: 6px !important;
                    }
                    .home-umkm-grid {
                        display: grid !important;
                        grid-template-columns: repeat(3, 1fr) !important;
                        gap: 6px !important;
                    }
                    .home-products-grid {
                        display: grid !important;
                        grid-template-columns: repeat(3, 1fr) !important;
                        gap: 6px !important;
                    }
                    
                    /* Category Card Mobile */
                    .category-card-item {
                        padding: 8px 4px !important;
                        border-radius: 8px !important;
                        flex-direction: column !important;
                        justify-content: center !important;
                        text-align: center !important;
                        gap: 2px !important;
                    }
                    .category-card-name {
                        font-size: 10px !important;
                        line-height: 1.2 !important;
                        font-weight: 700 !important;
                    }
                    .category-card-count {
                        font-size: 8px !important;
                    }

                    /* UMKM Card Mobile */
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
                    .umkm-card-name {
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
                    .umkm-card-desc {
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

                    /* Product Card Mobile */
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

function SectionTitle({ title, subtitle }) {
    return (
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: 28, fontWeight: 900, color: '#0f172a', marginBottom: 8 }}>{title}</h2>
            <p style={{ fontSize: 15, color: '#64748b' }}>{subtitle}</p>
        </div>
    );
}

function ProductCard({ product }) {
    return (
        <Link href={`/produk/${product.umkm?.slug}/${product.slug}`} className="product-card-item" style={{
            textDecoration: 'none',
            background: '#fff',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 2px 12px rgba(30,58,138,0.08)',
            border: '1px solid #e2e8f0',
            transition: 'transform 0.2s, box-shadow 0.2s',
        }}>
            <div className="product-card-img-box" style={{
                height: 180,
                background: 'linear-gradient(135deg, #c7f9cc, #f4fbf7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }}>
                {product.image_url ? (
                    <img src={product.image_url} alt={product.name} style={{
                        width: '100%', height: '100%', objectFit: 'cover',
                    }} />
                ) : (
                    <span style={{ fontSize: 48, opacity: 0.15 }}>—</span>
                )}
                {product.is_featured && (
                    <span style={{
                        position: 'absolute', top: 8, right: 8,
                        background: '#f59e0b', color: '#fff',
                        padding: '3px 8px', borderRadius: 6,
                        fontSize: 10, fontWeight: 700,
                    }}>
                        Unggulan
                    </span>
                )}
            </div>
            <div className="product-card-body" style={{ padding: '16px' }}>
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
    );
}
