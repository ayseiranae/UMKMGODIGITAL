import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AdminLayout({ children, title }) {
    const { auth, flash } = usePage().props;
    const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
    const currentPath = window.location.pathname;


    const menuItems = [
        { href: '/admin/dashboard', label: 'Dashboard' },
        { href: '/admin/umkm', label: 'Kelola UMKM' },
        { href: '/admin/produk', label: 'Kelola Produk' },
        { href: '/admin/kategori', label: 'Kategori' },
        { href: '/admin/pengaturan', label: 'Pengaturan' },
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
            {/* Mobile backdrop overlay */}
            {sidebarOpen && (
                <div
                    className="admin-sidebar-backdrop"
                    onClick={() => setSidebarOpen(false)}
                    style={{
                        display: 'none',
                        position: 'fixed',
                        inset: 0,
                        zIndex: 39,
                        background: 'rgba(0,0,0,0.45)',
                        backdropFilter: 'blur(2px)',
                    }}
                />
            )}
            {/* Sidebar */}
            <aside style={{
                width: sidebarOpen ? 260 : 0,
                background: 'linear-gradient(180deg, #22577a 0%, #38a3a5 60%, #0f172a 100%)',
                transition: 'width 0.3s',
                overflow: 'hidden',
                flexShrink: 0,
                position: 'fixed',
                top: 0, left: 0, bottom: 0,
                zIndex: 40,
            }}>
                <div style={{ padding: '24px 20px', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                    <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div>
                            <div style={{ fontSize: 14, fontWeight: 800, color: '#ffffff' }}>UMKM <span style={{ color: '#80ed99' }}>Go Digital</span></div>
                            <div style={{ fontSize: 10, color: '#c7f9cc', letterSpacing: 1.5 }}>ADMIN PANEL</div>
                        </div>
                    </Link>
                </div>

                <nav style={{ padding: '16px 12px' }}>
                    {menuItems.map((item) => {
                        const isActive = currentPath.startsWith(item.href);
                        return (
                            <Link key={item.href} href={item.href} style={{
                                display: 'block',
                                padding: '12px 16px', borderRadius: 10,
                                textDecoration: 'none', marginBottom: 4,
                                background: isActive ? 'rgba(87,204,153,0.25)' : 'transparent',
                                border: isActive ? '1px solid rgba(128,237,153,0.5)' : '1px solid transparent',
                                color: isActive ? '#80ed99' : '#ffffff',
                                fontWeight: isActive ? 700 : 500,
                                fontSize: 14,
                                transition: 'all 0.2s',
                            }}>
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '16px 20px',
                    borderTop: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(0,0,0,0.2)',
                }}>
                    <div style={{ fontSize: 13, color: '#ffffff', fontWeight: 600, marginBottom: 4 }}>
                        {auth.user?.name}
                    </div>
                    <div style={{ fontSize: 11, color: '#c7f9cc', marginBottom: 12 }}>
                        {auth.user?.email}
                    </div>
                    <div style={{ display: 'flex', gap: 12 }}>
                        <Link href="/" style={{
                            fontSize: 12, color: '#80ed99', textDecoration: 'none', fontWeight: 600,
                        }}>Lihat Site</Link>
                        <Link href="/logout" method="post" as="button" style={{
                            fontSize: 12, color: '#fca5a5', fontWeight: 600,
                            background: 'none', border: 'none', cursor: 'pointer',
                        }}>Logout</Link>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="admin-main-content" style={{
                flex: 1,
                marginLeft: sidebarOpen ? 260 : 0,
                transition: 'margin-left 0.3s',
                background: '#f4fbf7',
                minHeight: '100vh',
                maxWidth: '100%',
                overflowX: 'hidden',
            }}>
                {/* Top Bar */}
                <header style={{
                    background: '#fff',
                    padding: '16px 24px',
                    borderBottom: '1px solid #e2e8f0',
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
                            fontSize: 20, cursor: 'pointer', color: '#0f172a',
                        }}>
                            ☰
                        </button>
                        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a' }}>
                            {title || 'Admin'}
                        </h2>
                    </div>
                </header>

                {/* Flash Messages */}
                {flash?.success && (
                    <div style={{
                        margin: '16px 24px 0', padding: '12px 20px',
                        background: '#c7f9cc', color: '#22577a',
                        borderRadius: 10, fontSize: 14, fontWeight: 600,
                        border: '1px solid #80ed99',
                    }}>
                        {flash.success}
                    </div>
                )}
                {flash?.error && (
                    <div style={{
                        margin: '16px 24px 0', padding: '12px 20px',
                        background: '#fee2e2', color: '#991b1b',
                        borderRadius: 10, fontSize: 14, fontWeight: 600,
                        border: '1px solid #fecaca',
                    }}>
                        {flash.error}
                    </div>
                )}

                {/* Page Content */}
                <div className="admin-page-container" style={{ padding: 24, maxWidth: '100%', boxSizing: 'border-box' }}>
                    {children}
                </div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
                * { box-sizing: border-box; }
                html, body { font-family: 'Inter', sans-serif; margin: 0; padding: 0; max-width: 100vw; overflow-x: hidden; }
                
                .admin-table-wrapper {
                    width: 100%;
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    background: #fff;
                    border-radius: 16px;
                    box-shadow: 0 2px 8px rgba(30,58,138,0.06);
                    border: 1px solid #e2e8f0;
                }

                @media (max-width: 768px) {
                    aside { position: fixed !important; }
                    .admin-main-content {
                        margin-left: 0 !important;
                        width: 100% !important;
                        max-width: 100vw !important;
                    }
                    .admin-page-container {
                        padding: 12px 10px !important;
                        width: 100% !important;
                        max-width: 100vw !important;
                    }
                    .admin-sidebar-backdrop { display: block !important; }
                    .admin-grid-2col {
                        grid-template-columns: 1fr !important;
                    }
                    .admin-form-card {
                        padding: 16px 12px !important;
                        border-radius: 12px !important;
                    }
                    .admin-filter-bar {
                        flex-direction: column !important;
                        align-items: stretch !important;
                    }
                    .admin-filter-bar form {
                        flex-direction: column !important;
                        width: 100% !important;
                    }
                    .admin-filter-bar input, .admin-filter-bar select, .admin-filter-bar button, .admin-filter-bar a {
                        width: 100% !important;
                    }
                }
            `}</style>
        </div>
    );
}
