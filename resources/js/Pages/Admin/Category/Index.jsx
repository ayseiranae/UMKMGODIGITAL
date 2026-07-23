import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function CategoryIndex({ categories }) {
    const handleDelete = (id, name) => {
        if (confirm(`Hapus kategori "${name}"?`)) {
            router.delete(`/admin/kategori/${id}`);
        }
    };

    return (
        <AdminLayout title="Kelola Kategori">
            <Head title="Kelola Kategori" />
            <div className="admin-filter-bar" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 24 }}>
                <Link href="/admin/kategori/create" style={{
                    background: 'linear-gradient(135deg, #22577a 0%, #38a3a5 100%)',
                    color: '#fff', padding: '10px 24px', borderRadius: 8,
                    textDecoration: 'none', fontWeight: 700, fontSize: 14, textAlign: 'center',
                    boxShadow: '0 2px 8px rgba(34,87,122,0.3)',
                }}>+ Tambah Kategori</Link>
            </div>

            <div className="admin-table-wrapper">
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: '#f8f9ff' }}>
                            <th style={thStyle}>Icon</th>
                            <th style={thStyle}>Nama</th>
                            <th style={thStyle}>Urutan</th>
                            <th style={thStyle}>Produk</th>
                            <th style={thStyle}>Status</th>
                            <th style={thStyle}>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.data.map((cat) => (
                            <tr key={cat.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                                <td style={tdStyle}><span style={{ fontSize: 24 }}>{cat.icon}</span></td>
                                <td style={tdStyle}>
                                    <div style={{ fontWeight: 700, color: '#1a1a2e' }}>{cat.name}</div>
                                    <div style={{ fontSize: 12, color: '#888' }}>{cat.description}</div>
                                </td>
                                <td style={tdStyle}>{cat.sort_order}</td>
                                <td style={tdStyle}>
                                    <span style={{ background: '#d4edda', color: '#155724', padding: '4px 10px', borderRadius: 12, fontSize: 12, fontWeight: 600 }}>{cat.products_count}</span>
                                </td>
                                <td style={tdStyle}>
                                    <span style={{
                                        background: cat.is_active ? '#d4edda' : '#f8d7da',
                                        color: cat.is_active ? '#155724' : '#721c24',
                                        padding: '4px 10px', borderRadius: 12, fontSize: 12, fontWeight: 600,
                                    }}>{cat.is_active ? 'Aktif' : 'Nonaktif'}</span>
                                </td>
                                <td style={tdStyle}>
                                    <div style={{ display: 'flex', gap: 8 }}>
                                        <Link href={`/admin/kategori/${cat.id}/edit`} style={{ color: '#155724', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Edit</Link>
                                        <button onClick={() => handleDelete(cat.id, cat.name)} style={{
                                            color: '#dc2626', fontSize: 13, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer',
                                        }}>Hapus</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}

const thStyle = { padding: '14px 16px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: '#888', textTransform: 'uppercase' };
const tdStyle = { padding: '14px 16px', fontSize: 14 };
