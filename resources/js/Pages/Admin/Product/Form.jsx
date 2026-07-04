import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function ProductForm({ product, umkms, categories }) {
    const isEdit = !!product;
    const { data, setData, post, processing, errors } = useForm({
        umkm_id: product?.umkm_id || '',
        category_id: product?.category_id || '',
        name: product?.name || '',
        description: product?.description || '',
        price: product?.price || '',
        price_label: product?.price_label || '',
        image: null,
        is_featured: product?.is_featured ?? false,
        is_active: product?.is_active ?? true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            post(`/admin/produk/${product.id}`, { _method: 'PUT', forceFormData: true });
        } else {
            post('/admin/produk', { forceFormData: true });
        }
    };

    return (
        <AdminLayout title={isEdit ? 'Edit Produk' : 'Tambah Produk'}>
            <Head title={isEdit ? 'Edit Produk' : 'Tambah Produk'} />
            <div style={{ maxWidth: 700 }}>
                <Link href="/admin/produk" style={{ color: '#888', textDecoration: 'none', fontSize: 13, marginBottom: 20, display: 'inline-block' }}>← Kembali</Link>
                <form onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 24, color: '#1a1a2e' }}>{isEdit ? 'Edit Produk' : 'Tambah Produk Baru'}</h3>

                    <FormField label="UMKM *" error={errors.umkm_id}>
                        <select value={data.umkm_id} onChange={(e) => setData('umkm_id', e.target.value)} style={inputStyle}>
                            <option value="">Pilih UMKM</option>
                            {umkms.map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}
                        </select>
                    </FormField>

                    <FormField label="Kategori" error={errors.category_id}>
                        <select value={data.category_id} onChange={(e) => setData('category_id', e.target.value)} style={inputStyle}>
                            <option value="">Pilih Kategori</option>
                            {categories.map((c) => <option key={c.id} value={c.id}>{c.icon} {c.name}</option>)}
                        </select>
                    </FormField>

                    <FormField label="Nama Produk *" error={errors.name}>
                        <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} style={inputStyle} placeholder="Nama produk" />
                    </FormField>

                    <FormField label="Deskripsi" error={errors.description}>
                        <textarea value={data.description} onChange={(e) => setData('description', e.target.value)} style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }} placeholder="Deskripsi produk..." />
                    </FormField>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                        <FormField label="Harga (Rp)" error={errors.price}>
                            <input type="number" value={data.price} onChange={(e) => setData('price', e.target.value)} style={inputStyle} placeholder="25000" />
                        </FormField>
                        <FormField label="Label Harga (opsional)" error={errors.price_label}>
                            <input type="text" value={data.price_label} onChange={(e) => setData('price_label', e.target.value)} style={inputStyle} placeholder="Mulai dari Rp 15.000" />
                        </FormField>
                    </div>

                    <FormField label="Foto Produk" error={errors.image}>
                        <input type="file" accept="image/*" onChange={(e) => setData('image', e.target.files[0])} style={inputStyle} />
                    </FormField>

                    <div style={{ display: 'flex', gap: 24, marginBottom: 24 }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                            <input type="checkbox" checked={data.is_featured} onChange={(e) => setData('is_featured', e.target.checked)} />
                            <span style={{ fontSize: 14 }}>⭐ Produk Unggulan</span>
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                            <input type="checkbox" checked={data.is_active} onChange={(e) => setData('is_active', e.target.checked)} />
                            <span style={{ fontSize: 14 }}>Aktif</span>
                        </label>
                    </div>

                    <div style={{ display: 'flex', gap: 12 }}>
                        <button type="submit" disabled={processing} style={{
                            background: processing ? '#ccc' : 'linear-gradient(135deg, #e94560, #c23152)',
                            color: '#fff', padding: '12px 32px', borderRadius: 10,
                            border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer',
                        }}>{processing ? 'Menyimpan...' : (isEdit ? 'Simpan' : 'Tambah Produk')}</button>
                        <Link href="/admin/produk" style={{
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
