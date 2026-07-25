import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div
            className="flex min-h-screen flex-col items-center pt-8 sm:justify-center sm:pt-0"
            style={{
                background: 'linear-gradient(135deg, #22577a 0%, #38a3a5 100%)',
                fontFamily: "'Inter', sans-serif",
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background elements to match Home Hero */}
            <div style={{
                position: 'absolute', top: -100, right: -100,
                width: 400, height: 400, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: -50, left: -50,
                width: 300, height: 300, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{ zIndex: 10, textAlign: 'center', marginBottom: 12 }}>
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <div style={{ fontSize: 28, fontWeight: 900, color: '#ffffff', letterSpacing: '-0.5px' }}>
                        UMKM <span style={{ color: '#80ed99' }}>Go Digital</span>
                    </div>
                    <div style={{ fontSize: 12, color: '#c7f9cc', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, marginTop: 4 }}>
                        Desa Birowo
                    </div>
                </Link>
            </div>

            <div
                className="mt-6 w-full bg-white sm:max-w-md"
                style={{
                    borderRadius: 24,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    padding: '40px 32px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    zIndex: 10,
                }}
            >
                {children}
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
            `}</style>
        </div>
    );
}

