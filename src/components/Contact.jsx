import React, { useState } from 'react';
import Connect from './Connect';

function Contact({ id }) {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className='mb-30' id={id}>
            <div className='flex flex-col sm:flex-row bg-gradient-to-r from-sky-400 to-teal-400 opacity-50 px-10 lg:py-10 rounded-3xl lg:mx-30 lg:my-20 gap-5 items-center justify-center z-0'>
                <div>
                    <h1 className='font-serif lg:text-xl font-bold text-black my-5 z-10'>Great things start with a conversation — let’s connect.</h1>
                    <h2 className='lg:text-xl text-black/80 lg:m-auto font-serif rounded-lg z-10'>Got an idea? Let’s turn it into something extraordinary.</h2>
                </div>
                <button
                    onClick={() => setShowForm(true)}
                    className='bg-slate-950 text-white px-6 mb-4 h-[60px] lg:my-5 lg:text-xl font-bold rounded-xl'
                >
                    Contact Me
                </button>
            </div>

            {showForm && <Connect onClose={() => setShowForm(false)} />}
        </div>
    );
}

export default Contact;
