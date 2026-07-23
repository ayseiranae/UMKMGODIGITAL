import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function UmkmForm({ umkm, contactTypes }) {
    const isEdit = !!umkm;
    const { data, setData, post, processing, errors } = useForm({
        _method: isEdit ? 'PUT' : 'POST',
        name: umkm?.name || '',
        owner_name: umkm?.owner_name || '',
        description: umkm?.description || '',
        address: umkm?.address || '',
        maps_url: umkm?.maps_url || '',
        phone: umkm?.phone || '',
        whatsapp: umkm?.whatsapp || '',
        photo: null,
        is_active: umkm?.is_active ?? true,
        contact_links: umkm?.contact_links || [],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            post(`/admin/umkm/${umkm.id}`, { forceFormData: true });
        } else {
            post('/admin/umkm', { forceFormData: true });
        }
    };

    const addContactLink = () => {
        setData('contact_links', [...data.contact_links, { type: 'whatsapp', label: '', url: '' }]);
    };

    const removeContactLink = (index) => {
        setData('contact_links', data.contact_links.filter((_, i) => i !== index));
    };

    const updateContactLink = (index, field, value) => {
        const updated = [...data.contact_links];
        updated[index] = { ...updated[index], [field]: value };
        setData('contact_links', updated);
    };

    return (
        <AdminLayout title={isEdit ? 'Edit UMKM' : 'Tambah UMKM'}>
            <Head title={isEdit ? 'Edit UMKM' : 'Tambah UMKM'} />

            <div style={{ maxWidth: 800 }}>
                <Link href="/admin/umkm" style={{ color: '#888', textDecoration: 'none', fontSize: 13, marginBottom: 20, display: 'inline-block' }}>
                    ← Kembali
                </Link>

                <form onSubmit={handleSubmit} className="admin-form-card" style={{ background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 24, color: '#1a1a2e' }}>
                        {isEdit ? 'Edit UMKM' : 'Tambah UMKM Baru'}
                    </h3>

                    <div className="admin-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                        <FormField label="Nama UMKM *" error={errors.name}>
                            <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} style={inputStyle} placeholder="Contoh: Dapur Bu Sari" />
                        </FormField>
                        <FormField label="Nama Pemilik *" error={errors.owner_name}>
                            <input type="text" value={data.owner_name} onChange={(e) => setData('owner_name', e.target.value)} style={inputStyle} placeholder="Contoh: Ibu Sari Wulandari" />
                        </FormField>
                    </div>

                    <FormField label="Deskripsi *" error={errors.description}>
                        <textarea value={data.description} onChange={(e) => setData('description', e.target.value)} style={{ ...inputStyle, minHeight: 100, resize: 'vertical' }} placeholder="Deskripsikan UMKM ini..." />
                    </FormField>

                    <FormField label="Alamat *" error={errors.address}>
                        <input type="text" value={data.address} onChange={(e) => setData('address', e.target.value)} style={inputStyle} placeholder="Alamat lengkap" />
                    </FormField>

                    <FormField label="Link Google Maps (Opsional)" error={errors.maps_url}>
                        <input type="url" value={data.maps_url} onChange={(e) => setData('maps_url', e.target.value)} style={inputStyle} placeholder="https://maps.google.com/..." />
                    </FormField>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                        <FormField label="Telepon" error={errors.phone}>
                            <input type="text" value={data.phone} onChange={(e) => setData('phone', e.target.value)} style={inputStyle} placeholder="08xxx" />
                        </FormField>
                        <FormField label="WhatsApp" error={errors.whatsapp}>
                            <input type="text" value={data.whatsapp} onChange={(e) => setData('whatsapp', e.target.value)} style={inputStyle} placeholder="628xxx" />
                        </FormField>
                    </div>

                    <FormField label="Foto UMKM" error={errors.photo}>
                        <input type="file" accept="image/*" onChange={(e) => setData('photo', e.target.files[0])} style={inputStyle} />
                    </FormField>

                    <FormField label="Status">
                        <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                            <input type="checkbox" checked={data.is_active} onChange={(e) => setData('is_active', e.target.checked)} />
                            <span style={{ fontSize: 14 }}>Aktif (tampil di katalog publik)</span>
                        </label>
                    </FormField>

                    {/* Contact Links */}
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                            <h4 style={{ fontSize: 15, fontWeight: 700, color: '#1a1a2e' }}>Link Kontak & Marketplace</h4>
                            <button type="button" onClick={addContactLink} style={{
                                background: 'linear-gradient(135deg, #22577a 0%, #38a3a5 100%)',
                                color: '#fff', border: 'none',
                                padding: '8px 16px', borderRadius: 8, fontSize: 13,
                                fontWeight: 700, cursor: 'pointer',
                                boxShadow: '0 2px 6px rgba(34,87,122,0.25)',
                            }}>
                                + Tambah Link
                            </button>
                        </div>

                        {data.contact_links.map((link, index) => (
                            <div key={index} style={{
                                display: 'grid', gridTemplateColumns: '120px 1fr 1fr auto',
                                gap: 8, marginBottom: 8, alignItems: 'center',
                            }}>
                                <select value={link.type} onChange={(e) => updateContactLink(index, 'type', e.target.value)}
                                    style={{ ...inputStyle, marginBottom: 0 }}>
                                    {Object.keys(contactTypes || {}).map((type) => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                                <input type="text" value={link.label} onChange={(e) => updateContactLink(index, 'label', e.target.value)}
                                    placeholder="Label" style={{ ...inputStyle, marginBottom: 0 }} />
                                <input type="url" value={link.url} onChange={(e) => updateContactLink(index, 'url', e.target.value)}
                                    placeholder="https://..." style={{ ...inputStyle, marginBottom: 0 }} />
                                <button type="button" onClick={() => removeContactLink(index)} style={{
                                    background: '#fee', color: '#dc2626', border: 'none',
                                    padding: '8px 12px', borderRadius: 8, cursor: 'pointer', fontSize: 14,
                                }}>✕</button>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: 12 }}>
                        <button type="submit" disabled={processing} style={{
                            background: processing ? '#ccc' : 'linear-gradient(135deg, #4361ee, #3a56d4)',
                            color: '#fff', padding: '12px 32px', borderRadius: 10,
                            border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer',
                        }}>
                            {processing ? 'Menyimpan...' : (isEdit ? 'Simpan Perubahan' : 'Tambah UMKM')}
                        </button>
                        <Link href="/admin/umkm" style={{
                            background: '#f0f0f0', color: '#333', padding: '12px 24px',
                            borderRadius: 10, textDecoration: 'none', fontWeight: 600, fontSize: 14,
                        }}>
                            Batal
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}

function FormField({ label, error, children }) {
    return (
        <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#333', marginBottom: 6 }}>
                {label}
            </label>
            {children}
            {error && <div style={{ fontSize: 12, color: '#dc2626', marginTop: 4 }}>{error}</div>}
        </div>
    );
}

const inputStyle = {
    width: '100%', padding: '10px 14px', borderRadius: 8,
    border: '1px solid #ddd', fontSize: 14, outline: 'none',
    fontFamily: 'Inter, sans-serif',
};
