import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Home({ featuredProducts, umkms, categories, stats }) {
    return (
        <PublicLayout>
            <Head title="Beranda — Katalog UMKM Desa Birowo" />

            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #e94560 150%)',
                color: '#fff',
                padding: '80px 24px 100px',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', top: -100, right: -100,
                    width: 400, height: 400, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(233,69,96,0.15) 0%, transparent 70%)',
                }} />
                <div style={{
                    position: 'absolute', bottom: -50, left: -50,
                    width: 300, height: 300, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(15,52,96,0.3) 0%, transparent 70%)',
                }} />
                <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: 650 }}>
                        <div style={{
                            display: 'inline-block',
                            background: 'rgba(233,69,96,0.15)',
                            border: '1px solid rgba(233,69,96,0.3)',
                            borderRadius: 20,
                            padding: '6px 16px',
                            fontSize: 12,
                            fontWeight: 600,
                            color: '#e94560',
                            marginBottom: 20,
                            letterSpacing: 1,
                        }}>
                            🚀 UMKM GO DIGITAL 2026
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(32px, 5vw, 52px)',
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: 20,
                            letterSpacing: '-1px',
                        }}>
                            Katalog Digital<br />
                            <span style={{ color: '#e94560' }}>UMKM Desa Birowo</span>
                        </h1>
                        <p style={{
                            fontSize: 17,
                            lineHeight: 1.7,
                            color: '#8892b0',
                            marginBottom: 32,
                        }}>
                            Temukan berbagai produk unggulan dari pelaku usaha Desa Birowo,
                            Kecamatan Binangun, Kabupaten Blitar. Dari makanan khas, kerajinan tangan,
                            hingga produk herbal tradisional.
                        </p>
                        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                            <Link href="/umkm" style={{
                                background: 'linear-gradient(135deg, #e94560, #c23152)',
                                color: '#fff',
                                padding: '14px 32px',
                                borderRadius: 12,
                                textDecoration: 'none',
                                fontWeight: 700,
                                fontSize: 15,
                                boxShadow: '0 4px 15px rgba(233,69,96,0.4)',
                                transition: 'transform 0.2s',
                            }}>
                                Jelajahi UMKM →
                            </Link>
                            <Link href="/produk" style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                color: '#ccd6f6',
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
                background: '#fff',
                padding: '0 24px',
                marginTop: -50,
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
                        { label: 'UMKM Terdaftar', value: stats.total_umkm, icon: '🏪' },
                        { label: 'Produk Tersedia', value: stats.total_products, icon: '📦' },
                        { label: 'Kategori Produk', value: stats.total_categories, icon: '🏷️' },
                    ].map((s, i) => (
                        <div key={i} style={{
                            background: '#fff',
                            borderRadius: 16,
                            padding: '28px 24px',
                            textAlign: 'center',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            border: '1px solid rgba(0,0,0,0.05)',
                        }}>
                            <div style={{ fontSize: 32, marginBottom: 8 }}>{s.icon}</div>
                            <div style={{ fontSize: 32, fontWeight: 900, color: '#1a1a2e' }}>{s.value}</div>
                            <div style={{ fontSize: 13, color: '#666', fontWeight: 500, marginTop: 4 }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Categories Section */}
            <section style={{ background: '#fafbff', padding: '60px 24px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <SectionTitle title="Kategori Produk" subtitle="Temukan produk berdasarkan kategori" />
                    <div style={{
                        display: 'flex',
                        gap: 12,
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}>
                        {categories.map((cat) => (
                            <Link key={cat.id} href={`/produk?category=${cat.slug}`} style={{
                                background: '#fff',
                                borderRadius: 12,
                                padding: '16px 24px',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10,
                                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                                border: '1px solid rgba(0,0,0,0.06)',
                                transition: 'all 0.2s',
                            }}>
                                <span style={{ fontSize: 24 }}>{cat.icon}</span>
                                <div>
                                    <div style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 14 }}>{cat.name}</div>
                                    <div style={{ fontSize: 12, color: '#888' }}>{cat.products_count} produk</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* UMKM Section */}
            <section style={{ background: '#fff', padding: '60px 24px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <SectionTitle title="UMKM Desa Birowo" subtitle="Pelaku usaha unggulan dari desa kami" />
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                        gap: 20,
                    }}>
                        {umkms.map((umkm) => (
                            <Link key={umkm.id} href={`/umkm/${umkm.slug}`} style={{
                                textDecoration: 'none',
                                background: '#fff',
                                borderRadius: 16,
                                overflow: 'hidden',
                                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                                border: '1px solid rgba(0,0,0,0.06)',
                                transition: 'all 0.3s',
                            }}>
                                <div style={{
                                    background: 'linear-gradient(135deg, #1a1a2e, #0f3460)',
                                    padding: '24px',
                                    color: '#fff',
                                }}>
                                    <div style={{ fontSize: 36, marginBottom: 12 }}>🏪</div>
                                    <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{umkm.name}</h3>
                                    <p style={{ fontSize: 13, color: '#8892b0' }}>👤 {umkm.owner_name}</p>
                                </div>
                                <div style={{ padding: '16px 24px' }}>
                                    <p style={{
                                        fontSize: 13,
                                        color: '#555',
                                        lineHeight: 1.6,
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        marginBottom: 12,
                                    }}>
                                        {umkm.description}
                                    </p>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}>
                                        <span style={{
                                            fontSize: 12,
                                            color: '#888',
                                            background: '#f0f4ff',
                                            padding: '4px 12px',
                                            borderRadius: 20,
                                            fontWeight: 600,
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
                    <div style={{ textAlign: 'center', marginTop: 32 }}>
                        <Link href="/umkm" style={{
                            background: 'linear-gradient(135deg, #1a1a2e, #0f3460)',
                            color: '#fff',
                            padding: '14px 40px',
                            borderRadius: 12,
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: 14,
                        }}>
                            Lihat Semua UMKM →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section style={{ background: '#fafbff', padding: '60px 24px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <SectionTitle title="Produk Unggulan" subtitle="Pilihan terbaik dari UMKM Desa Birowo" />
                    <div style={{
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
                            background: 'linear-gradient(135deg, #e94560, #c23152)',
                            color: '#fff',
                            padding: '14px 40px',
                            borderRadius: 12,
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: 14,
                            boxShadow: '0 4px 15px rgba(233,69,96,0.3)',
                        }}>
                            Lihat Semua Produk →
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                background: 'linear-gradient(135deg, #e94560, #c23152)',
                padding: '60px 24px',
                textAlign: 'center',
                color: '#fff',
            }}>
                <div style={{ maxWidth: 600, margin: '0 auto' }}>
                    <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 16 }}>
                        Ingin UMKM Anda Terdaftar?
                    </h2>
                    <p style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.9, marginBottom: 24 }}>
                        Hubungi perangkat Desa Birowo untuk mendaftarkan usaha Anda
                        ke dalam katalog digital resmi desa.
                    </p>
                    <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" style={{
                        background: '#fff',
                        color: '#e94560',
                        padding: '14px 40px',
                        borderRadius: 12,
                        textDecoration: 'none',
                        fontWeight: 700,
                        fontSize: 15,
                        display: 'inline-block',
                    }}>
                        📱 Hubungi via WhatsApp
                    </a>
                </div>
            </section>
        </PublicLayout>
    );
}

function SectionTitle({ title, subtitle }) {
    return (
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <h2 style={{ fontSize: 28, fontWeight: 900, color: '#1a1a2e', marginBottom: 8 }}>{title}</h2>
            <p style={{ fontSize: 15, color: '#666' }}>{subtitle}</p>
        </div>
    );
}

function ProductCard({ product }) {
    return (
        <Link href={`/produk/${product.umkm?.slug}/${product.slug}`} style={{
            textDecoration: 'none',
            background: '#fff',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            border: '1px solid rgba(0,0,0,0.06)',
            transition: 'transform 0.2s, box-shadow 0.2s',
        }}>
            <div style={{
                height: 180,
                background: 'linear-gradient(135deg, #f0f4ff, #e8ecf8)',
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
                    <span style={{ fontSize: 48, opacity: 0.3 }}>📦</span>
                )}
                {product.is_featured && (
                    <span style={{
                        position: 'absolute', top: 12, right: 12,
                        background: '#e94560', color: '#fff',
                        padding: '4px 10px', borderRadius: 6,
                        fontSize: 11, fontWeight: 700,
                    }}>
                        ⭐ Unggulan
                    </span>
                )}
            </div>
            <div style={{ padding: '16px' }}>
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
    );
}
