import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Dashboard({ stats, recent_umkms, recent_products }) {
    return (
        <AdminLayout title="Dashboard">
            <Head title="Dashboard Admin" />

            {/* Stats Cards */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 16, marginBottom: 32,
            }}>
                {[
                    { label: 'Total UMKM', value: stats.total_umkm, icon: '🏪', color: '#4361ee' },
                    { label: 'UMKM Aktif', value: stats.active_umkm, icon: '✅', color: '#2ec4b6' },
                    { label: 'Total Produk', value: stats.total_products, icon: '📦', color: '#e94560' },
                    { label: 'Produk Aktif', value: stats.active_products, icon: '📊', color: '#ff6b6b' },
                    { label: 'Kategori', value: stats.total_categories, icon: '🏷️', color: '#845ec2' },
                    { label: 'Produk Unggulan', value: stats.featured_products, icon: '⭐', color: '#ffc75f' },
                ].map((s, i) => (
                    <div key={i} style={{
                        background: '#fff', borderRadius: 16,
                        padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                        borderLeft: `4px solid ${s.color}`,
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <div style={{ fontSize: 12, color: '#888', fontWeight: 600, marginBottom: 8, textTransform: 'uppercase' }}>
                                    {s.label}
                                </div>
                                <div style={{ fontSize: 28, fontWeight: 900, color: '#1a1a2e' }}>{s.value}</div>
                            </div>
                            <span style={{ fontSize: 32 }}>{s.icon}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div style={{
                display: 'flex', gap: 12, marginBottom: 32, flexWrap: 'wrap',
            }}>
                <Link href="/admin/umkm/create" style={{
                    background: 'linear-gradient(135deg, #4361ee, #3a56d4)',
                    color: '#fff', padding: '12px 24px',
                    borderRadius: 10, textDecoration: 'none',
                    fontWeight: 700, fontSize: 14,
                }}>
                    + Tambah UMKM
                </Link>
                <Link href="/admin/produk/create" style={{
                    background: 'linear-gradient(135deg, #e94560, #c23152)',
                    color: '#fff', padding: '12px 24px',
                    borderRadius: 10, textDecoration: 'none',
                    fontWeight: 700, fontSize: 14,
                }}>
                    + Tambah Produk
                </Link>
                <Link href="/admin/kategori/create" style={{
                    background: 'linear-gradient(135deg, #845ec2, #6c3ea1)',
                    color: '#fff', padding: '12px 24px',
                    borderRadius: 10, textDecoration: 'none',
                    fontWeight: 700, fontSize: 14,
                }}>
                    + Tambah Kategori
                </Link>
            </div>

            {/* Recent Items */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: 20,
            }}>
                {/* Recent UMKM */}
                <div style={{ background: '#fff', borderRadius: 16, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: '#1a1a2e', marginBottom: 16 }}>
                        🏪 UMKM Terbaru
                    </h3>
                    {recent_umkms.map((umkm) => (
                        <div key={umkm.id} style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            padding: '12px 0', borderBottom: '1px solid #f0f0f0',
                        }}>
                            <div>
                                <div style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 14 }}>{umkm.name}</div>
                                <div style={{ fontSize: 12, color: '#888' }}>👤 {umkm.owner_name}</div>
                            </div>
                            <Link href={`/admin/umkm/${umkm.id}/edit`} style={{
                                color: '#4361ee', textDecoration: 'none', fontSize: 12, fontWeight: 600,
                            }}>
                                Edit →
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Recent Products */}
                <div style={{ background: '#fff', borderRadius: 16, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: '#1a1a2e', marginBottom: 16 }}>
                        📦 Produk Terbaru
                    </h3>
                    {recent_products.map((product) => (
                        <div key={product.id} style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            padding: '12px 0', borderBottom: '1px solid #f0f0f0',
                        }}>
                            <div>
                                <div style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 14 }}>{product.name}</div>
                                <div style={{ fontSize: 12, color: '#888' }}>
                                    🏪 {product.umkm?.name} • {product.category?.name}
                                </div>
                            </div>
                            <Link href={`/admin/produk/${product.id}/edit`} style={{
                                color: '#e94560', textDecoration: 'none', fontSize: 12, fontWeight: 600,
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
