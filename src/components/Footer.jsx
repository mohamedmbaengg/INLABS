import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="glass-panel" style={{ marginTop: '4rem', borderRadius: 0, borderBottom: 0, borderLeft: 0, borderRight: 0 }}>
            <div className="container" style={{ padding: '40px 20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>

                    <div>
                        <h3 className="text-xl font-bold mb-4" style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>
                            IN<span className="text-gradient">LABS</span>
                        </h3>
                        <p className="text-gray-400" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            Redefining Learning, Innovation & Sustainability Through Technology.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4" style={{ marginBottom: '1rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="/about">About Us</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="/gamification">Gamification</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="/education">Professional Education</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4" style={{ marginBottom: '1rem' }}>Contact</h4>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Sharjah Media City, United Arab Emirates</p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>info@inlabs.ae</p>
                        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Book a Consultation</Link>
                    </div>

                </div>
                <div style={{ marginTop: '3rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                    © {new Date().getFullYear()} INLABS. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
