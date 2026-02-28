import Link from 'next/link';

export default function JoinLeoSainik() {
    return (
        <section className="section leosainik-section">
            <div className="container">
                <div className="leosainik-grid">
                    <div className="leosainik-content">
                        <h2 className="section-title">Become a LeoSainik</h2>
                        <h3 className="section-subtitle mt-2 text-saffron">India&apos;s Largest Cyber Awareness Youth Network</h3>

                        <p className="mt-6">
                            Are you a student passionate about digital safety? Step up and become the voice of your community.
                            As a verified LeoSainik volunteer, you will receive expert training in cyber hygiene and spread those critical skills directly into local schools and classrooms.
                        </p>

                        <div className="leosainik-steps mt-6">
                            <div className="step">
                                <span className="step-num">1</span>
                                <span>Register with Student ID</span>
                            </div>
                            <div className="step">
                                <span className="step-num">2</span>
                                <span>Get Verified by Admin</span>
                            </div>
                            <div className="step">
                                <span className="step-num">3</span>
                                <span>Start Your Missions!</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <Link href="/leosainik/join" className="btn btn-primary btn-large">
                                Apply to be a LeoSainik
                            </Link>
                        </div>
                    </div>

                    <div className="leosainik-visual placeholder-box">
                        <span>Volunteer Dashboard Preview</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
