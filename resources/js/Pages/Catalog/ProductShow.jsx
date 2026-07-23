import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function ProductShow({ product, relatedProducts }) {
    return (
        <PublicLayout>
            <Head title={`${product.name} — UMKM Desa Birowo`} />

            <section className="product-show-section" style={{ background: '#f4fbf7', padding: '40px 24px 60px' }}>
                <div style={{ maxWidth: 1000, margin: '0 auto' }}>
                    <Link href="/produk" style={{ color: '#22577a', textDecoration: 'none', fontSize: 13, marginBottom: 20, display: 'inline-block', fontWeight: 600 }}>
                        ← Kembali ke Katalog
                    </Link>

                    <div className="product-show-card" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 24, background: '#fff',
                        borderRadius: 20, overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(30,58,138,0.08)',
                        border: '1px solid #e2e8f0',
                    }}>
                        {/* Image */}
                        <div className="product-show-img" style={{
                            height: 350,
                            background: 'linear-gradient(135deg, #ede9fe, #f1f5f9)',
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

                        {/* Details */}
                        <div className="product-details-box" style={{ padding: '24px 28px 32px 24px' }}>
                            <div style={{
                                display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap',
                            }}>
                                {product.category && (
                                    <span style={{
                                        background: '#80ed99', color: '#22577a',
                                        padding: '4px 12px', borderRadius: 20,
                                        fontSize: 12, fontWeight: 600,
                                    }}>
                                        {product.category.name}
                                    </span>
                                )}
                                {product.is_featured && (
                                    <span style={{
                                        background: '#fef3c7', color: '#d97706',
                                        padding: '4px 12px', borderRadius: 20,
                                        fontSize: 12, fontWeight: 600,
                                    }}>
                                        Unggulan
                                    </span>
                                )}
                            </div>

                            <h1 style={{ fontSize: 24, fontWeight: 900, color: '#0f172a', marginBottom: 8 }}>
                                {product.name}
                            </h1>

                            <div style={{ fontSize: 28, fontWeight: 900, color: '#22577a', marginBottom: 20 }}>
                                {product.formatted_price}
                            </div>

                            {product.description && (
                                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.8, marginBottom: 24 }}>
                                    {product.description}
                                </p>
                            )}

                            {/* UMKM Info */}
                            <div style={{
                                background: '#f1f5f9', borderRadius: 12,
                                padding: 16, marginBottom: 20,
                                border: '1px solid #e2e8f0',
                            }}>
                                <div style={{ fontSize: 12, color: '#22577a', marginBottom: 4, fontWeight: 600, textTransform: 'uppercase' }}>
                                    Dijual oleh
                                </div>
                                <Link href={`/umkm/${product.umkm?.slug}`} style={{
                                    textDecoration: 'none', color: '#0f172a',
                                    fontWeight: 700, fontSize: 16,
                                }}>
                                    {product.umkm?.name}
                                </Link>
                            </div>

                            {/* Contact Links */}
                            {product.umkm?.contact_links?.length > 0 && (
                                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                    {product.umkm.contact_links.map((link) => (
                                        <a key={link.id} href={link.url} target="_blank" rel="noreferrer" style={{
                                            background: link.type === 'whatsapp' ? '#25D366' : 'linear-gradient(135deg, #57cc99, #38a3a5)',
                                            color: '#fff', padding: '10px 20px',
                                            borderRadius: 10, textDecoration: 'none',
                                            fontSize: 13, fontWeight: 700,
                                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
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
                            <h3 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', marginBottom: 20 }}>
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
                                        boxShadow: '0 2px 8px rgba(30,58,138,0.08)',
                                        border: '1px solid #e2e8f0',
                                    }}>
                                        <div style={{
                                            height: 120,
                                            background: 'linear-gradient(135deg, #ede9fe, #f1f5f9)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            overflow: 'hidden',
                                        }}>
                                            {p.image_url ? (
                                                <img src={p.image_url} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            ) : (
                                                <span style={{ fontSize: 32, opacity: 0.15 }}>—</span>
                                            )}
                                        </div>
                                        <div style={{ padding: 12 }}>
                                            <h4 style={{ fontSize: 13, fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>
                                                {p.name}
                                            </h4>
                                            <div style={{ fontSize: 14, fontWeight: 800, color: '#22577a' }}>
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

            <style>{`
                @media (max-width: 768px) {
                    .product-show-section {
                        padding: 20px 12px 40px !important;
                    }
                    .product-details-box {
                        padding: 20px 16px 24px 16px !important;
                    }
                    .product-show-img {
                        height: 260px !important;
                    }
                }
            `}</style>
        </PublicLayout>
    );
}
