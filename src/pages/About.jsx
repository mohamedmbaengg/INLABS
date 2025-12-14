export default function About() {
    return (
        <div className="pt-24 pb-20 animate-fade-in" style={{ paddingBottom: '5rem', paddingTop: '6rem' }}>
            <div className="container">
                <h1 className="text-4xl font-bold mb-12 text-center" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>About IN<span className="text-gradient">LABS</span></h1>

                {/* Who We Are */}
                <section className="mb-16 glass-panel" style={{ marginBottom: '4rem' }}>
                    <h2 className="text-2xl font-bold mb-4 text-primary-cyan" style={{ fontSize: '1.8rem', color: 'var(--primary-cyan)', marginBottom: '1rem' }}>Who We Are</h2>
                    <p className="text-lg text-gray-300 leading-relaxed" style={{ fontSize: '1.1rem', color: '#ccc', lineHeight: '1.8' }}>
                        INLABS is an innovation-driven educational and consulting organisation specialising in sustainability, digital transformation, and future technologies. We combine technical expertise, academic rigor, and industry insight to build solutions that lead organisations toward Net Zero, operational excellence, and intelligent automation.
                    </p>
                </section>

                {/* What We Do */}
                <section className="mb-16" style={{ marginBottom: '4rem' }}>
                    <h2 className="text-2xl font-bold mb-6 text-secondary-purple" style={{ fontSize: '1.8rem', color: 'var(--secondary-purple)', marginBottom: '1.5rem' }}>What We Do</h2>
                    <div className="grid md:grid-cols-2 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {[
                            "Develop multi-level gamification tools",
                            "Build enterprise simulations",
                            "Provide ESG training & reporting services",
                            "Deliver professional diplomas and workshops",
                            "Produce white papers and industry insights",
                            "Create emerging tech prototypes for automation"
                        ].map((item, idx) => (
                            <div key={idx} className="glass-panel flex items-center" style={{ padding: '1.5rem' }}>
                                <span className="text-primary-cyan mr-4 text-xl" style={{ fontSize: '1.2rem', marginRight: '1rem', color: 'var(--primary-cyan)' }}>➜</span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Our Approach */}
                <section className="text-center" style={{ textAlign: 'center' }}>
                    <h2 className="text-2xl font-bold mb-8" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Our Approach</h2>
                    <div className="flex flex-wrap justify-center gap-6" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
                        {["Experiential", "Data-driven", "Technology-enabled", "Outcome-focused"].map((tag, idx) => (
                            <span key={idx} className="px-6 py-3 rounded-full border border-gray-600 text-lg bg-white/5" style={{ padding: '0.75rem 1.5rem', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
