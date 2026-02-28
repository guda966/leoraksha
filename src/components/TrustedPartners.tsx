export default function TrustedPartners() {
    // Mock data for Phase 1 MVP.
    const partners = [
        { name: "National Cyber Security", type: "Strategic Partner" },
        { name: "University Grants Commission", type: "Academic Partner" },
        { name: "State Police Dept", type: "Law Enforcement" },
        { name: "Leading Tech Corp", type: "Technology Partner" },
    ];

    return (
        <section className="section partners-section">
            <div className="container">
                <div className="partners-header">
                    <h2 className="section-title">Institutional Trust & MoUs</h2>
                    <p className="section-subtitle">Collaborating with the nation&apos;s leading authorities to protect every citizen.</p>
                </div>

                <div className="partners-grid mt-8">
                    {partners.map((partner, i) => (
                        <div key={i} className="partner-card">
                            <div className="partner-placeholder-logo" aria-hidden="true">
                                <span className="placeholder-text">{partner.name.charAt(0)}</span>
                            </div>
                            <h4 className="partner-name">{partner.name}</h4>
                            <span className="partner-type">{partner.type}</span>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <a href="/partners" className="btn btn-outline">Become a Partner</a>
                </div>
            </div>
        </section>
    );
}
