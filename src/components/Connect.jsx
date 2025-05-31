import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Connect({ onClose }) {
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);
    const form = useRef();

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            'service_hbxzbxj',
            'template_aa6xuzb',
            form.current,
            'zFE0ufNTCk8WeKdNX'
        ).then(
            () => {
                alert('Message sent successfully!');
                setValues({ name: '', email: '', subject: '', message: '' });
                setIsSending(false);
                onClose(); 
            },
            (error) => {
                alert('Failed to send message. Please try again.');
                console.error(error.text);
                setIsSending(false);
            }
        );
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="relative max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
                >
                    ×
                </button>

                <h1 className="text-3xl font-bold mb-6 text-center">Let's Connect</h1>
                <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" placeholder="Your Name" value={values.name} onChange={handleChange} className="w-full p-3 border rounded-md" required />
                    <input type="email" name="email" placeholder="Your Email" value={values.email} onChange={handleChange} className="w-full p-3 border rounded-md" required />
                    <input type="text" name="subject" placeholder="Subject" value={values.subject} onChange={handleChange} className="w-full p-3 border rounded-md" required />
                    <textarea name="message" placeholder="Your Message" value={values.message} onChange={handleChange} className="w-full p-3 border rounded-md h-32" required></textarea>
                    <button type="submit" disabled={isSending} className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
                        {isSending ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Connect;
