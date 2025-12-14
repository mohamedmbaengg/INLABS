import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', path: '/about' },
        {
            name: 'Solutions',
            path: '#',
            dropdown: [
                { name: 'Gamification', path: '/gamification' },
                { name: 'Education', path: '/education' },
                { name: 'ESG', path: '/esg' },
                { name: 'Emerging Tech', path: '/emerging-tech' },
            ]
        },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
            style={{
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                borderBottom: scrolled ? '1px solid rgba(0,0,0,0.1)' : 'none',
                backgroundColor: scrolled ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.8)'
            }}
        >
            <div className="container flex justify-between items-center w-full" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '980px', margin: '0 auto', height: '100%' }}>
                <Link to="/" className="text-xl font-bold tracking-tight text-black mr-8 flex items-center" style={{ color: '#000000', fontSize: '1.4rem', height: '100%', display: 'flex', alignItems: 'center' }}>
                    INLABS
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center" style={{ display: 'flex', gap: '2rem', fontSize: '14px', fontWeight: '500' }}>
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
                            onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
                        >
                            {link.dropdown ? (
                                <>
                                    <span
                                        className="cursor-pointer text-gray-900 hover:text-black transition-colors"
                                        style={{ color: '#1d1d1f' }}
                                    >
                                        {link.name} ▾
                                    </span>
                                    {/* Dropdown Menu */}
                                    {dropdownOpen && (
                                        <div
                                            className="absolute top-full left-0 bg-white shadow-lg rounded-xl p-2 min-w-[200px] border border-gray-100"
                                            style={{
                                                top: '100%',
                                                left: '-10px',
                                                padding: '8px',
                                                backgroundColor: '#fff',
                                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                                borderRadius: '12px',
                                                border: '1px solid rgba(0,0,0,0.05)'
                                            }}
                                        >
                                            {link.dropdown.map(subItem => (
                                                <NavLink
                                                    key={subItem.name}
                                                    to={subItem.path}
                                                    className="block px-4 py-2 hover:bg-gray-50 rounded-lg text-sm"
                                                    style={{ display: 'block', padding: '10px 16px', color: '#1d1d1f', textDecoration: 'none' }}
                                                >
                                                    {subItem.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        isActive ? "text-black font-semibold" : "text-gray-900 hover:text-black transition-opacity"
                                    }
                                    style={({ isActive }) => ({
                                        color: isActive ? '#000000' : '#1d1d1f',
                                        textDecoration: 'none'
                                    })}
                                >
                                    {link.name}
                                </NavLink>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Placeholder */}
                <div className="md:hidden">
                    <Link to="/contact" className="text-sm font-semibold bg-black text-white px-4 py-2 rounded-full">Book Now</Link>
                </div>
            </div>
        </nav>
    );
}
