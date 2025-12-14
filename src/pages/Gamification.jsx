export default function Gamification() {
    return (
        <div className="pt-24 pb-20 animate-fade-in" style={{ paddingTop: '6rem', paddingBottom: '5rem' }}>
            <div className="container">
                <h1 className="text-4xl font-bold mb-6 text-center" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>Gamification & Simulation</h1>
                <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16" style={{ textAlign: 'center', color: '#ccc', maxWidth: '800px', margin: '0 auto 4rem' }}>
                    INLABS delivers a three-tiered gamification ecosystem designed to enhance decision-making, strategic thinking, and practical understanding.
                </p>

                <div className="space-y-12" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                    {/* Level 1 */}
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h2 className="text-2xl font-bold mb-4 text-primary-cyan" style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--primary-cyan)' }}>Level 1: Board Game Gamification</h2>
                        <p className="mb-4 text-gray-300">Hands-on problem-solving tools that teach sustainability, ESG, leadership, and financial planning using cards, tokens, dice, and real-world scenarios.</p>
                    </div>

                    {/* Level 2 */}
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h2 className="text-2xl font-bold mb-4 text-secondary-purple" style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--secondary-purple)' }}>Level 2: Digital Business Simulation</h2>
                        <p className="mb-4 text-gray-300">Interactive browser/mobile simulations where participants manage virtual organisations, experience market shocks, and analyse KPI outcomes in real time.</p>
                    </div>

                    {/* Level 3 */}
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h2 className="text-2xl font-bold mb-4 text-accent-green" style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--accent-green)' }}>Level 3: 3D Unity Games</h2>
                        <p className="mb-4 text-gray-300">High-fidelity immersive environments replicating cities, utilities, hotels, and industrial systems.</p>
                        <ul className="list-disc list-inside text-gray-400" style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: '#aaa' }}>
                            <li>Experiential training</li>
                            <li>Operational optimisation</li>
                            <li>Net Zero scenario testing</li>
                            <li>Behavioural change learning</li>
                        </ul>
                    </div>

                </div>

                <div className="mt-16 text-center" style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <a href="/game-design-studio" className="btn btn-secondary">Visit Game Design Studio</a>
                </div>
            </div>
        </div>
    );
}
