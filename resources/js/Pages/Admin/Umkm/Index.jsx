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

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
                <form onSubmit={handleSearch} style={{ display: 'flex', gap: 8 }}>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                        placeholder="Cari UMKM..."
                        style={{ padding: '10px 16px', borderRadius: 8, border: '1px solid #ddd', fontSize: 14, width: 250 }}
                    />
                    <button type="submit" style={{
                        background: '#4361ee', color: '#fff', padding: '10px 20px',
                        borderRadius: 8, border: 'none', fontWeight: 600, fontSize: 14, cursor: 'pointer',
                    }}>Cari</button>
                </form>
                <Link href="/admin/umkm/create" style={{
                    background: 'linear-gradient(135deg, #4361ee, #3a56d4)',
                    color: '#fff', padding: '10px 24px', borderRadius: 8,
                    textDecoration: 'none', fontWeight: 700, fontSize: 14,
                }}>
                    + Tambah UMKM
                </Link>
            </div>

            <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: '#f8f9ff' }}>
                            <th style={thStyle}>Nama UMKM</th>
                            <th style={thStyle}>Pemilik</th>
                            <th style={thStyle}>Produk</th>
                            <th style={thStyle}>Status</th>
                            <th style={thStyle}>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {umkms.data.map((umkm) => (
                            <tr key={umkm.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                                <td style={tdStyle}>
                                    <div style={{ fontWeight: 700, color: '#1a1a2e' }}>{umkm.name}</div>
                                    <div style={{ fontSize: 12, color: '#888' }}>📍 {umkm.address?.substring(0, 40)}...</div>
                                </td>
                                <td style={tdStyle}>{umkm.owner_name}</td>
                                <td style={tdStyle}>
                                    <span style={{ background: '#f0f4ff', padding: '4px 10px', borderRadius: 12, fontSize: 12, fontWeight: 600 }}>
                                        {umkm.products_count}
                                    </span>
                                </td>
                                <td style={tdStyle}>
                                    <span style={{
                                        background: umkm.is_active ? '#d4edda' : '#f8d7da',
                                        color: umkm.is_active ? '#155724' : '#721c24',
                                        padding: '4px 10px', borderRadius: 12,
                                        fontSize: 12, fontWeight: 600,
                                    }}>
                                        {umkm.is_active ? 'Aktif' : 'Nonaktif'}
                                    </span>
                                </td>
                                <td style={tdStyle}>
                                    <div style={{ display: 'flex', gap: 8 }}>
                                        <Link href={`/admin/umkm/${umkm.id}/edit`} style={{
                                            color: '#4361ee', fontSize: 13, fontWeight: 600, textDecoration: 'none',
                                        }}>Edit</Link>
                                        <button onClick={() => handleDelete(umkm.id, umkm.name)} style={{
                                            color: '#e94560', fontSize: 13, fontWeight: 600,
                                            background: 'none', border: 'none', cursor: 'pointer',
                                        }}>Hapus</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {umkms.data.length === 0 && (
                    <div style={{ textAlign: 'center', padding: 40, color: '#888' }}>
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
                            background: link.active ? '#4361ee' : '#fff',
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
