import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function ProductShow({ product, relatedProducts }) {
    return (
        <PublicLayout>
            <Head title={`${product.name} — UMKM Desa Birowo`} />

            <section style={{ background: '#fafbff', padding: '40px 24px 60px' }}>
                <div style={{ maxWidth: 1000, margin: '0 auto' }}>
                    <Link href="/produk" style={{ color: '#888', textDecoration: 'none', fontSize: 13, marginBottom: 20, display: 'inline-block' }}>
                        ← Kembali ke Katalog
                    </Link>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 32, background: '#fff',
                        borderRadius: 20, overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    }}>
                        {/* Image */}
                        <div style={{
                            height: 350,
                            background: 'linear-gradient(135deg, #f0f4ff, #e8ecf8)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                            {product.image_url ? (
                                <img src={product.image_url} alt={product.name} style={{
                                    width: '100%', height: '100%', objectFit: 'cover',
                                }} />
                            ) : (
                                <span style={{ fontSize: 80, opacity: 0.2 }}>📦</span>
                            )}
                        </div>

                        {/* Details */}
                        <div style={{ padding: '32px 32px 32px 0' }}>
                            <div style={{
                                display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap',
                            }}>
                                {product.category && (
                                    <span style={{
                                        background: '#f0f4ff', color: '#0f3460',
                                        padding: '4px 12px', borderRadius: 20,
                                        fontSize: 12, fontWeight: 600,
                                    }}>
                                        {product.category.icon} {product.category.name}
                                    </span>
                                )}
                                {product.is_featured && (
                                    <span style={{
                                        background: '#fff0f3', color: '#e94560',
                                        padding: '4px 12px', borderRadius: 20,
                                        fontSize: 12, fontWeight: 600,
                                    }}>
                                        ⭐ Unggulan
                                    </span>
                                )}
                            </div>

                            <h1 style={{ fontSize: 24, fontWeight: 900, color: '#1a1a2e', marginBottom: 8 }}>
                                {product.name}
                            </h1>

                            <div style={{ fontSize: 28, fontWeight: 900, color: '#e94560', marginBottom: 20 }}>
                                {product.formatted_price}
                            </div>

                            {product.description && (
                                <p style={{ fontSize: 14, color: '#555', lineHeight: 1.8, marginBottom: 24 }}>
                                    {product.description}
                                </p>
                            )}

                            {/* UMKM Info */}
                            <div style={{
                                background: '#f8f9ff', borderRadius: 12,
                                padding: 16, marginBottom: 20,
                            }}>
                                <div style={{ fontSize: 12, color: '#888', marginBottom: 4, fontWeight: 600, textTransform: 'uppercase' }}>
                                    Dijual oleh
                                </div>
                                <Link href={`/umkm/${product.umkm?.slug}`} style={{
                                    textDecoration: 'none', color: '#1a1a2e',
                                    fontWeight: 700, fontSize: 16,
                                }}>
                                    🏪 {product.umkm?.name}
                                </Link>
                            </div>

                            {/* Contact Links */}
                            {product.umkm?.contact_links?.length > 0 && (
                                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                    {product.umkm.contact_links.map((link) => (
                                        <a key={link.id} href={link.url} target="_blank" rel="noreferrer" style={{
                                            background: link.type === 'whatsapp' ? '#25D366' : '#e94560',
                                            color: '#fff', padding: '10px 20px',
                                            borderRadius: 10, textDecoration: 'none',
                                            fontSize: 13, fontWeight: 700,
                                        }}>
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Related Products */}
                    {relatedProducts?.length > 0 && (
                        <div style={{ marginTop: 48 }}>
                            <h3 style={{ fontSize: 20, fontWeight: 800, color: '#1a1a2e', marginBottom: 20 }}>
                                Produk Serupa
                            </h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                                gap: 16,
                            }}>
                                {relatedProducts.map((p) => (
                                    <Link key={p.id} href={`/produk/${p.umkm?.slug}/${p.slug}`} style={{
                                        textDecoration: 'none', background: '#fff',
                                        borderRadius: 12, overflow: 'hidden',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                                    }}>
                                        <div style={{
                                            height: 120,
                                            background: 'linear-gradient(135deg, #f0f4ff, #e8ecf8)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        }}>
                                            <span style={{ fontSize: 32, opacity: 0.3 }}>📦</span>
                                        </div>
                                        <div style={{ padding: 12 }}>
                                            <h4 style={{ fontSize: 13, fontWeight: 700, color: '#1a1a2e', marginBottom: 4 }}>
                                                {p.name}
                                            </h4>
                                            <div style={{ fontSize: 14, fontWeight: 800, color: '#e94560' }}>
                                                {p.formatted_price}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </PublicLayout>
    );
}
