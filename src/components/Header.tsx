import Link from 'next/link';

export default function Header() {
    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo-group">
                    <Link href="/" className="logo">
                        <span className="logo-icon">🛡️</span>
                        <div>
                            <h1 className="logo-text">Leoraksha</h1>
                            <span className="logo-subtext">Citizen Protection Ecosystem</span>
                        </div>
                    </Link>
                </div>

                <nav className="desktop-nav">
                    <Link href="/" className="nav-link">Home</Link>
                    <Link href="/awareness" className="nav-link">Awareness Hub</Link>
                    <Link href="/colleges/register" className="nav-link">Colleges</Link>
                    <Link href="/leosainik/join" className="nav-link">LeoSainik</Link>
                </nav>

                <div className="header-actions" style={{ gap: '1rem' }}>
                    {/* Static buttons for English-only MVP MVP pages */}
                    <Link href="/complaint" className="btn btn-danger header-report-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        🚨 Report Cyber Issue
                    </Link>
                    <Link href="/login" className="btn btn-outline">
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
}
