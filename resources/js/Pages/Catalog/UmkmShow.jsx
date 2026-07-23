import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function UmkmShow({ umkm }) {
    return (
        <PublicLayout>
            <Head title={`${umkm.name} — UMKM Desa Birowo`} />

            {/* Header */}
            <section style={{
                background: 'linear-gradient(135deg, #22577a 0%, #38a3a5 100%)',
                padding: '50px 24px 60px',
                color: '#fff',
            }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <Link href="/umkm" style={{ color: '#c7f9cc', textDecoration: 'none', fontSize: 13, marginBottom: 16, display: 'inline-block', fontWeight: 600 }}>
                        ← Kembali ke Daftar UMKM
                    </Link>
                    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1 }}>
                            <h1 style={{ fontSize: 28, fontWeight: 900, marginBottom: 4 }}>{umkm.name}</h1>
                            <p style={{ fontSize: 14, color: '#c7f9cc', marginBottom: 12 }}>
                                {umkm.owner_name} • {' '}
                                {umkm.maps_url ? (
                                    <a href={umkm.maps_url} target="_blank" rel="noreferrer" style={{ color: '#80ed99', textDecoration: 'none', fontWeight: 600 }}>
                                        {umkm.address} (Lihat di Maps)
                                    </a>
                                ) : (
                                    umkm.address
                                )}
                            </p>
                            <p style={{ fontSize: 14, color: '#ffffff', lineHeight: 1.7, maxWidth: 700, opacity: 0.95 }}>
                                {umkm.description}
                            </p>
                        </div>
                    </div>

                    {/* Contact Links */}
                    {umkm.contact_links?.length > 0 && (
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 24 }}>
                            {umkm.contact_links.map((link) => (
                                <a key={link.id} href={link.url} target="_blank" rel="noreferrer" style={{
                                    display: 'flex', alignItems: 'center', gap: 6,
                                    background: 'rgba(255,255,255,0.2)',
                                    border: '1px solid rgba(255,255,255,0.4)',
                                    borderRadius: 8, padding: '8px 16px',
                                    textDecoration: 'none', color: '#ffffff',
                                    fontSize: 13, fontWeight: 600,
                                }}>
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Products */}
            <section style={{ background: '#f4fbf7', padding: '40px 24px 60px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0f172a', marginBottom: 24 }}>
                        Produk ({umkm.products?.length || 0})
                    </h2>
                    {umkm.products?.length > 0 ? (
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                            gap: 20,
                        }}>
                            {umkm.products.map((product) => (
                                <Link key={product.id} href={`/produk/${umkm.slug}/${product.slug}`} style={{
                                    textDecoration: 'none',
                                    background: '#fff',
                                    borderRadius: 16,
                                    overflow: 'hidden',
                                    boxShadow: '0 2px 12px rgba(30,58,138,0.08)',
                                    border: '1px solid #e2e8f0',
                                }}>
                                    <div style={{
                                        height: 180,
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
                                    <div style={{ padding: 16 }}>
                                        <div style={{ fontSize: 12, color: '#64748b', marginBottom: 4 }}>
                                            {product.category?.name}
                                        </div>
                                        <h4 style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>
                                            {product.name}
                                        </h4>
                                        <div style={{ fontSize: 16, fontWeight: 800, color: '#22577a' }}>
                                            {product.formatted_price}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '40px 0', color: '#64748b' }}>
                            <p>Belum ada produk yang terdaftar.</p>
                        </div>
                    )}
                </div>
            </section>
        </PublicLayout>
    );
}
