'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LeoSainikJoin() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTimeout(() => setIsSubmitted(true), 1200);
    };

    return (
        <div className="container" style={{ maxWidth: '800px', padding: '4rem 1.5rem' }}>

            {!isSubmitted ? (
                <>
                    {/* Hero Section */}
                    <div className="bg-primary text-white p-12 rounded mb-12 text-center" style={{ background: 'linear-gradient(135deg, #001a33 0%, #003366 100%)' }}>
                        <h1 className="text-white mb-4 text-3xl font-bold">Join the LeoSainik Force</h1>
                        <p className="text-white" style={{ opacity: 0.9, maxWidth: '700px', margin: '0 auto', fontSize: '1.125rem' }}>
                            Step up to protect your community. Receive expert cyber training, a verified digital ID,
                            and the crucial mission to spread digital safety skills directly to students in local schools.
                        </p>
                    </div>

                    {/* How it Works / Flow Context */}
                    <div className="mb-12">
                        <h3 className="text-center mb-8 text-xl">Your Path to Becoming a LeoSainik</h3>
                        <div className="grid grid-3-cols text-center">
                            <div className="card border">
                                <div className="text-4xl mb-4">📄</div>
                                <h4>1. Apply & Authenticate</h4>
                                <p className="text-sm text-muted">Submit your application along with a valid Government or College ID.</p>
                            </div>
                            <div className="card border">
                                <div className="text-4xl mb-4">🎓</div>
                                <h4>2. Complete Training</h4>
                                <p className="text-sm text-muted">Pass the Cyber Aptitude Test and attend the mandatory expert onboarding.</p>
                            </div>
                            <div className="card border">
                                <div className="text-4xl mb-4">🎖️</div>
                                <h4>3. Lead Missions</h4>
                                <p className="text-sm text-muted">Receive your digital ID and start conducting workshops in approved schools.</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-center mb-6 text-xl border-primary-top pt-4 inline-block" style={{ borderTopWidth: '3px' }}>Volunteer Application Form</h3>

                    <div className="card shadow-md border-primary-top">
                        <form onSubmit={handleSubmit} className="complaint-form">
                            <div className="grid grid-2-cols">
                                <div className="form-group">
                                    <label>Full Legal Name *</label>
                                    <input type="text" required placeholder="As per official ID" />
                                </div>
                                <div className="form-group">
                                    <label>Date of Birth *</label>
                                    <input type="date" required />
                                </div>
                            </div>

                            <div className="grid grid-2-cols">
                                <div className="form-group">
                                    <label>Email Address *</label>
                                    <input type="email" required />
                                </div>
                                <div className="form-group">
                                    <label>Mobile Number (WhatsApp) *</label>
                                    <input type="tel" required placeholder="10-digit number" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Current Education / College *</label>
                                <input type="text" required placeholder="e.g. B.Tech, National Institute of Technology" />
                            </div>

                            <div className="grid grid-2-cols">
                                <div className="form-group">
                                    <label>City & State *</label>
                                    <input type="text" required />
                                </div>
                                <div className="form-group">
                                    <label>Pincode *</label>
                                    <input type="number" required />
                                </div>
                            </div>

                            <div className="form-group mt-4">
                                <label>Upload ID Proof for Verification *</label>
                                <div className="bg-light p-4 rounded border" style={{ borderColor: '#cbd5e1' }}>
                                    <input type="file" required accept=".pdf,image/*" className="mb-2" />
                                    <small className="text-muted block">Valid College ID, Aadhaar, or Voter ID required for background checks. Max 5MB.</small>
                                </div>
                            </div>

                            <div className="form-group mt-4">
                                <label>Why do you want to become a LeoSainik? *</label>
                                <textarea rows={3} required placeholder="Briefly describe your motivation..."></textarea>
                            </div>

                            <div className="text-center mt-6">
                                <button type="submit" className="btn btn-primary btn-large w-full">
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            ) : (
                <div className="card shadow-md border-primary-top text-center p-12">
                    <div className="success-icon mb-4">✅</div>
                    <h2 className="text-success mb-4">Application Submitted!</h2>
                    <p className="text-muted mb-8 text-lg">
                        Thank you for volunteering to secure the nation. Your application and ID proof are currently under review.
                    </p>

                    <div className="bg-light p-6 rounded text-left mb-8 mx-auto" style={{ maxWidth: '500px' }}>
                        <h4 className="mb-2">What happens next?</h4>
                        <ul className="text-sm list-disc pl-4 text-muted">
                            <li className="mb-2">Our security team will verify your uploaded documents.</li>
                            <li className="mb-2">You will receive a basic Cyber Awareness Aptitude Test via email.</li>
                            <li>Upon passing, your official LeoSainik digital ID will be generated.</li>
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
