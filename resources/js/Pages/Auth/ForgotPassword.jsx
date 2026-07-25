import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Lupa Kata Sandi" />

            <div className="mb-6 text-center">
                <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>
                    Lupa Kata Sandi?
                </h2>
                <p style={{ fontSize: 14, color: '#475569', marginTop: 6, lineHeight: 1.5, fontWeight: 500 }}>
                    Masukkan email terdaftar untuk menerima instruksi pemulihan.
                </p>
            </div>

            {status && (
                <div className="mb-5 text-sm font-medium text-green-600 text-center">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mb-6">
                    <InputLabel htmlFor="email" value="Email" style={{ color: '#475569', fontWeight: 600, marginBottom: '8px', display: 'block' }} />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="block w-full"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="nama@email.com"
                    />

                    <InputError message={errors.email} className="mt-2 text-left" />
                </div>

                <div className="text-center">
                    <PrimaryButton className="w-full" disabled={processing}>
                        Kirim Tautan Pemulihan
                    </PrimaryButton>
                </div>
            </form>

            <div className="mt-6 text-center">
                <Link
                    href={route('login')}
                    className="inline-flex items-center text-sm text-[#475569] hover:text-[#38a3a5] font-semibold transition-colors duration-150"
                >
                    <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Kembali ke Login
                </Link>
            </div>
        </GuestLayout>
    );
}
