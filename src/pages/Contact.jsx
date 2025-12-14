import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        org: '',
        type: 'Consultation',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // REPLACE THESE WITH YOUR ACTUAL KEYS FROM EMAILJS DASHBOARD
        const SERVICE_ID = 'service_wngwfsb';
        const TEMPLATE_ID = 'template_4fgs5fd';
        const PUBLIC_KEY = 'kVM6m8sv_CGoUPOpq';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    org: '',
                    type: 'Consultation',
                    message: ''
                });
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <div className="pt-32 pb-20 animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '5rem', backgroundColor: '#f5f5f7' }}>
            <div className="container">
                <h1 className="text-4xl font-bold mb-6 text-center text-black" style={{ fontSize: '3rem', marginBottom: '1rem', color: '#1d1d1f' }}>Contact Us</h1>
                <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16" style={{ color: '#86868b', fontSize: '1.2rem', marginBottom: '4rem' }}>
                    We’d love to hear from you. Experience the ecosystem in Sharjah Media City.
                </p>

                <div className="grid md:grid-cols-2 gap-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>

                    {/* Contact Info - Clean Card */}
                    <div className="clean-card">
                        <h2 className="text-2xl font-bold mb-6 text-black" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Get in Touch</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">Address</h3>
                                <p className="text-black text-lg">Sharjah Media City<br />United Arab Emirates</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">Email</h3>
                                <p className="text-black text-lg">info@inlabs.ae</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">Connect</h3>
                                <div className="flex gap-4 mt-2" style={{ display: 'flex', gap: '1rem' }}>
                                    {/* Simple text links for social */}
                                    <span className="text-link cursor-pointer hover:underline">LinkedIn</span>
                                    <span className="text-link cursor-pointer hover:underline">Twitter/X</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - Clean White */}
                    <div className="clean-card">
                        <h2 className="text-2xl font-bold mb-6 text-black" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send an Inquiry</h2>

                        {status === 'success' && (
                            <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg">
                                Thank you! Your message has been sent successfully. We will contact you shortly.
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-lg">
                                Oops! Something went wrong. Please try again later or email us directly at info@inlabs.ae.
                            </div>
                        )}

                        <form ref={form} onSubmit={handleSubmit} className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ display: 'grid', gap: '1rem' }}>
                                <input
                                    type="text"
                                    name="name" // Matches template variable {{name}}
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg text-black focus:border-blue-500 outline-none"
                                    style={{ width: '100%', padding: '12px', background: '#f5f5f7', border: '1px solid #d2d2d7', borderRadius: '12px', fontSize: '16px' }}
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone" // Matches template variable {{phone}}
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg text-black focus:border-blue-500 outline-none"
                                    style={{ width: '100%', padding: '12px', background: '#f5f5f7', border: '1px solid #d2d2d7', borderRadius: '12px', fontSize: '16px' }}
                                    required
                                />
                            </div>

                            <input
                                type="email"
                                name="email" // Matches template variable {{email}}
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg text-black focus:border-blue-500 outline-none"
                                style={{ width: '100%', padding: '12px', background: '#f5f5f7', border: '1px solid #d2d2d7', borderRadius: '12px', fontSize: '16px' }}
                                required
                            />

                            <input
                                type="text"
                                name="org" // Matches template variable {{org}}
                                placeholder="Organization"
                                value={formData.org}
                                onChange={handleChange}
                                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg text-black focus:border-blue-500 outline-none"
                                style={{ width: '100%', padding: '12px', background: '#f5f5f7', border: '1px solid #d2d2d7', borderRadius: '12px', fontSize: '16px' }}
                            />

                            <select
                                name="type" // Matches template variable {{type}}
                                value={formData.type}
                                onChange={handleChange}
                                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg text-black focus:border-blue-500 outline-none"
                                style={{ width: '100%', padding: '12px', background: '#f5f5f7', border: '1px solid #d2d2d7', borderRadius: '12px', fontSize: '16px' }}
                            >
                                <option value="Consultation">Book a Consultation</option>
                                <option value="Demo">Request Corporate Demo</option>
                                <option value="Training">Training Inquiry</option>
                                <option value="Other">Other</option>
                            </select>

                            <textarea
                                name="message" // Matches template variable {{message}}
                                rows="4"
                                placeholder="How can we help?"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg text-black focus:border-blue-500 outline-none"
                                style={{ width: '100%', padding: '12px', background: '#f5f5f7', border: '1px solid #d2d2d7', borderRadius: '12px', fontSize: '16px' }}
                                required
                            ></textarea>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{ width: '100%', padding: '14px', fontSize: '16px', opacity: status === 'sending' ? 0.7 : 1 }}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
