export default function GameDesign() {
    return (
        <div className="pt-24 pb-20 animate-fade-in" style={{ paddingTop: '6rem', paddingBottom: '5rem' }}>
            <div className="container">
                <h1 className="text-4xl font-bold mb-12 text-center" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Game Design Studio</h1>

                <div className="grid md:grid-cols-2 gap-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>

                    {/* Capabilities */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-primary-cyan" style={{ fontSize: '1.8rem', color: 'var(--primary-cyan)', marginBottom: '1.5rem' }}>Capabilities</h2>
                        <ul className="space-y-4 glass-panel" style={{ listStyle: 'none', padding: '2rem' }}>
                            {[
                                "Narrative & scenario design",
                                "AI-driven branching logic",
                                "Visual & UI design",
                                "Prototype-to-deployment game development",
                                "Custom sustainability or industry-specific games",
                                "Twine, Unity, Unreal and custom engines"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                    <span className="w-2 h-2 bg-primary-cyan rounded-full mr-3" style={{ width: '8px', height: '8px', background: 'var(--primary-cyan)', borderRadius: '50%', marginRight: '10px' }}></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Outcomes */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-secondary-purple" style={{ fontSize: '1.8rem', color: 'var(--secondary-purple)', marginBottom: '1.5rem' }}>Outcomes</h2>
                        <ul className="space-y-4 glass-panel" style={{ listStyle: 'none', padding: '2rem' }}>
                            {[
                                "Deep learner engagement",
                                "Faster knowledge retention",
                                "Assessment-ready game systems",
                                "Scalable deployment for schools, universities, and corporates"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                    <span className="w-2 h-2 bg-secondary-purple rounded-full mr-3" style={{ width: '8px', height: '8px', background: 'var(--secondary-purple)', borderRadius: '50%', marginRight: '10px' }}></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
}
