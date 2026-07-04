import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function CategoryForm({ category }) {
    const isEdit = !!category;
    const { data, setData, post, put, processing, errors } = useForm({
        name: category?.name || '',
        icon: category?.icon || '',
        description: category?.description || '',
        sort_order: category?.sort_order ?? 0,
        is_active: category?.is_active ?? true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            put(`/admin/kategori/${category.id}`);
        } else {
            post('/admin/kategori');
        }
    };

    return (
        <AdminLayout title={isEdit ? 'Edit Kategori' : 'Tambah Kategori'}>
            <Head title={isEdit ? 'Edit Kategori' : 'Tambah Kategori'} />
            <div style={{ maxWidth: 600 }}>
                <Link href="/admin/kategori" style={{ color: '#888', textDecoration: 'none', fontSize: 13, marginBottom: 20, display: 'inline-block' }}>← Kembali</Link>
                <form onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 24, color: '#1a1a2e' }}>{isEdit ? 'Edit Kategori' : 'Tambah Kategori Baru'}</h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px', gap: 16 }}>
                        <FormField label="Nama Kategori *" error={errors.name}>
                            <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} style={inputStyle} placeholder="Contoh: Makanan" />
                        </FormField>
                        <FormField label="Icon" error={errors.icon}>
                            <input type="text" value={data.icon} onChange={(e) => setData('icon', e.target.value)} style={inputStyle} placeholder="🍜" />
                        </FormField>
                    </div>

                    <FormField label="Deskripsi" error={errors.description}>
                        <textarea value={data.description} onChange={(e) => setData('description', e.target.value)} style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }} placeholder="Deskripsi kategori..." />
                    </FormField>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                        <FormField label="Urutan" error={errors.sort_order}>
                            <input type="number" value={data.sort_order} onChange={(e) => setData('sort_order', parseInt(e.target.value))} style={inputStyle} />
                        </FormField>
                        <FormField label="Status">
                            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', paddingTop: 8 }}>
                                <input type="checkbox" checked={data.is_active} onChange={(e) => setData('is_active', e.target.checked)} />
                                <span style={{ fontSize: 14 }}>Aktif</span>
                            </label>
                        </FormField>
                    </div>

                    <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                        <button type="submit" disabled={processing} style={{
                            background: processing ? '#ccc' : 'linear-gradient(135deg, #845ec2, #6c3ea1)',
                            color: '#fff', padding: '12px 32px', borderRadius: 10,
                            border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer',
                        }}>{processing ? 'Menyimpan...' : (isEdit ? 'Simpan' : 'Tambah Kategori')}</button>
                        <Link href="/admin/kategori" style={{
                            background: '#f0f0f0', color: '#333', padding: '12px 24px',
                            borderRadius: 10, textDecoration: 'none', fontWeight: 600, fontSize: 14,
                        }}>Batal</Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}

function FormField({ label, error, children }) {
    return (
        <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#333', marginBottom: 6 }}>{label}</label>
            {children}
            {error && <div style={{ fontSize: 12, color: '#e94560', marginTop: 4 }}>{error}</div>}
        </div>
    );
}

const inputStyle = { width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #ddd', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif' };
