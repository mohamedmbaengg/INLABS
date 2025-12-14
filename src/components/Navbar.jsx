import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Vision', path: '/vision' },
        { name: 'Gamification', path: '/gamification' },
        { name: 'Education', path: '/education' },
        { name: 'ESG', path: '/esg' },
        { name: 'Tech', path: '/emerging-tech' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
            style={{
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                borderBottom: scrolled ? '1px solid rgba(0,0,0,0.1)' : 'none',
                backgroundColor: scrolled ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.8)' // Fallback
            }}
        >
            <div className="container flex justify-between items-center w-full" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '980px', margin: '0 auto', height: '100%' }}>
                <Link to="/" className="text-xl font-bold tracking-tight text-black mr-8 flex items-center" style={{ color: '#000000', fontSize: '1.4rem', marginRight: '2rem', height: '100%', display: 'flex', alignItems: 'center' }}>
                    INLABS
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8" style={{ display: 'flex', gap: '2rem', fontSize: '13px', fontWeight: '500' }}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                isActive ? "text-black opacity-100" : "text-gray-900 hover:text-black hover:opacity-100 transition-opacity"
                            }
                            style={({ isActive }) => ({
                                color: isActive ? '#000000' : '#1d1d1f', // Darkened from gray
                                fontSize: '13px',
                                textDecoration: 'none',
                                letterSpacing: '-0.01em'
                            })}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Placeholder (Simple Icon) */}
                <div className="md:hidden text-black" style={{ display: 'none' }}>
                    Menu
                </div>
            </div>
        </nav>
    );
}
