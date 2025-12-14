export default function EmergingTech() {
    return (
        <div className="pt-24 pb-20 animate-fade-in" style={{ paddingTop: '6rem', paddingBottom: '5rem' }}>
            <div className="container">
                <h1 className="text-4xl font-bold mb-6 text-center" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>Emerging Technologies & Automation</h1>
                <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16" style={{ textAlign: 'center', color: '#333', maxWidth: '800px', margin: '0 auto 4rem' }}>
                    INLABS turns innovation concepts into functional prototypes, supported by research and technical expertise.
                </p>

                <div className="grid md:grid-cols-2 gap-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>

                    {/* White Papers */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-white" style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1.5rem' }}>White Papers & Insights</h2>
                        <div className="glass-panel" style={{ padding: '2rem' }}>
                            <p className="mb-4 text-gray-400">High-quality research on:</p>
                            <ul className="space-y-4" style={{ listStyle: 'none' }}>
                                {[
                                    "AI transformation",
                                    "Blockchain for sustainability",
                                    "Smart cities & IoT",
                                    "Net Zero systems",
                                    "Digital ethics and governance"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                        <span className="text-secondary-purple mr-3" style={{ marginRight: '10px', color: 'var(--secondary-purple)' }}>📄</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Prototypes */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-white" style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1.5rem' }}>Prototype Development</h2>
                        <div className="glass-panel" style={{ padding: '2rem' }}>
                            <p className="mb-4 text-gray-400">MVPs and POCs for:</p>
                            <ul className="space-y-4" style={{ listStyle: 'none' }}>
                                {[
                                    "AI-powered reporting tools",
                                    "Carbon dashboards",
                                    "RPA-based compliance systems",
                                    "Digital twin models",
                                    "Smart resource management systems"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                        <span className="text-primary-cyan mr-3" style={{ marginRight: '10px', color: 'var(--primary-cyan)' }}>⚙️</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                </div>

                <div className="mt-16 text-center glass-panel" style={{ marginTop: '4rem', padding: '2rem', textAlign: 'center' }}>
                    <h3 className="text-xl font-bold mb-2">Outcome</h3>
                    <p className="text-gray-700">Organisations gain clear visibility of automation potential before committing to full-scale implementation.</p>
                </div>

            </div>
        </div>
    );
}
