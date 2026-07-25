export default function PrimaryButton({
    className = '',
    disabled,
    children,
    style = {},
    ...props
}) {
    return (
        <button
            {...props}
            style={{
                background: 'linear-gradient(135deg, #57cc99, #38a3a5)',
                color: '#fff',
                padding: '10px 24px',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '14px',
                boxShadow: '0 4px 12px rgba(87,204,153,0.35)',
                transition: 'all 0.2s ease-in-out',
                border: 'none',
                cursor: disabled ? 'not-allowed' : 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                letterSpacing: '0.5px',
                ...style,
            }}
            className={
                `active:scale-[0.98] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#38a3a5] focus:ring-offset-2 ${
                    disabled && 'opacity-50'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
