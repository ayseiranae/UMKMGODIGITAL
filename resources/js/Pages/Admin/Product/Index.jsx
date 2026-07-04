import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { useState } from 'react';

export default function ProductIndex({ products, umkms, categories, filters }) {
    const [search, setSearch] = useState(filters.search || '');

    const handleSearch = (e) => {
        e.preventDefault();
        router.get('/admin/produk', { search, umkm_id: filters.umkm_id, category_id: filters.category_id }, { preserveState: true });
    };

    const handleDelete = (id, name) => {
        if (confirm(`Hapus produk "${name}"?`)) {
            router.delete(`/admin/produk/${id}`);
        }
    };

    return (
        <AdminLayout title="Kelola Produk">
            <Head title="Kelola Produk" />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
                <form onSubmit={handleSearch} style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                        placeholder="Cari produk..." style={{ padding: '10px 16px', borderRadius: 8, border: '1px solid #ddd', fontSize: 14, width: 200 }} />
                    <select value={filters.umkm_id || ''} onChange={(e) => router.get('/admin/produk', { ...filters, umkm_id: e.target.value }, { preserveState: true })}
                        style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid #ddd', fontSize: 14 }}>
                        <option value="">Semua UMKM</option>
                        {umkms.map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}
                    </select>
                    <button type="submit" style={{
                        background: '#4361ee', color: '#fff', padding: '10px 20px',
                        borderRadius: 8, border: 'none', fontWeight: 600, fontSize: 14, cursor: 'pointer',
                    }}>Cari</button>
                </form>
                <Link href="/admin/produk/create" style={{
                    background: 'linear-gradient(135deg, #e94560, #c23152)',
                    color: '#fff', padding: '10px 24px', borderRadius: 8,
                    textDecoration: 'none', fontWeight: 700, fontSize: 14,
                }}>+ Tambah Produk</Link>
            </div>

            <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: '#f8f9ff' }}>
                            <th style={thStyle}>Produk</th>
                            <th style={thStyle}>UMKM</th>
                            <th style={thStyle}>Kategori</th>
                            <th style={thStyle}>Harga</th>
                            <th style={thStyle}>Status</th>
                            <th style={thStyle}>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.data.map((product) => (
                            <tr key={product.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                                <td style={tdStyle}>
                                    <div style={{ fontWeight: 700, color: '#1a1a2e' }}>{product.name}</div>
                                    {product.is_featured && <span style={{ fontSize: 11, color: '#e94560', fontWeight: 600 }}>⭐ Unggulan</span>}
                                </td>
                                <td style={tdStyle}><span style={{ fontSize: 13 }}>{product.umkm?.name}</span></td>
                                <td style={tdStyle}><span style={{ fontSize: 13 }}>{product.category?.icon} {product.category?.name || '-'}</span></td>
                                <td style={tdStyle}><span style={{ fontWeight: 700, color: '#e94560', fontSize: 13 }}>{product.formatted_price}</span></td>
                                <td style={tdStyle}>
                                    <span style={{
                                        background: product.is_active ? '#d4edda' : '#f8d7da',
                                        color: product.is_active ? '#155724' : '#721c24',
                                        padding: '4px 10px', borderRadius: 12, fontSize: 12, fontWeight: 600,
                                    }}>{product.is_active ? 'Aktif' : 'Nonaktif'}</span>
                                </td>
                                <td style={tdStyle}>
                                    <div style={{ display: 'flex', gap: 8 }}>
                                        <Link href={`/admin/produk/${product.id}/edit`} style={{ color: '#4361ee', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Edit</Link>
                                        <button onClick={() => handleDelete(product.id, product.name)} style={{
                                            color: '#e94560', fontSize: 13, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer',
                                        }}>Hapus</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {products.data.length === 0 && <div style={{ textAlign: 'center', padding: 40, color: '#888' }}>Belum ada produk.</div>}
            </div>

            {products.last_page > 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 24 }}>
                    {products.links.map((link, i) => (
                        <Link key={i} href={link.url || '#'} style={{
                            padding: '8px 14px', borderRadius: 8,
                            background: link.active ? '#e94560' : '#fff',
                            color: link.active ? '#fff' : '#333',
                            textDecoration: 'none', fontSize: 13,
                            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                            pointerEvents: link.url ? 'auto' : 'none',
                            opacity: link.url ? 1 : 0.5,
                        }} dangerouslySetInnerHTML={{ __html: link.label }} />
                    ))}
                </div>
            )}
        </AdminLayout>
    );
}

const thStyle = { padding: '14px 16px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: '#888', textTransform: 'uppercase' };
const tdStyle = { padding: '14px 16px', fontSize: 14 };
