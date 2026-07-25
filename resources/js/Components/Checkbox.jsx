export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-slate-300 text-[#38a3a5] shadow-sm focus:ring-[#38a3a5] ' +
                className
            }
        />
    );
}
