import { Link, usePage } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';
import { formatWaUrl, formatFacebookUrl, formatYoutubeUrl, formatMailtoUrl } from '@/utils/formatSettingUrl';

export default function PublicLayout({ children }) {
    const { auth, settings = {} } = usePage().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);

    // Close mobile menu when clicking outside
    useEffect(() => {
        if (!mobileMenuOpen) return;
        const handleClickOutside = (e) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
                setMobileMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [mobileMenuOpen]);

    return (
        <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
            {/* Navigation */}
            <nav style={{
                background: 'linear-gradient(135deg, #22577a 0%, #38a3a5 100%)',
                boxShadow: '0 4px 20px rgba(34,87,122,0.3)',
                position: 'sticky',
                top: 0,
                zIndex: 50,
            }}>
                {/* Mobile backdrop overlay */}
                {mobileMenuOpen && (
                    <div
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 40,
                            background: 'rgba(0,0,0,0.3)',
                            backdropFilter: 'blur(2px)',
                        }}
                    />
                )}
                <div ref={mobileMenuRef} style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 41 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 70 }}>
                        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
                            <div>
                                <div style={{ fontSize: 18, fontWeight: 800, color: '#ffffff', letterSpacing: '-0.5px' }}>
                                    UMKM <span style={{ color: '#80ed99' }}>Go Digital</span>
                                </div>
                                <div style={{ fontSize: 11, color: '#c7f9cc', letterSpacing: '2px', textTransform: 'uppercase' }}>
                                    Desa Birowo
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="desktop-menu" style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                            <NavItem href="/" label="Beranda" />
                            <NavItem href="/umkm" label="UMKM" />
                            <NavItem href="/produk" label="Produk" />
                            {auth.user ? (
                                <Link href="/admin/dashboard" style={{
                                    background: 'linear-gradient(135deg, #57cc99, #38a3a5)',
                                    color: '#fff',
                                    padding: '8px 20px',
                                    borderRadius: 8,
                                    textDecoration: 'none',
                                    fontSize: 14,
                                    fontWeight: 700,
                                    marginLeft: 8,
                                    boxShadow: '0 2px 10px rgba(87,204,153,0.4)',
                                    transition: 'transform 0.2s',
                                }}>
                                    Dashboard
                                </Link>
                            ) : (
                                <Link href="/login" style={{
                                    color: '#c7f9cc',
                                    padding: '8px 16px',
                                    textDecoration: 'none',
                                    fontSize: 14,
                                    fontWeight: 500,
                                }}>
                                    Login
                                </Link>
                            )}
                        </div>

                        {/* Mobile Menu Action & Hamburger Button */}
                        <div className="mobile-header-actions" style={{ display: 'none', alignItems: 'center', gap: 8 }}>
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="mobile-menu-btn"
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: '#ffffff',
                                    fontSize: 24,
                                    cursor: 'pointer',
                                    padding: '4px',
                                    marginLeft: 4,
                                }}
                            >
                                {mobileMenuOpen ? '✕' : '☰'}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    {mobileMenuOpen && (
                        <div className="mobile-menu" style={{
                            paddingBottom: 16,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 6,
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            paddingTop: 12,
                            marginTop: 8,
                        }}>
                            <NavItem href="/" label="Beranda" mobile />
                            <NavItem href="/umkm" label="UMKM" mobile />
                            <NavItem href="/produk" label="Produk" mobile />

                            {auth.user ? (
                                <Link href="/admin/dashboard" style={{
                                    background: 'linear-gradient(135deg, #57cc99, #38a3a5)',
                                    color: '#fff',
                                    padding: '10px 16px',
                                    borderRadius: 8,
                                    textDecoration: 'none',
                                    fontSize: 14,
                                    fontWeight: 700,
                                    textAlign: 'center',
                                    marginTop: 6,
                                    boxShadow: '0 2px 8px rgba(87,204,153,0.3)',
                                }}>
                                    Dashboard Admin
                                </Link>
                            ) : (
                                <Link href="/login" style={{
                                    background: 'linear-gradient(135deg, #57cc99, #38a3a5)',
                                    color: '#fff',
                                    padding: '10px 16px',
                                    borderRadius: 8,
                                    textDecoration: 'none',
                                    fontSize: 14,
                                    fontWeight: 700,
                                    textAlign: 'center',
                                    marginTop: 6,
                                    boxShadow: '0 2px 8px rgba(87,204,153,0.3)',
                                }}>
                                    Login Admin
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </nav>

            {/* Main Content */}
            <main style={{ flex: 1 }}>
                {children}
            </main>

            {/* Footer */}
            <footer style={{
                background: 'linear-gradient(135deg, #0b0f19 0%, #111827 100%)',
                color: '#9ca3af',
                padding: '64px 24px 32px',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: 40,
                        marginBottom: 48,
                    }}>
                        {/* Branding */}
                        <div style={{ textAlign: 'left' }}>
                            <h3 style={{ fontSize: 20, fontWeight: 800, color: '#ffffff', marginBottom: 16 }}>
                                UMKM Desa Birowo
                            </h3>
                            <p style={{ fontSize: 14, lineHeight: 1.8, color: '#9ca3af', maxWidth: 320, margin: 0 }}>
                                Platform katalog digital resmi UMKM Desa Birowo, Kecamatan Binangun, Kabupaten Blitar.
                                Mendukung transformasi digital ekonomi masyarakat desa.
                            </p>
                        </div>

                        {/* Navigasi */}
                        <div>
                            <h4 style={{ color: '#f3f4f6', fontSize: 14, fontWeight: 700, marginBottom: 18, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Navigasi
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                <Link href="/" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }} className="footer-link">
                                    Beranda
                                </Link>
                                <Link href="/katalog" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }} className="footer-link">
                                    Katalog Produk
                                </Link>
                                {settings.wa_daftar && (
                                    <a href={formatWaUrl(settings.wa_daftar)} target="_blank" rel="noreferrer" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 4, transition: 'color 0.2s' }} className="footer-link">
                                        Daftar UMKM ↗
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Kontak Desa */}
                        <div>
                            <h4 style={{ color: '#f3f4f6', fontSize: 14, fontWeight: 700, marginBottom: 18, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Kontak Desa
                            </h4>

                            {/* Sosmed & Kontak Direct (Horizontal Bar) */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                                {settings.wa_desa && (
                                    <a href={formatWaUrl(settings.wa_desa)} target="_blank" rel="noreferrer" aria-label="WhatsApp Desa" title="WhatsApp Desa" className="footer-icon-link footer-icon-wa">
                                        <svg style={{ width: 18, height: 18, fill: 'currentColor' }} viewBox="0 0 24 24">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.238 1.464 4.887 1.465 5.513.002 9.996-4.48 10.001-9.995.002-2.673-1.036-5.185-2.924-7.076C16.626 1.657 14.116 1.06 11.45 1.06 5.933 1.06 1.45 5.541 1.445 11.058c-.001 1.77.472 3.5 1.371 5.048L1.83 20.3l4.817-1.146zM17.18 14.5c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-1.35-.67-2.33-1.18-3.21-2.7-.23-.4-.23-.66-.08-.8.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.25-.6-.5-.52-.68-.53-.17-.01-.38-.01-.58-.01-.2 0-.53.07-.8.38-.28.3-1.08 1.06-1.08 2.59 0 1.53 1.11 3.01 1.26 3.21.15.2 2.19 3.34 5.3 4.68.74.32 1.31.51 1.76.65.74.24 1.41.2 1.94.12.6-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.08-.13-.28-.21-.58-.36z" />
                                        </svg>
                                    </a>
                                )}
                                {settings.email && (
                                    <a href={formatMailtoUrl(settings.email)} aria-label="Email Desa" title="Email Desa" className="footer-icon-link footer-icon-email">
                                        <svg style={{ width: 18, height: 18, fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} viewBox="0 0 24 24">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </a>
                                )}
                                {settings.facebook && (
                                    <a href={formatFacebookUrl(settings.facebook)} target="_blank" rel="noreferrer" aria-label="Facebook Desa" title="Facebook Desa" className="footer-icon-link footer-icon-fb">
                                        <svg style={{ width: 18, height: 18, fill: 'currentColor' }} viewBox="0 0 24 24">
                                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                        </svg>
                                    </a>
                                )}
                                {settings.youtube && (
                                    <a href={formatYoutubeUrl(settings.youtube)} target="_blank" rel="noreferrer" aria-label="YouTube Desa" title="YouTube Desa" className="footer-icon-link footer-icon-yt">
                                        <svg style={{ width: 18, height: 18, fill: 'currentColor' }} viewBox="0 0 24 24">
                                            <path d="M23.498 6.163c-.272-1.022-1.074-1.826-2.097-2.099C19.56 3.5 12 3.5 12 3.5s-7.56 0-9.402.564C1.575 4.337.773 5.141.5 6.163 0 8.01 0 12 0 12s0 3.99.5 5.837c.273 1.022 1.074 1.826 2.097 2.099C4.44 20.5 12 20.5 12 20.5s7.56 0 9.402-.564c1.022-.273 1.824-1.077 2.097-2.099.5-1.847.5-5.837.5-5.837s0-3.99-.5-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                    </a>
                                )}
                            </div>

                            {/* Alamat Fisik */}
                            {settings.alamat && (
                                <div style={{ marginTop: 14 }}>
                                    <p style={{ fontSize: 13, lineHeight: 1.6, color: '#9ca3af', margin: 0 }}>
                                        {settings.alamat}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div style={{
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                        paddingTop: 24,
                        textAlign: 'center',
                        fontSize: 13,
                        color: '#6b7280',
                    }}>
                        © 2026 UMKM Desa Birowo — Program MMD Fakultas Ilmu Komputer Universitas Brawijaya.
                    </div>
                </div>
            </footer>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
                * { box-sizing: border-box; margin: 0; padding: 0; }
                body { font-family: 'Inter', sans-serif; }
                @media (max-width: 768px) {
                    .desktop-menu { display: none !important; }
                    .mobile-header-actions { display: flex !important; }
                }
                .footer-link:hover {
                    color: #ffffff !important;
                }
                .footer-icon-link {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    color: #94a3b8;
                    transition: all 0.2s ease-in-out;
                }
                .footer-icon-link:hover {
                    background: rgba(255, 255, 255, 0.08);
                    transform: translateY(-2px);
                }
                .footer-icon-wa:hover {
                    color: #25d366 !important;
                    border-color: rgba(37, 211, 102, 0.3) !important;
                }
                .footer-icon-email:hover {
                    color: #8b5cf6 !important;
                    border-color: rgba(59, 130, 246, 0.3) !important;
                }
                .footer-icon-fb:hover {
                    color: #1877f2 !important;
                    border-color: rgba(24, 119, 242, 0.3) !important;
                }
                .footer-icon-yt:hover {
                    color: #ff0000 !important;
                    border-color: rgba(255, 0, 0, 0.3) !important;
                }
            `}</style>
        </div>
    );
}

function NavItem({ href, label, mobile }) {
    const isActive = window.location.pathname === href ||
        (href !== '/' && window.location.pathname.startsWith(href));

    return (
        <Link
            href={href}
            style={{
                color: isActive ? '#ffffff' : '#c7f9cc',
                textDecoration: 'none',
                padding: mobile ? '10px 12px' : '8px 16px',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: isActive ? 700 : 500,
                background: isActive ? 'rgba(255,255,255,0.2)' : 'transparent',
                transition: 'all 0.2s',
                display: 'block',
            }}
        >
            {label}
        </Link>
    );
}
