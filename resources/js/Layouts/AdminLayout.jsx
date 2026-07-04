import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AdminLayout({ children, title }) {
    const { auth, flash } = usePage().props;
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const currentPath = window.location.pathname;

    const menuItems = [
        { href: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
        { href: '/admin/umkm', label: 'Kelola UMKM', icon: '🏪' },
        { href: '/admin/produk', label: 'Kelola Produk', icon: '📦' },
        { href: '/admin/kategori', label: 'Kategori', icon: '🏷️' },
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
            {/* Sidebar */}
            <aside style={{
                width: sidebarOpen ? 260 : 0,
                background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
                transition: 'width 0.3s',
                overflow: 'hidden',
                flexShrink: 0,
                position: 'fixed',
                top: 0, left: 0, bottom: 0,
                zIndex: 40,
            }}>
                <div style={{ padding: '24px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontSize: 24 }}>🏪</span>
                        <div>
                            <div style={{ fontSize: 14, fontWeight: 800, color: '#e94560' }}>UMKM Go Digital</div>
                            <div style={{ fontSize: 10, color: '#8892b0', letterSpacing: 1.5 }}>ADMIN PANEL</div>
                        </div>
                    </Link>
                </div>

                <nav style={{ padding: '16px 12px' }}>
                    {menuItems.map((item) => {
                        const isActive = currentPath.startsWith(item.href);
                        return (
                            <Link key={item.href} href={item.href} style={{
                                display: 'flex', alignItems: 'center', gap: 12,
                                padding: '12px 16px', borderRadius: 10,
                                textDecoration: 'none', marginBottom: 4,
                                background: isActive ? 'rgba(233,69,96,0.15)' : 'transparent',
                                color: isActive ? '#e94560' : '#8892b0',
                                fontWeight: isActive ? 700 : 500,
                                fontSize: 14,
                                transition: 'all 0.2s',
                            }}>
                                <span style={{ fontSize: 18 }}>{item.icon}</span>
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '16px 20px',
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                }}>
                    <div style={{ fontSize: 13, color: '#ccd6f6', fontWeight: 600, marginBottom: 4 }}>
                        {auth.user?.name}
                    </div>
                    <div style={{ fontSize: 11, color: '#8892b0', marginBottom: 12 }}>
                        {auth.user?.email}
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                        <Link href="/" style={{
                            fontSize: 12, color: '#8892b0', textDecoration: 'none',
                        }}>🌐 Lihat Site</Link>
                        <Link href="/logout" method="post" as="button" style={{
                            fontSize: 12, color: '#e94560',
                            background: 'none', border: 'none', cursor: 'pointer',
                        }}>🚪 Logout</Link>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div style={{
                flex: 1,
                marginLeft: sidebarOpen ? 260 : 0,
                transition: 'margin-left 0.3s',
                background: '#f5f6fa',
                minHeight: '100vh',
            }}>
                {/* Top Bar */}
                <header style={{
                    background: '#fff',
                    padding: '16px 24px',
                    borderBottom: '1px solid #eee',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'sticky',
                    top: 0,
                    zIndex: 30,
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{
                            background: 'none', border: 'none',
                            fontSize: 20, cursor: 'pointer', color: '#333',
                        }}>
                            ☰
                        </button>
                        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1a1a2e' }}>
                            {title || 'Admin'}
                        </h2>
                    </div>
                </header>

                {/* Flash Messages */}
                {flash?.success && (
                    <div style={{
                        margin: '16px 24px 0', padding: '12px 20px',
                        background: '#d4edda', color: '#155724',
                        borderRadius: 10, fontSize: 14, fontWeight: 600,
                    }}>
                        ✅ {flash.success}
                    </div>
                )}
                {flash?.error && (
                    <div style={{
                        margin: '16px 24px 0', padding: '12px 20px',
                        background: '#f8d7da', color: '#721c24',
                        borderRadius: 10, fontSize: 14, fontWeight: 600,
                    }}>
                        ❌ {flash.error}
                    </div>
                )}

                {/* Page Content */}
                <div style={{ padding: 24 }}>
                    {children}
                </div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
                * { box-sizing: border-box; }
                body { font-family: 'Inter', sans-serif; margin: 0; }
                @media (max-width: 768px) {
                    aside { position: fixed !important; }
                }
            `}</style>
        </div>
    );
}
