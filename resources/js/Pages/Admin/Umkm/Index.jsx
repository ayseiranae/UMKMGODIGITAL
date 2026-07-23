import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { useState } from 'react';

export default function UmkmIndex({ umkms, filters }) {
    const [search, setSearch] = useState(filters.search || '');

    const handleSearch = (e) => {
        e.preventDefault();
        router.get('/admin/umkm', { search }, { preserveState: true });
    };

    const handleDelete = (id, name) => {
        if (confirm(`Hapus UMKM "${name}"? Semua produk terkait juga akan dihapus.`)) {
            router.delete(`/admin/umkm/${id}`);
        }
    };

    return (
        <AdminLayout title="Kelola UMKM">
            <Head title="Kelola UMKM" />

            <div className="admin-filter-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
                <form onSubmit={handleSearch} style={{ display: 'flex', gap: 8 }}>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                        placeholder="Cari UMKM..."
                        style={{ padding: '10px 16px', borderRadius: 8, border: '1px solid #cbd5e1', fontSize: 14, width: '100%', outline: 'none' }}
                    />
                    <button type="submit" style={{
                        background: '#38a3a5', color: '#fff', padding: '10px 20px',
                        borderRadius: 8, border: 'none', fontWeight: 600, fontSize: 14, cursor: 'pointer',
                    }}>Cari</button>
                </form>
                <Link href="/admin/umkm/create" style={{
                    background: 'linear-gradient(135deg, #22577a 0%, #38a3a5 100%)',
                    color: '#fff', padding: '10px 24px', borderRadius: 8,
                    textDecoration: 'none', fontWeight: 700, fontSize: 14, textCenter: 'center', textAlign: 'center',
                    boxShadow: '0 2px 8px rgba(34,87,122,0.3)',
                }}>
                    + Tambah UMKM
                </Link>
            </div>

            <div className="admin-table-wrapper">
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: '#f4fbf7', borderBottom: '1px solid #e2e8f0' }}>
                            <th style={thStyle}>Nama UMKM</th>
                            <th style={thStyle}>Pemilik</th>
                            <th style={thStyle}>Produk</th>
                            <th style={thStyle}>Status</th>
                            <th style={thStyle}>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {umkms.data.map((umkm) => (
                            <tr key={umkm.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={tdStyle}>
                                    <div style={{ fontWeight: 700, color: '#0f172a' }}>{umkm.name}</div>
                                    <div style={{ fontSize: 12, color: '#64748b' }}>{umkm.address?.substring(0, 40)}...</div>
                                </td>
                                <td style={tdStyle}>{umkm.owner_name}</td>
                                <td style={tdStyle}>
                                    <span style={{ background: '#d4edda', color: '#155724', padding: '4px 10px', borderRadius: 12, fontSize: 12, fontWeight: 600 }}>
                                        {umkm.products_count}
                                    </span>
                                </td>
                                <td style={tdStyle}>
                                    <span style={{
                                        background: umkm.is_active ? '#d4edda' : '#f8d7da',
                                        color: umkm.is_active ? '#155724' : '#991b1b',
                                        padding: '4px 10px', borderRadius: 12,
                                        fontSize: 12, fontWeight: 600,
                                    }}>
                                        {umkm.is_active ? 'Aktif' : 'Nonaktif'}
                                    </span>
                                </td>
                                <td style={tdStyle}>
                                    <div style={{ display: 'flex', gap: 8 }}>
                                        <Link href={`/admin/umkm/${umkm.id}/edit`} style={{
                                            color: '#155724', fontSize: 13, fontWeight: 600, textDecoration: 'none',
                                        }}>Edit</Link>
                                        <button onClick={() => handleDelete(umkm.id, umkm.name)} style={{
                                            color: '#dc2626', fontSize: 13, fontWeight: 600,
                                            background: 'none', border: 'none', cursor: 'pointer',
                                        }}>Hapus</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {umkms.data.length === 0 && (
                    <div style={{ textAlign: 'center', padding: 40, color: '#64748b' }}>
                        Belum ada UMKM terdaftar.
                    </div>
                )}
            </div>

            {/* Pagination */}
            {umkms.last_page > 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 24 }}>
                    {umkms.links.map((link, i) => (
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
