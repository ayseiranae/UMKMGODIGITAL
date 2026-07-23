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

            <div className="admin-filter-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
                <form onSubmit={handleSearch} style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                        placeholder="Cari produk..." style={{ padding: '10px 16px', borderRadius: 8, border: '1px solid #cbd5e1', fontSize: 14, width: '100%', outline: 'none' }} />
                    <select value={filters.umkm_id || ''} onChange={(e) => router.get('/admin/produk', { ...filters, umkm_id: e.target.value }, { preserveState: true })}
                        style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid #cbd5e1', fontSize: 14, outline: 'none' }}>
                        <option value="">Semua UMKM</option>
                        {umkms.map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}
                    </select>
                    <button type="submit" style={{
                        background: '#38a3a5', color: '#fff', padding: '10px 20px',
                        borderRadius: 8, border: 'none', fontWeight: 600, fontSize: 14, cursor: 'pointer',
                    }}>Cari</button>
                </form>
                <Link href="/admin/produk/create" style={{
                    background: 'linear-gradient(135deg, #22577a 0%, #38a3a5 100%)',
                    color: '#fff', padding: '10px 24px', borderRadius: 8,
                    textDecoration: 'none', fontWeight: 700, fontSize: 14, textAlign: 'center',
                    boxShadow: '0 2px 8px rgba(34,87,122,0.3)',
                }}>+ Tambah Produk</Link>
            </div>

            <div className="admin-table-wrapper">
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: '#f4fbf7', borderBottom: '1px solid #e2e8f0' }}>
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
                            <tr key={product.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={tdStyle}>
                                    <div style={{ fontWeight: 700, color: '#0f172a' }}>{product.name}</div>
                                    {product.is_featured && <span style={{ fontSize: 11, color: '#d97706', fontWeight: 600 }}>Unggulan</span>}
                                </td>
                                <td style={tdStyle}><span style={{ fontSize: 13, color: '#334155' }}>{product.umkm?.name}</span></td>
                                <td style={tdStyle}><span style={{ fontSize: 13, color: '#334155' }}>{product.category?.name || '-'}</span></td>
                                <td style={tdStyle}><span style={{ fontWeight: 700, color: '#22577a', fontSize: 13 }}>{product.formatted_price}</span></td>
                                <td style={tdStyle}>
                                    <span style={{
                                        background: product.is_active ? '#d4edda' : '#f8d7da',
                                        color: product.is_active ? '#155724' : '#991b1b',
                                        padding: '4px 10px', borderRadius: 12, fontSize: 12, fontWeight: 600,
                                    }}>{product.is_active ? 'Aktif' : 'Nonaktif'}</span>
                                </td>
                                <td style={tdStyle}>
                                    <div style={{ display: 'flex', gap: 8 }}>
                                        <Link href={`/admin/produk/${product.id}/edit`} style={{ color: '#155724', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Edit</Link>
                                        <button onClick={() => handleDelete(product.id, product.name)} style={{
                                            color: '#dc2626', fontSize: 13, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer',
                                        }}>Hapus</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {products.data.length === 0 && <div style={{ textAlign: 'center', padding: 40, color: '#64748b' }}>Belum ada produk.</div>}
            </div>

            {products.last_page > 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 24 }}>
                    {products.links.map((link, i) => (
                        <Link key={i} href={link.url || '#'} style={{
                            padding: '8px 14px', borderRadius: 8,
                            background: link.active ? '#38a3a5' : '#fff',
                            color: link.active ? '#fff' : '#0f172a',
                            textDecoration: 'none', fontSize: 13,
                            boxShadow: '0 1px 4px rgba(30,58,138,0.1)',
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
