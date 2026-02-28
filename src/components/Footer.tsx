import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <Link href="/" className="logo footer-logo">
                        <span className="logo-icon">🛡️</span>
                        <div>
                            <h2 className="logo-text">Leoraksha</h2>
                            <span className="logo-subtext">A LeoAxis Initiative</span>
                        </div>
                    </Link>
                    <p className="footer-mission">
                        Building India&apos;s most trusted cyber awareness and citizen protection ecosystem.
                        Empowering citizens against digital fraud.
                    </p>
                </div>

                <div className="footer-links-group">
                    <h3 className="footer-heading">Platform</h3>
                    <ul className="footer-links">
                        <li><Link href="/awareness">Awareness Hub</Link></li>
                        <li><Link href="/colleges">College Workshops</Link></li>
                        <li><Link href="/leosainik">Join LeoSainik</Link></li>
                        <li><Link href="/complaint" className="text-danger">Report Incident</Link></li>
                    </ul>
                </div>

                <div className="footer-links-group">
                    <h3 className="footer-heading">Trust & Transparency</h3>
                    <ul className="footer-links">
                        <li><Link href="/trust/review-team">Review Team</Link></li>
                        <li><Link href="/trust/core-team">Core Team</Link></li>
                        <li><Link href="/trust/privacy">Privacy & Security</Link></li>
                        <li><Link href="/trust/terms">Terms of Use</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3 className="footer-heading">Emergency Support</h3>
                    <div className="emergency-strip">
                        <span className="emergency-icon">📞</span>
                        <div>
                            <strong>National Cyber Helpline</strong>
                            <div className="emergency-number">1930</div>
                        </div>
                    </div>
                    <p className="footer-contact-info">
                        For general inquiries:<br />
                        support@leoraksha.in
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container flex justify-between items-center footer-bottom-inner">
                    <p>&copy; {currentYear} LeoAxis Technologies Pvt. Ltd. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#" aria-label="Twitter">Twitter</a>
                        <a href="#" aria-label="LinkedIn">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
