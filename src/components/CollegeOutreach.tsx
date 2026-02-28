import Link from 'next/link';

export default function CollegeOutreach() {
    return (
        <section className="section college-section bg-gradient">
            <div className="container">
                <div className="college-content">
                    <h2 className="section-title">Free Cyber Safety Workshops for Colleges</h2>
                    <p className="college-subtitle mt-4">
                        Partner with LeoAxis to bring structured, expert-led cyber fraud awareness directly to your students.
                        Empower your campus with the knowledge to identify and prevent digital threats.
                    </p>

                    <ul className="college-benefits mt-6">
                        <li>Certified expert trainers</li>
                        <li>Dedicated Student Action Plan</li>
                        <li>Official Participation Certificate</li>
                        <li>Easy scheduling process</li>
                    </ul>

                    <div className="mt-8">
                        <Link href="/colleges/register" className="btn btn-primary btn-large">
                            Request a Workshop Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
