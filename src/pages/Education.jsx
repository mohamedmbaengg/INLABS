export default function Education() {
    return (
        <div className="pt-24 pb-20 animate-fade-in" style={{ paddingTop: '6rem', paddingBottom: '5rem' }}>
            <div className="container">
                <h1 className="text-4xl font-bold mb-6 text-center" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center', color: '#000000' }}>Professional Education</h1>
                <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16" style={{ textAlign: 'center', color: '#000000', maxWidth: '800px', margin: '0 auto 4rem' }}>
                    Our programs combine academic excellence, industry relevance, and applied experiential learning.
                </p>

                <h2 className="text-3xl font-bold mb-12 text-center" style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>Domains We Teach</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-20" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>

                    {/* Sustainability */}
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 className="text-2xl font-bold mb-4 text-accent-green" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-green)' }}>Sustainability</h3>
                        <ul className="space-y-2 text-gray-300" style={{ listStyle: 'none', paddingLeft: '0' }}>
                            <li>• Diplomas in Sustainability (SCQF Level 11/12)</li>
                            <li>• Net Zero for Utilities & Circular Economy</li>
                            <li>• GRI, ISSB, IFRS-S1/S2, SASB frameworks</li>
                            <li>• Built Environment, Water, Energy & Waste pathways</li>
                        </ul>
                    </div>

                    {/* AI */}
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 className="text-2xl font-bold mb-4 text-primary-cyan" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-cyan)' }}>Artificial Intelligence</h3>
                        <ul className="space-y-2 text-gray-300" style={{ listStyle: 'none', paddingLeft: '0' }}>
                            <li>• Applied Machine Learning</li>
                            <li>• GenAI Tools & Prompt Engineering</li>
                            <li>• AI for Business Transformation</li>
                            <li>• Industry-specific AI applications</li>
                        </ul>
                    </div>

                    {/* Blockchain */}
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 className="text-2xl font-bold mb-4 text-secondary-purple" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--secondary-purple)' }}>Blockchain</h3>
                        <ul className="space-y-2 text-gray-300" style={{ listStyle: 'none', paddingLeft: '0' }}>
                            <li>• Enterprise Blockchain Foundations</li>
                            <li>• Smart Contracts</li>
                            <li>• Blockchain for ESG reporting & supply chain</li>
                        </ul>
                    </div>

                    {/* IoT */}
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 className="text-2xl font-bold mb-4 text-blue-400" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#60a5fa' }}>Internet of Things (IoT)</h3>
                        <ul className="space-y-2 text-gray-300" style={{ listStyle: 'none', paddingLeft: '0' }}>
                            <li>• IoT for Smart Cities</li>
                            <li>• Sensor-based optimisation</li>
                            <li>• Digital twins & Predictive maintenance</li>
                        </ul>
                    </div>

                </div>

                <div className="glass-panel text-center" style={{ padding: '3rem', textAlign: 'center' }}>
                    <h2 className="text-2xl font-bold mb-6" style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Program Structure & Progression</h2>
                    <div className="flex flex-wrap justify-center gap-4 mb-8" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        {["Short Courses", "Professional Diplomas", "Corporate Workshops", "Executive Bootcamps"].map((item, idx) => (
                            <span key={idx} className="px-4 py-2 bg-white/10 rounded-lg">{item}</span>
                        ))}
                    </div>
                    <p className="text-gray-300">
                        Pathways to Master’s and Doctorate programs through partner universities.
                    </p>
                </div>

            </div>
        </div>
    );
}
