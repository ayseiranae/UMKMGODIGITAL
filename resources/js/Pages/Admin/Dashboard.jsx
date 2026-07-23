import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Dashboard({ stats, recent_umkms, recent_products }) {
    return (
        <AdminLayout title="Dashboard">
            <Head title="Dashboard Admin" />

            {/* Stats Cards */}
            <div className="admin-stats-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 12, marginBottom: 24,
            }}>
                {[
                    { label: 'Total UMKM',      value: stats.total_umkm,         accent: '#22577a' },
                    { label: 'UMKM Aktif',      value: stats.active_umkm,        accent: '#38a3a5' },
                    { label: 'Total Produk',    value: stats.total_products,     accent: '#57cc99' },
                    { label: 'Produk Aktif',    value: stats.active_products,    accent: '#22577a' },
                    { label: 'Kategori',        value: stats.total_categories,   accent: '#38a3a5' },
                    { label: 'Produk Unggulan', value: stats.featured_products,  accent: '#57cc99' },
                ].map((s, i) => (
                    <div key={i} style={{
                        background: '#fff',
                        borderRadius: 12,
                        padding: '14px 12px',
                        boxShadow: '0 2px 8px rgba(34,87,122,0.07)',
                        borderTop: '1px solid #e2e8f0',
                        borderRight: '1px solid #e2e8f0',
                        borderBottom: '1px solid #e2e8f0',
                        borderLeft: `4px solid ${s.accent}`,
                    }}>
                        <div style={{ fontSize: 10, color: s.accent, fontWeight: 800, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.5px', lineHeight: 1.2 }}>
                            {s.label}
                        </div>
                        <div style={{ fontSize: 24, fontWeight: 900, color: s.accent }}>{s.value}</div>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="admin-filter-bar" style={{
                display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap',
            }}>
                <Link href="/admin/umkm/create" style={{
                    background: 'linear-gradient(135deg, #22577a 0%, #38a3a5 100%)',
                    color: '#fff', padding: '12px 20px',
                    borderRadius: 10, textDecoration: 'none',
                    fontWeight: 700, fontSize: 14,
                    boxShadow: '0 2px 10px rgba(34,87,122,0.3)',
                    textAlign: 'center',
                }}>
                    + Tambah UMKM
                </Link>
                <Link href="/admin/produk/create" style={{
                    background: 'linear-gradient(135deg, #22577a 0%, #38a3a5 100%)',
                    color: '#fff', padding: '12px 20px',
                    borderRadius: 10, textDecoration: 'none',
                    fontWeight: 700, fontSize: 14,
                    boxShadow: '0 2px 10px rgba(34,87,122,0.3)',
                    textAlign: 'center',
                }}>
                    + Tambah Produk
                </Link>
                <Link href="/admin/kategori/create" style={{
                    background: 'linear-gradient(135deg, #22577a 0%, #38a3a5 100%)',
                    color: '#fff', padding: '12px 20px',
                    borderRadius: 10, textDecoration: 'none',
                    fontWeight: 700, fontSize: 14,
                    boxShadow: '0 2px 10px rgba(34,87,122,0.3)',
                    textAlign: 'center',
                }}>
                    + Tambah Kategori
                </Link>
            </div>

            {/* Recent Items */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 16,
            }}>
                {/* Recent UMKM */}
                <div style={{ background: '#fff', borderRadius: 16, padding: 24, boxShadow: '0 2px 8px rgba(30,58,138,0.06)', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: '#0f172a', marginBottom: 16 }}>
                        UMKM Terbaru
                    </h3>
                    {recent_umkms.map((umkm) => (
                        <div key={umkm.id} style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            padding: '12px 0', borderBottom: '1px solid #f1f5f9',
                        }}>
                            <div>
                                <div style={{ fontWeight: 700, color: '#0f172a', fontSize: 14 }}>{umkm.name}</div>
                                <div style={{ fontSize: 12, color: '#64748b' }}>{umkm.owner_name}</div>
                            </div>
                            <Link href={`/admin/umkm/${umkm.id}/edit`} style={{
                                color: '#22577a', textDecoration: 'none', fontSize: 12, fontWeight: 600,
                            }}>
                                Edit →
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Recent Products */}
                <div style={{ background: '#fff', borderRadius: 16, padding: 24, boxShadow: '0 2px 8px rgba(30,58,138,0.06)', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: '#0f172a', marginBottom: 16 }}>
                        Produk Terbaru
                    </h3>
                    {recent_products.map((product) => (
                        <div key={product.id} style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            padding: '12px 0', borderBottom: '1px solid #f1f5f9',
                        }}>
                            <div>
                                <div style={{ fontWeight: 700, color: '#0f172a', fontSize: 14 }}>{product.name}</div>
                                <div style={{ fontSize: 12, color: '#64748b' }}>
                                    {product.umkm?.name} • {product.category?.name}
                                </div>
                            </div>
                            <Link href={`/admin/produk/${product.id}/edit`} style={{
                                color: '#22577a', textDecoration: 'none', fontSize: 12, fontWeight: 600,
                            }}>
                                Edit →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
}
