export default function ImpactCounters() {
    const stats = [
        { label: "Citizens Educated", value: "250K+" },
        { label: "Colleges Partnered", value: "120+" },
        { label: "LeoSainiks Active", value: "5,000+" },
        { label: "Complaints Supported", value: "12K+" }
    ];

    return (
        <section className="impact-section">
            <div className="container impact-container">
                <div className="impact-grid">
                    {stats.map((stat, i) => (
                        <div key={i} className="impact-card" style={{ background: 'white', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
                            <div className="impact-value" style={{ fontSize: '2.5rem', color: 'var(--primary-blue)', fontWeight: 900 }}>{stat.value}</div>
                            <div className="impact-label" style={{ color: '#475569', fontWeight: 700 }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
