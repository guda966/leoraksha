import Link from 'next/link';

export default function AdminDashboard() {
    return (
        <div className="container" style={{ maxWidth: '1200px', padding: '4rem 1.5rem' }}>

            <div className="flex justify-between items-center mb-8 border-b pb-4">
                <div>
                    <h1 className="text-primary mb-2">Super Admin Panel</h1>
                    <p className="text-muted">Master control for Leoraksha National Platform</p>
                </div>
                <div className="text-right">
                    <span className="badge bg-danger text-white mb-2">System Admin</span>
                    <div className="text-sm font-bold text-muted">Session: Active</div>
                </div>
            </div>

            <div className="grid md-grid-2 gap-6 mb-8" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <div className="card text-center bg-light border-primary-top">
                    <div className="text-3xl font-bold text-primary mb-1">1,245</div>
                    <div className="text-xs text-muted uppercase">Total Complaints</div>
                </div>
                <div className="card text-center bg-light border-primary-top">
                    <div className="text-3xl font-bold text-saffron mb-1">42</div>
                    <div className="text-xs text-muted uppercase">Pending Colleges</div>
                </div>
                <div className="card text-center bg-light border-primary-top">
                    <div className="text-3xl font-bold text-green mb-1">8,930</div>
                    <div className="text-xs text-muted uppercase">Active LeoSainiks</div>
                </div>
                <div className="card text-center bg-light border-primary-top">
                    <div className="text-3xl font-bold text-danger mb-1">3</div>
                    <div className="text-xs text-muted uppercase">Critical Alerts</div>
                </div>
            </div>

            <div className="grid gap-6 md-grid-2" style={{ gridTemplateColumns: '2fr 1fr' }}>

                {/* Main Dashboard Panel */}
                <div className="card border">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl">Recent Secure Complaints</h3>
                        <button className="btn btn-outline text-xs">View All</button>
                    </div>

                    <div className="overflow-x-auto">
                        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr className="border-b bg-light text-muted uppercase text-xs">
                                    <th className="p-3">Tracking ID</th>
                                    <th className="p-3">Type</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3">Date</th>
                                    <th className="p-3">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b">
                                    <td className="p-3 font-bold">LR-X9M2P1Q</td>
                                    <td className="p-3">Financial Fraud</td>
                                    <td className="p-3"><span className="badge text-white" style={{ background: '#ef4444' }}>NEW</span></td>
                                    <td className="p-3">Oct 12, 14:30</td>
                                    <td className="p-3"><button className="btn btn-primary text-xs w-full py-1">Review</button></td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3 font-bold">LR-A7B8C9D</td>
                                    <td className="p-3">Social Harassment</td>
                                    <td className="p-3"><span className="badge bg-gray">Under Investigation</span></td>
                                    <td className="p-3">Oct 11, 09:15</td>
                                    <td className="p-3"><button className="btn btn-outline text-xs w-full py-1">Update</button></td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold">LR-L1K2J3H</td>
                                    <td className="p-3">Phishing Link</td>
                                    <td className="p-3"><span className="badge bg-success text-white">Resolved</span></td>
                                    <td className="p-3">Oct 10, 16:45</td>
                                    <td className="p-3"><button className="btn btn-outline text-xs w-full py-1 text-muted">View</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Actions Panel */}
                <div className="flex-col gap-4">
                    <div className="card border">
                        <h3 className="text-xl mb-4">Manage Modules</h3>
                        <div className="flex flex-col gap-3">
                            <button className="btn bg-light text-left w-full hover-lift" style={{ border: '1px solid #cbd5e1', color: '#1e293b' }}>
                                📢 Broadcast Cyber Alert
                            </button>
                            <button className="btn bg-light text-left w-full hover-lift" style={{ border: '1px solid #cbd5e1', color: '#1e293b' }}>
                                🎓 Approve College Requests
                            </button>
                            <button className="btn bg-light text-left w-full hover-lift" style={{ border: '1px solid #cbd5e1', color: '#1e293b' }}>
                                🛡️ Verify LeoSainik IDs
                            </button>
                            <button className="btn bg-light text-left w-full hover-lift" style={{ border: '1px solid #cbd5e1', color: '#1e293b' }}>
                                🤝 Update Partners (MoUs)
                            </button>
                        </div>
                    </div>

                    <div className="bg-light p-4 rounded border mt-6">
                        <h4 className="flex items-center gap-2 mb-2 text-primary">🔒 Security Status</h4>
                        <p className="text-sm text-muted mb-0">All systems nominal. E2E encryption active on complaint uploads. No unauthorized access detected.</p>
                    </div>
                </div>

            </div>

        </div>
    );
}
