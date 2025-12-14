export default function ESG() {
    return (
        <div className="pt-24 pb-20 animate-fade-in" style={{ paddingTop: '6rem', paddingBottom: '5rem' }}>
            <div className="container">
                <h1 className="text-4xl font-bold mb-6 text-center" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>ESG Training & Reporting</h1>
                <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16" style={{ textAlign: 'center', color: '#333', maxWidth: '800px', margin: '0 auto 4rem' }}>
                    We build organisational capacity to understand and implement ESG requirements, ensuring future-ready compliance.
                </p>

                <div className="grid md:grid-cols-2 gap-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>

                    {/* Training */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-accent-green" style={{ fontSize: '1.8rem', color: 'var(--accent-green)', marginBottom: '1.5rem' }}>ESG Training</h2>
                        <div className="glass-panel" style={{ padding: '2rem' }}>
                            <ul className="space-y-4" style={{ listStyle: 'none' }}>
                                {[
                                    "ESG fundamentals",
                                    "IFRS S1 & S2",
                                    "Materiality Assessments",
                                    "Sustainability KPIs",
                                    "Governance & Risk Integration"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                        <span className="w-2 h-2 bg-accent-green rounded-full mr-3" style={{ width: '8px', height: '8px', background: 'var(--accent-green)', borderRadius: '50%', marginRight: '10px' }}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Reporting */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-primary-cyan" style={{ fontSize: '1.8rem', color: 'var(--primary-cyan)', marginBottom: '1.5rem' }}>Reporting Services</h2>
                        <div className="glass-panel" style={{ padding: '2rem' }}>
                            <ul className="space-y-4" style={{ listStyle: 'none' }}>
                                {[
                                    "Full ESG Report development",
                                    "Regulatory compliance (UAE, GCC, ISSB, GRI, SASB)",
                                    "Departmental readiness reviews",
                                    "Data governance and validation systems",
                                    "Stakeholder engagement mapping"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                        <span className="w-2 h-2 bg-primary-cyan rounded-full mr-3" style={{ width: '8px', height: '8px', background: 'var(--primary-cyan)', borderRadius: '50%', marginRight: '10px' }}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
