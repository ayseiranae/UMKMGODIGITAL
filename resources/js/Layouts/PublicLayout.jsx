import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function PublicLayout({ children }) {
    const { auth } = usePage().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
            {/* Navigation */}
            <nav style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                position: 'sticky',
                top: 0,
                zIndex: 50,
            }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 70 }}>
                        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
                            <span style={{ fontSize: 28, lineHeight: 1 }}>🏪</span>
                            <div>
                                <div style={{ fontSize: 18, fontWeight: 800, color: '#e94560', letterSpacing: '-0.5px' }}>
                                    UMKM Go Digital
                                </div>
                                <div style={{ fontSize: 11, color: '#8892b0', letterSpacing: '2px', textTransform: 'uppercase' }}>
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
                                    background: 'linear-gradient(135deg, #e94560, #c23152)',
                                    color: '#fff',
                                    padding: '8px 20px',
                                    borderRadius: 8,
                                    textDecoration: 'none',
                                    fontSize: 14,
                                    fontWeight: 600,
                                    marginLeft: 8,
                                    transition: 'transform 0.2s',
                                }}>
                                    Dashboard
                                </Link>
                            ) : (
                                <Link href="/login" style={{
                                    color: '#8892b0',
                                    padding: '8px 16px',
                                    textDecoration: 'none',
                                    fontSize: 14,
                                    fontWeight: 500,
                                }}>
                                    Login
                                </Link>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="mobile-menu-btn"
                            style={{
                                display: 'none',
                                background: 'none',
                                border: 'none',
                                color: '#ccd6f6',
                                fontSize: 24,
                                cursor: 'pointer',
                            }}
                        >
                            {mobileMenuOpen ? '✕' : '☰'}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="mobile-menu" style={{
                            paddingBottom: 16,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                        }}>
                            <NavItem href="/" label="Beranda" mobile />
                            <NavItem href="/umkm" label="UMKM" mobile />
                            <NavItem href="/produk" label="Produk" mobile />
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
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                color: '#8892b0',
                padding: '48px 24px 24px',
            }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: 32,
                        marginBottom: 32,
                    }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                                <span style={{ fontSize: 24 }}>🏪</span>
                                <span style={{ fontSize: 18, fontWeight: 800, color: '#e94560' }}>UMKM Go Digital</span>
                            </div>
                            <p style={{ fontSize: 14, lineHeight: 1.7 }}>
                                Platform katalog digital resmi UMKM Desa Birowo, Kecamatan Binangun, Kabupaten Blitar.
                                Mendukung transformasi digital ekonomi masyarakat desa.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ color: '#ccd6f6', fontSize: 14, fontWeight: 700, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>
                                Navigasi
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                <Link href="/" style={{ color: '#8892b0', textDecoration: 'none', fontSize: 14 }}>Beranda</Link>
                                <Link href="/umkm" style={{ color: '#8892b0', textDecoration: 'none', fontSize: 14 }}>Daftar UMKM</Link>
                                <Link href="/produk" style={{ color: '#8892b0', textDecoration: 'none', fontSize: 14 }}>Katalog Produk</Link>
                            </div>
                        </div>
                        <div>
                            <h4 style={{ color: '#ccd6f6', fontSize: 14, fontWeight: 700, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>
                                Kontak Desa
                            </h4>
                            <p style={{ fontSize: 14, lineHeight: 1.7 }}>
                                Desa Birowo, Kec. Binangun<br />
                                Kabupaten Blitar, Jawa Timur<br />
                                Indonesia
                            </p>
                        </div>
                    </div>
                    <div style={{
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        paddingTop: 20,
                        textAlign: 'center',
                        fontSize: 13,
                    }}>
                        © 2026 UMKM Go Digital — Desa Birowo. Program MMD Fakultas Ilmu Komputer Universitas Brawijaya.
                    </div>
                </div>
            </footer>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
                * { box-sizing: border-box; margin: 0; padding: 0; }
                body { font-family: 'Inter', sans-serif; }
                @media (max-width: 768px) {
                    .desktop-menu { display: none !important; }
                    .mobile-menu-btn { display: block !important; }
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
                color: isActive ? '#e94560' : '#ccd6f6',
                textDecoration: 'none',
                padding: mobile ? '10px 12px' : '8px 16px',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: isActive ? 700 : 500,
                background: isActive ? 'rgba(233,69,96,0.1)' : 'transparent',
                transition: 'all 0.2s',
                display: 'block',
            }}
        >
            {label}
        </Link>
    );
}
