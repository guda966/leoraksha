'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CollegeRegistration() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API submission
        setTimeout(() => {
            setIsSubmitted(true);
        }, 1000);
    };

    return (
        <div className="container" style={{ maxWidth: '800px', padding: '4rem 1.5rem' }}>

            {!isSubmitted ? (
                <>
                    {/* Hero Section */}
                    <div className="bg-primary text-white p-12 rounded mb-12 text-center" style={{ background: 'linear-gradient(135deg, #001a33 0%, #003366 100%)' }}>
                        <h1 className="text-white mb-4 text-3xl font-bold">Request a Cyber Awareness Workshop</h1>
                        <p className="text-white" style={{ opacity: 0.9, maxWidth: '700px', margin: '0 auto', fontSize: '1.125rem' }}>
                            Partner with Leoraksha to secure your students. Bring structured, expert-led cyber fraud awareness directly to your campus and empower the next generation.
                        </p>
                    </div>

                    {/* How it Works / Flow Context */}
                    <div className="mb-12">
                        <h3 className="text-center mb-8 text-xl">How the Institutional Outreach Works</h3>
                        <div className="grid grid-3-cols text-center">
                            <div className="card border">
                                <div className="text-4xl mb-4">📝</div>
                                <h4>1. Submit Request</h4>
                                <p className="text-sm text-muted">Fill out the detailed institution form to register your interest.</p>
                            </div>
                            <div className="card border">
                                <div className="text-4xl mb-4">🤝</div>
                                <h4>2. Expert Assignment</h4>
                                <p className="text-sm text-muted">A verified LeoSainik expert is assigned to your college for coordination.</p>
                            </div>
                            <div className="card border">
                                <div className="text-4xl mb-4">🛡️</div>
                                <h4>3. Conduct Workshop</h4>
                                <p className="text-sm text-muted">Host the live session and receive official certificates for participants.</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-center mb-6 text-xl border-primary-top pt-4 inline-block" style={{ borderTopWidth: '3px' }}>Institutional Details Form</h3>

                    <div className="card shadow-md border-primary-top">
                        <form onSubmit={handleSubmit} className="complaint-form">
                            <div className="grid grid-2-cols">
                                <div className="form-group">
                                    <label>Institution Name *</label>
                                    <input type="text" required placeholder="e.g. National Institute of Technology" />
                                </div>
                                <div className="form-group">
                                    <label>City & State *</label>
                                    <input type="text" required placeholder="e.g. Hyderabad, Telangana" />
                                </div>
                            </div>

                            <div className="grid grid-2-cols">
                                <div className="form-group">
                                    <label>Contact Person Name *</label>
                                    <input type="text" required placeholder="Principal / HOD Name" />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number *</label>
                                    <input type="tel" required placeholder="10-digit mobile number" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Official Email ID *</label>
                                <input type="email" required placeholder="name@college.edu.in" />
                            </div>

                            <div className="grid grid-2-cols">
                                <div className="form-group">
                                    <label>Expected Audience Size *</label>
                                    <select required>
                                        <option value="">-- Select Size --</option>
                                        <option value="50-100">50 - 100 Students</option>
                                        <option value="100-300">100 - 300 Students</option>
                                        <option value="300+">300+ Students</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Preferred Month *</label>
                                    <input type="month" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Specific Topics to Cover (Optional)</label>
                                <textarea rows={3} placeholder="e.g. Focus on career/job frauds and social media privacy."></textarea>
                            </div>

                            <div className="text-center mt-6">
                                <button type="submit" className="btn btn-primary btn-large w-full">
                                    Submit Workshop Request
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            ) : (
                <div className="card shadow-md border-primary-top text-center p-12">
                    <div className="success-icon mb-4">✅</div>
                    <h2 className="text-success mb-4">Request Received Successfully!</h2>
                    <p className="text-muted mb-8 text-lg">
                        Thank you for taking the initiative to secure your students. Our institutional outreach team will review your request and contact you at the provided email/phone within 24-48 hours.
                    </p>
                    <div className="bg-light p-6 rounded text-left mb-8">
                        <h4 className="mb-2">Next Steps:</h4>
                        <ul className="text-sm list-disc pl-4 text-muted">
                            <li className="mb-2">We will assign a verified expert/LeoSainik to your college.</li>
                            <li className="mb-2">Date and time will be finalized based on mutual convenience.</li>
                            <li>Official posters will be provided for campus circulation.</li>
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-outline">
                        Return to Home Page
                    </Link>
                </div>
            )}

        </div>
    );
}
