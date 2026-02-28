import Link from 'next/link';

export default function CollegeDashboard() {
    return (
        <div className="container" style={{ maxWidth: '1000px', padding: '4rem 1.5rem' }}>

            <div className="flex justify-between items-center mb-8 border-b pb-4">
                <div>
                    <h1 className="text-primary mb-2">College Portal Dashboard</h1>
                    <p className="text-muted">Welcome, National Institute of Technology Admin</p>
                </div>
                <span className="badge bg-success text-white">Verified Institution</span>
            </div>

            <div className="grid md-grid-2 gap-6 mb-12">
                <div className="card border-primary-top">
                    <h3 className="mb-4 text-xl">Active Workshop Request</h3>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold flex items-center gap-2">📍 Cyber Fraud Basics</span>
                        <span className="badge" style={{ background: '#fef3c7', color: '#92400e' }}>Status: Under Review</span>
                    </div>
                    <p className="text-sm text-muted mb-6">Requested for October 15, 2026. Audience: ~150 Students.</p>
                    <button className="btn btn-outline w-full text-sm">Download Request Copy (PDF)</button>
                </div>

                <div className="card">
                    <h3 className="mb-4 text-xl">Institution Impact</h3>
                    <div className="grid grid-2-cols gap-4 text-center">
                        <div className="bg-light p-4 rounded">
                            <div className="text-2xl font-bold text-primary mb-1">2</div>
                            <div className="text-xs text-muted uppercase">Past Workshops</div>
                        </div>
                        <div className="bg-light p-4 rounded">
                            <div className="text-2xl font-bold text-primary mb-1">450+</div>
                            <div className="text-xs text-muted uppercase">Students Trained</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-light p-6 rounded shadow-sm">
                <h3 className="mb-4">Quick Actions</h3>
                <div className="flex gap-4">
                    <Link href="/colleges/register" className="btn btn-primary">
                        + Request New Workshop
                    </Link>
                    <button className="btn btn-outline">Update College Profile</button>
                </div>
            </div>

        </div>
    );
}
