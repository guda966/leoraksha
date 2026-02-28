export default function HelplineStrip() {
    return (
        <section className="helpline-strip">
            <div className="container flex flex-col md:flex-row items-center justify-between">
                <div className="helpline-text">
                    <span className="helpline-badge">NATIONAL CYBER HELPLINE</span>
                    <h2>Cyber Fraud Emergency? Call <strong>1930</strong> immediately.</h2>
                    <p>For financial fraud, report on National Cyber Crime Reporting Portal (NCRP).</p>
                </div>

                <div className="helpline-action mt-4 md:mt-0">
                    <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                        Visit official Gov Portal
                    </a>
                </div>
            </div>
        </section>
    );
}
