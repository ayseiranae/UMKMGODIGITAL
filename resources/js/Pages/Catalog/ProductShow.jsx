import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

const BrandIcons = {
    whatsapp: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>,
    instagram: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
    facebook: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
    shopee: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7l.867 12.143a2 2 0 0 0 2 1.857h10.276a2 2 0 0 0 2 -1.857l.867 -12.143h-16z" /><path d="M8.5 7c0 -1.653 1.5 -4 3.5 -4s3.5 2.347 3.5 4" /><path d="M9.5 17c.413.462 1 1 2.5 1s2.5 -.897 2.5 -2s-1 -1.5 -2.5 -2s-2 -1.47 -2 -2c0 -1.104 1 -2 2 -2s2 .5 2 1" /></svg>,
    tokopedia: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>,
    bukalapak: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>,
    tiktok: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.31-1.92 1.56-4.62 2.33-7.05 1.95-2.9-.45-5.53-2.61-6.49-5.46-.86-2.58-.33-5.59 1.48-7.7 1.63-1.88 4.2-2.88 6.64-2.51.04 1.34.01 2.68.04 4.02-1.01-.22-2.11-.14-3.03.35-.91.49-1.55 1.42-1.74 2.44-.19 1.01.07 2.13.73 2.91.82.96 2.21 1.32 3.42.92 1.17-.38 2.02-1.4 2.2-2.61.03-.23.03-.46.03-.69V.02z"/></svg>,
    gofood: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>,
    grabfood: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>,
    website: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    default: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>,
};

const brandStyles = {
    whatsapp: { bg: '#25D366' },
    instagram: { bg: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' },
    facebook: { bg: '#1877F2' },
    shopee: { bg: '#ee4d2d' },
    tokopedia: { bg: '#00AA5B' },
    bukalapak: { bg: '#E31E52' },
    tiktok: { bg: '#000000' },
    gofood: { bg: '#EE2737' },
    grabfood: { bg: '#00B14F' },
    website: { bg: '#22577a' },
    default: { bg: 'linear-gradient(135deg, #57cc99, #38a3a5)' },
};

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
                                    {product.umkm.contact_links.map((link) => {
                                        const style = brandStyles[link.type] || brandStyles.default;
                                        const IconComponent = BrandIcons[link.type] || BrandIcons.default;
                                        return (
                                            <a key={link.id} href={link.url} target="_blank" rel="noreferrer" style={{
                                                background: style.bg,
                                                color: '#fff', padding: '10px 20px',
                                                borderRadius: 10, textDecoration: 'none',
                                                fontSize: 13, fontWeight: 700,
                                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                                display: 'inline-flex', alignItems: 'center', gap: '8px'
                                            }}>
                                                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                                                    {IconComponent}
                                                </span>
                                                {link.label}
                                            </a>
                                        );
                                    })}
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
