export default function Vision() {
    return (
        <div className="pt-24 pb-20 animate-fade-in" style={{ paddingTop: '6rem', paddingBottom: '5rem' }}>
            <div className="container">
                <h1 className="text-4xl font-bold mb-12 text-center" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Vision & Mission</h1>

                <div className="grid md:grid-cols-2 gap-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>

                    {/* Vision */}
                    <section className="glass-panel relative overflow-hidden" style={{ padding: '2.5rem' }}>
                        <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-bold text-primary-cyan pointer-events-none">V</div>
                        <h2 className="text-3xl font-bold mb-6 text-primary-cyan" style={{ fontSize: '2rem', color: 'var(--primary-cyan)', marginBottom: '1.5rem' }}>Vision</h2>
                        <p className="text-lg leading-relaxed text-gray-200" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                            To become the region’s leading hub for experiential learning, sustainability innovation, and emerging technology adoption—shaping future-ready organisations, empowered talent, and intelligent systems that enable a more sustainable world.
                        </p>
                    </section>

                    {/* Mission */}
                    <section className="glass-panel relative overflow-hidden" style={{ padding: '2.5rem' }}>
                        <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-bold text-secondary-purple pointer-events-none">M</div>
                        <h2 className="text-3xl font-bold mb-6 text-secondary-purple" style={{ fontSize: '2rem', color: 'var(--secondary-purple)', marginBottom: '1.5rem' }}>Mission</h2>
                        <ul className="space-y-4" style={{ listStyle: 'none' }}>
                            {[
                                "To design world-class gamification and simulation tools that enable strategic learning and decision-making.",
                                "To deliver high-impact professional education aligned with global sustainability and digital transformation needs.",
                                "To support organisations in achieving ESG compliance through structured training, reporting, and automation.",
                                "To accelerate innovation by developing prototypes powered by AI, Blockchain, IoT, and immersive technologies.",
                                "To create an ecosystem where research, technology, and real-world applications converge."
                            ].map((item, idx) => (
                                <li key={idx} className="flex" style={{ display: 'flex', marginBottom: '1rem' }}>
                                    <span className="text-secondary-purple mr-3 font-bold" style={{ marginRight: '1rem', color: 'var(--secondary-purple)' }}>•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
}
