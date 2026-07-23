import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function SettingEdit({ settings }) {
    const { data, setData, put, processing, errors } = useForm({
        wa_daftar: settings.wa_daftar || '',
        wa_desa: settings.wa_desa || '',
        email: settings.email || '',
        facebook: settings.facebook || '',
        youtube: settings.youtube || '',
        alamat: settings.alamat || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put('/admin/pengaturan');
    };

    return (
        <AdminLayout title="Pengaturan Website">
            <Head title="Pengaturan Website" />

            <div style={{ maxWidth: 800 }}>
                <form onSubmit={handleSubmit} className="admin-form-card" style={{ background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8, color: '#1a1a2e' }}>
                        Pengaturan Informasi & Kontak Desa
                    </h3>
                    <p style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
                        Kelola data kontak dan tautan sosial media desa yang ditampilkan pada bagian footer website.
                    </p>

                    {/* WhatsApp Pendaftaran */}
                    <FormField label="WhatsApp Pendaftaran UMKM" error={errors.wa_daftar} helpText="Masukkan nomor WA (Contoh: 081234567890)">
                        <InputGroup prefix="wa.me/">
                            <input type="text" value={data.wa_daftar} onChange={(e) => setData('wa_daftar', e.target.value)} style={inputInner} placeholder="081234567890" />
                        </InputGroup>
                    </FormField>

                    <div className="admin-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                        {/* WhatsApp Kontak Desa */}
                        <FormField label="WhatsApp Kontak Desa" error={errors.wa_desa} helpText="Masukkan nomor WA (Contoh: 081234567890)">
                            <InputGroup prefix="wa.me/">
                                <input type="text" value={data.wa_desa} onChange={(e) => setData('wa_desa', e.target.value)} style={inputInner} placeholder="081234567890" />
                            </InputGroup>
                        </FormField>

                        {/* Email Desa */}
                        <FormField label="Email Desa" error={errors.email} helpText="Masukkan alamat email desa">
                            <InputGroup prefix="mailto:">
                                <input type="text" value={data.email} onChange={(e) => setData('email', e.target.value)} style={inputInner} placeholder="desa.birowo@gmail.com" />
                            </InputGroup>
                        </FormField>
                    </div>

                    <div className="admin-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                        {/* Facebook Desa */}
                        <FormField label="Facebook Desa" error={errors.facebook} helpText="Masukkan username/nama halaman FB (Contoh: desabirowo)">
                            <InputGroup prefix="facebook.com/">
                                <input type="text" value={data.facebook} onChange={(e) => setData('facebook', e.target.value)} style={inputInner} placeholder="desabirowo" />
                            </InputGroup>
                        </FormField>

                        {/* YouTube Desa */}
                        <FormField label="YouTube Desa" error={errors.youtube} helpText="Masukkan handle/nama channel (Contoh: desabirowo)">
                            <InputGroup prefix="youtube.com/@">
                                <input type="text" value={data.youtube} onChange={(e) => setData('youtube', e.target.value)} style={inputInner} placeholder="desabirowo" />
                            </InputGroup>
                        </FormField>
                    </div>

                    <FormField label="Alamat Fisik Desa" error={errors.alamat}>
                        <textarea value={data.alamat} onChange={(e) => setData('alamat', e.target.value)} style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }} placeholder="Alamat lengkap Kantor Desa..." />
                    </FormField>

                    <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                        <button type="submit" disabled={processing} style={{
                            background: processing ? '#ccc' : 'linear-gradient(135deg, #4361ee, #3a56d4)',
                            color: '#fff', padding: '12px 32px', borderRadius: 10,
                            border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer',
                        }}>
                            {processing ? 'Menyimpan...' : 'Simpan Pengaturan'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}

/* ─── Sub-components ──────────────────────────────────────────────── */

function FormField({ label, error, helpText, children }) {
    return (
        <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#333', marginBottom: 6 }}>
                {label}
            </label>
            {children}
            {helpText && <div style={{ fontSize: 11, color: '#888', marginTop: 4 }}>{helpText}</div>}
            {error && <div style={{ fontSize: 12, color: '#dc2626', marginTop: 4 }}>{error}</div>}
        </div>
    );
}

function InputGroup({ prefix, children }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'stretch',
            borderRadius: 8,
            border: '1px solid #ddd',
            overflow: 'hidden',
            background: '#fff',
        }}>
            <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0 12px',
                background: '#f1f5f9',
                color: '#64748b',
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
                borderRight: '1px solid #ddd',
                whiteSpace: 'nowrap',
                userSelect: 'none',
            }}>
                {prefix}
            </span>
            {children}
        </div>
    );
}

/* ─── Styles ──────────────────────────────────────────────────────── */

const inputStyle = {
    width: '100%', padding: '10px 14px', borderRadius: 8,
    border: '1px solid #ddd', fontSize: 14, outline: 'none',
    fontFamily: 'Inter, sans-serif',
};

const inputInner = {
    flex: 1, width: '100%', padding: '10px 14px',
    border: 'none', fontSize: 14, outline: 'none',
    fontFamily: 'Inter, sans-serif',
    background: 'transparent',
};
