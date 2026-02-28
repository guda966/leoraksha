'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedRole, setSelectedRole] = useState('/admin/dashboard');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate network request for MVP
        setTimeout(() => {
            router.push(selectedRole);
        }, 800);
    };

    return (
        <div className="container" style={{ maxWidth: '450px', padding: '6rem 1.5rem', minHeight: '80vh' }}>
            <div className="text-center mb-8">
                <div className="mb-4 text-4xl">🛡️</div>
                <h1 className="text-primary mb-2 text-2xl font-bold">Secure Login</h1>
                <p className="text-muted text-sm">Access the Leoraksha National Network</p>
            </div>

            <div className="card shadow-md border-primary-top p-8">
                <form onSubmit={handleLogin} className="complaint-form">
                    <div className="form-group mb-4">
                        <label>Registered Phone / Email ID *</label>
                        <input type="text" required placeholder="Enter credentials" />
                    </div>

                    <div className="form-group mb-4">
                        <label>Password / OTP *</label>
                        <input type="password" required placeholder="••••••••" />
                    </div>

                    <div className="form-group mb-6">
                        <label className="text-sm font-bold text-primary flex items-center gap-2">
                            <span>🛠️</span> [Demo] Select Role to Emulate
                        </label>
                        <select
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                            className="bg-light"
                            style={{ border: '1px dashed #cbd5e1' }}
                        >
                            <option value="/admin/dashboard">System Admin</option>
                            <option value="/colleges/dashboard">College Nodal Officer</option>
                            <option value="/leosainik/dashboard">Verified LeoSainik</option>
                        </select>
                        <small className="text-muted mt-2 block" style={{ fontSize: '0.7rem' }}>
                            Since Phase 1 has no database, select a role above to explore the respective dashboard.
                        </small>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-full py-3 text-lg mb-4"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Authenticating...' : 'Secure Login →'}
                    </button>

                    <div className="text-center text-sm text-muted">
                        Don&apos;t have an account? <br />
                        <Link href="/colleges/register" className="text-primary font-bold">Register College</Link>
                        {' '}or{' '}
                        <Link href="/leosainik/join" className="text-primary font-bold">Join LeoSainik</Link>
                    </div>
                </form>
            </div>

            <div className="text-center mt-8 text-xs text-muted max-w-sm mx-auto">
                Protected by National Cyber Security Protocols. Unauthorized access is strictly prohibited.
            </div>
        </div>
    );
}
