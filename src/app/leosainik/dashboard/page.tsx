import Link from 'next/link';

export default function LeoSainikDashboard() {
    return (
        <div className="container" style={{ maxWidth: '1000px', padding: '4rem 1.5rem' }}>

            <div className="flex justify-between items-center mb-8 border-b pb-4">
                <div>
                    <h1 className="text-primary mb-2">LeoSainik Dashboard</h1>
                    <p className="text-muted">Welcome back, Volunteer LR-8921</p>
                </div>
                <div className="text-right">
                    <span className="badge bg-success text-white mb-2">Active Volunteer</span>
                    <div className="text-sm text-primary font-bold">⭐ Impact Score: 450</div>
                </div>
            </div>

            <div className="grid md-grid-2 gap-6 mb-12">
                <div className="card border-primary-top">
                    <h3 className="mb-4 text-xl">Current Mission</h3>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold flex items-center gap-2">🎯 School Outreach</span>
                        <span className="badge" style={{ background: '#dbeafe', color: '#1e40af' }}>Action Needed</span>
                    </div>
                    <p className="text-sm text-muted mb-6">Conduct a basic cyber safety talk for 9th-grade students.</p>

                    <div className="bg-light p-3 rounded mb-4 text-sm">
                        <strong>Location:</strong> Govt High School, Sector 4<br />
                        <strong>Date:</strong> Upcoming Friday
                    </div>

                    <button className="btn btn-primary w-full text-sm">Upload Proof of Visit</button>
                </div>

                <div className="card">
                    <h3 className="mb-4 text-xl">Digital ID Card</h3>
                    <div className="bg-light border p-6 rounded text-center relative overflow-hidden">
                        <div className="absolute top-0 w-full left-0 h-4" style={{ background: 'linear-gradient(to right, #FF9933 33.3%, white 33.3%, white 66.6%, #138808 66.6%)' }}></div>
                        <div className="w-24 h-24 bg-gray rounded-full mx-auto mt-4 mb-4 flex items-center justify-center text-3xl">👤</div>
                        <h4 className="text-xl mb-1">Rohan Sharma</h4>
                        <p className="text-primary font-bold mb-2">ID: LR-8921</p>
                        <p className="text-xs text-muted">Certified LeoSainik</p>
                        <button className="btn btn-outline w-full text-xs mt-6">Download ID PDF</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
