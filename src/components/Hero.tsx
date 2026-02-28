import Link from 'next/link';

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        India&apos;s Most Trusted Cyber Awareness & Citizen Protection Ecosystem
                    </h1>
                    <p className="hero-subtitle">
                        Empowering every citizen to fight digital fraud. Stay informed, stay secure, and join the national movement for cyber safety.
                    </p>

                    <div className="hero-actions">
                        <Link href="/complaint" className="btn btn-danger btn-large hero-primary-btn">
                            <span className="btn-icon">🚨</span> Report Cyber Issue
                        </Link>
                        <div className="hero-secondary-actions">
                            <Link href="/leosainik/join" className="btn btn-outline">
                                🧑‍🚀 Join LeoSainik
                            </Link>
                            <Link href="/colleges/register" className="btn btn-outline">
                                🎓 Request College Workshop
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
