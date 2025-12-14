import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function Home() {
    // Simple fade up animation
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="prevent-overscroll">
            <Helmet>
                <title>INLABS | Innovation & Education</title>
                <meta name="description" content="Redefining Learning, Innovation & Sustainability." />
            </Helmet>

            {/* Hero Section - Apple Style */}
            <section className="pt-24 pb-16 text-center" style={{ paddingTop: '6rem', paddingBottom: '4rem', backgroundColor: '#f5f5f7' }}>
                <div className="container">
                    <motion.h1
                        initial="hidden" animate="visible" variants={fadeUp}
                        className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-black"
                        style={{ fontSize: '3.5rem', fontWeight: '700', color: '#000000', marginBottom: '0.5rem', lineHeight: 1.1 }}
                    >
                        INLABS
                    </motion.h1>
                    <motion.h2
                        initial="hidden" animate="visible" variants={fadeUp}
                        className="text-2xl md:text-4xl font-semibold mb-6 text-black"
                        style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1d1d1f', marginBottom: '1.5rem' }}
                    >
                        Redefining Learning.
                    </motion.h2>

                    <motion.p
                        initial="hidden" animate="visible" variants={fadeUp}
                        className="text-xl text-gray-700 max-w-2xl mx-auto mb-8"
                        style={{ color: '#333333', fontSize: '1.2rem', marginBottom: '2rem' }}
                    >
                        Designing transformative experiences, simulations, and AI solutions for a sustainable future.
                    </motion.p>

                    <motion.div
                        initial="hidden" animate="visible" variants={fadeUp}
                        className="flex justify-center gap-4 mb-12"
                        style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}
                    >
                        <Link to="/education" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '17px' }}>Explore Programs</Link>
                        <Link to="/contact" className="btn btn-secondary text-accent-blue" style={{ padding: '12px 24px', fontSize: '17px' }}>Book Consultation</Link>
                    </motion.div>

                    {/* Hero Image - Sustainability Loop */}
                    <div
                        className="mx-auto rounded-3xl overflow-hidden shadow-2xl relative"
                        style={{
                            width: '100%',
                            maxWidth: '980px',
                            height: '500px',
                            borderRadius: '24px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                            background: '#000' // Fallback
                        }}
                    >
                        <motion.img
                            src="/images/hero-process.png"
                            alt="Sustainability Future"
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.1 }}
                            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                        <div className="absolute inset-0 bg-black/10"></div> {/* Subtle overlay */}
                    </div>
                </div>
            </section>

            {/* Grid Section for Offerings */}
            <section className="py-20 bg-white" style={{ padding: '4rem 0', background: '#fff' }}>
                <div className="container">
                    <h2 className="text-4xl font-bold text-center mb-12 text-black" style={{ textAlign: 'center', color: '#1d1d1f', marginBottom: '3rem', fontSize: '2.5rem' }}>
                        Core Offerings
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
                        {[
                            { title: "Gamification", subtitle: "Immersive Learning", desc: "Board games to Unity 3D environments.", link: "/gamification" },
                            { title: "Education", subtitle: "Professional Growth", desc: "Sustainability, AI, Blockchain, IoT.", link: "/education" },
                            { title: "ESG", subtitle: "Compliance & Reporting", desc: "End-to-end reporting and training.", link: "/esg" },
                            { title: "Emerging Tech", subtitle: "Future Ready", desc: "Prototypes, White Papers, Automation.", link: "/emerging-tech" }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="clean-card flex flex-col items-center text-center justify-center"
                                style={{
                                    backgroundColor: '#f5f5f7',
                                    minHeight: '400px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <h3 className="text-3xl font-bold mb-2 text-black" style={{ color: '#1d1d1f', marginBottom: '0.5rem' }}>{item.title}</h3>
                                <p className="text-xl mb-4" style={{ color: '#1d1d1f', marginBottom: '1rem' }}>{item.subtitle}</p>
                                <p className="text-gray-500 mb-6 max-w-xs" style={{ color: '#86868b' }}>{item.desc}</p>
                                <Link to={item.link} className="text-link hover:underline" style={{ color: '#0066cc' }}>Learn more ›</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Brief */}
            <section className="py-20 bg-main" style={{ padding: '5rem 0', backgroundColor: '#f5f5f7' }}>
                <div className="container text-center max-w-3xl" style={{ margin: '0 auto', maxWidth: '800px' }}>
                    <h2 className="text-3xl font-bold mb-6 text-black" style={{ color: '#1d1d1f' }}>Future-Focused Innovation.</h2>
                    <p className="text-lg text-gray-500 leading-relaxed" style={{ color: '#86868b', lineHeight: '1.6' }}>
                        INLABS empowers organisations and governments to build future-ready capabilities through experiential learning. Based in Sharjah Media City, we blend technology, data, and behavioral science.
                    </p>
                </div>
            </section>

        </div>
    );
}
